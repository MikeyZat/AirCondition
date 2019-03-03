import React, {Component} from 'react';
import TimeSwapper from "./TimeSwapper";
import Emoticon from "./Emoticon";
import DataTable from "./DataTable";
import "../themes/DataWrapper.css";
import axios from 'axios';

class DataWrapper extends Component {

    state = {
        data: [],                               //data is an array of objects with data (index 0 - last info,
        index: 0,                                // index 1 - 1 hour ago, index 2 - 24 hours ago
        errorMessage: ""
    };

    changeIndex = (index) => {
        this.setState({
            index
        })
    };

    componentDidMount() {
        this.getSensorAndData(this.props.id);

    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.setState({
                data: []
            });
            this.getSensorAndData(this.props.id);
        }
    }

    getSensorAndData = (id) => {
        axios.get('https://cors-escape.herokuapp.com/https://api.gios.gov.pl/pjp-api/rest/station/sensors/' + id)
            .then(res => {
                this.setState({
                    errorMessage: ""
                });
                let sensors = [];
                res.data.forEach(sensor => {
                    sensors.push({
                        id: sensor.id,
                        name: sensor.param.paramName
                    });
                });
                this.getData(sensors);
            })
            .catch(() => {
                this.setState({
                    errorMessage: "Can't receive data from API due to CORS POLICY (Heroku proxy doesn't work). Showing some random data"
                });
                let sensors = [];
                [{
                    "id": 2745,
                    "stationId": 400,
                    "param": {"paramName": "tlenek węgla", "paramFormula": "CO", "paramCode": "CO", "idParam": 8}
                }, {
                    "id": 2747,
                    "stationId": 400,
                    "param": {"paramName": "dwutlenek azotu", "paramFormula": "NO2", "paramCode": "NO2", "idParam": 6}
                }, {
                    "id": 2750,
                    "stationId": 400,
                    "param": {
                        "paramName": "pył zawieszony PM10",
                        "paramFormula": "PM10",
                        "paramCode": "PM10",
                        "idParam": 3
                    }
                }, {
                    "id": 2752,
                    "stationId": 400,
                    "param": {
                        "paramName": "pył zawieszony PM2.5",
                        "paramFormula": "PM2.5",
                        "paramCode": "PM2.5",
                        "idParam": 69
                    }
                }, {
                    "id": 16500,
                    "stationId": 400,
                    "param": {"paramName": "benzen", "paramFormula": "C6H6", "paramCode": "C6H6", "idParam": 10}
                }].forEach(sensor => {
                    sensors.push({
                        id: sensor.id,
                        name: sensor.param.paramName
                    });
                });
                console.log(sensors);
                this.getData(sensors);
            });
    };

    getData = (sensors) => {
        let newData = [{}, {}, {}];
        sensors.forEach(sensor => {
            axios.get("https://cors-escape.herokuapp.com/http://api.gios.gov.pl/pjp-api/rest/data/getData/" + sensor.id)
                .then(res => {
                    newData[0][sensor.name] = res.data.values[0].value;
                    newData[1][sensor.name] = res.data.values[1].value;
                    newData[2][sensor.name] = res.data.values[24].value;
                }).catch(reason => {
                console.log(reason);
                newData[0]["tlenek węgla"]= 2100.3213;
                newData[1]["tlenek węgla"] = 800.3213;
                newData[2]["tlenek węgla"] = 3200.9413;
                newData[0]["dwutlenek azotu"] = 48.7156;
                newData[1]["dwutlenek azotu"] = 41.9174;
                newData[2]["dwutlenek azotu"] = 56.4152;
                newData[0]["pył zawieszony PM10"] = 67.0514;
                newData[1]["pył zawieszony PM10"] = 30.6189;
                newData[2]["pył zawieszony PM10"] = 123.182;
                newData[0]["pył zawieszony PM2.5"] = 61.7781;
                newData[1]["pył zawieszony PM2.5"] = 19.5747;
                newData[2]["pył zawieszony PM2.5"] = 101.843;
                newData[0]["benzen"] = 2.64512;
                newData[1]["benzen"] = 0.48834;
                newData[2]["benzen"] = 3.23262;
            });
        });
        this.setState({
            data: newData
        });
    };

    render() {
        return (this.state.data.length) ?
            (<div className="data-container">
                {this.state.errorMessage && <span className={"error"}>{this.state.errorMessage}</span>}
                <TimeSwapper onClick={this.changeIndex} index={this.state.index}/>
                <Emoticon changeColor={this.props.changeColor} data={this.state.data[this.state.index]}/>
                <DataTable data={this.state.data[this.state.index]}/>
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