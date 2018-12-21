import React from 'react';
import DataWrapper from "./DataWrapper";

const AirInfo = ({id,shouldRender})=>{


        return (shouldRender)? (
                <DataWrapper id={id}/>
                ):
                null;


};

export default AirInfo;