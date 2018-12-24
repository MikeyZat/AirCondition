import React from 'react';
import DataWrapper from "./DataWrapper";

const AirInfo = ({id,shouldRender,changeColor})=>{


        return (shouldRender)? (
                <DataWrapper id={id} changeColor={changeColor}/>
                ):
                null;


};

export default AirInfo;