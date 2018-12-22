import React from 'react';

const DataTable = ({data}) => {

    let dataList = [];

    for(let key in data){
        if(data[key])
            dataList.push(
                <li key={key}>{key}: {data[key]}</li>
            );
        else
            dataList.push(
                <li key={key}>{key}: Brak aktualnych danych</li>
            );
    }
    return <div>
        <ul>
            {dataList}
        </ul>
    </div>;

};

export default DataTable;