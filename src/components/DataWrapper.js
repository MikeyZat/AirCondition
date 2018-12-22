import React, {Component} from 'react';
import TimeSwapper from "./TimeSwapper";
import Emoticon from "./Emoticon";
import DataTable from "./DataTable";
import "../themes/DataWrapper.css";
import axios from 'axios';
class DataWrapper extends Component {

    state = {
        data: [],//data is an array of objects with data (index 0 - last info,
        index:0                                // index 1 - 6 hours ago, index 2 - 24 hours ago
    };

    changeIndex = (index) =>{
        this.setState({
            index
        })
    };

    componentDidMount(){
        let id = this.props.id;
        axios.get('https://cors-escape.herokuapp.com/https://api.gios.gov.pl/pjp-api/rest/station/sensors/'+id)
            .then(res => {
                let sensors=[];
                res.data.forEach(sensor =>{
                    sensors.push({
                        id:sensor.id,
                        name:sensor.param.paramName
                    });
                });
                this.getData(sensors);
            })
            .catch(reason => {
                console.log(reason);
            });

    }

    getData = (sensors) =>{
        let newData=[{},{},{}];
        sensors.forEach( sensor => {
            axios.get("https://cors-escape.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/data/getData/"+sensor.id)
                .then(res => {
                    newData[0][sensor.name]=res.data.values[0].value;
                    newData[1][sensor.name]=res.data.values[6].value;
                    newData[2][sensor.name]=res.data.values[24].value;
                }).catch(reason => {
                console.log(reason);
            });
        });
        this.setState({
            data:newData
        });
    };

    render() {
        return (this.state.data.length)?
            (<div className="data-container">
                <TimeSwapper onClick={this.changeIndex} index={this.state.index}/>
                    <Emoticon data = {this.state.data[this.state.index]}/>
                    <DataTable data = {this.state.data[this.state.index]}/>
            </div>)
            :
            (<div className="data-container loading">
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <span className="ld-span">Ładuję dane...</span>
            </div>
    );
    }
}

export default DataWrapper;