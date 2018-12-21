import React, {Component} from 'react';
import TimeSwapper from "./TimeSwapper";
import Emoticon from "./Emoticon";
import DataTable from "./DataTable";
import "../themes/DataWrapper.css"
class DataWrapper extends Component {

    state = {
        data: [],                         //data is an array of objects with data (index 0 - last info,
        index:0                                // index 1 - 6 hours ago, index 2 - 24 hours ago
    };

    changeIndex = (index) =>{
        this.setState({
            index
        })
    };

    render() {
        return (this.state.data.length)?
            (<div className="data-container loading">
                <TimeSwapper onClick={this.changeIndex}/>
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