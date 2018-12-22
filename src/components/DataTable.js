import React from 'react';
import "../themes/DataTable.css"
const DataTable = ({data}) => {

    let dataList = [];

    for(let key in data){
        if(data[key])
            dataList.push(
                <li key={key}><span className="sensor"> {key}:</span> {data[key]}</li>
            );
        else
            dataList.push(
                <li key={key}><span className="sensor">{key}:</span> Brak aktualnych danych</li>
            );
    }
    return <div>
        <ul className="sensors">
            {dataList}
        </ul>
    </div>;

};

export default DataTable;