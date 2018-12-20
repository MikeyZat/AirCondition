import React, {Component} from 'react';
import DataWrapper from "./DataWrapper";
class AirInfo extends Component {

    render(){
        return (this.props.shouldRender)? (
                <DataWrapper data={this.props.info}/>
                ):
                null;

    }
}

export default AirInfo;