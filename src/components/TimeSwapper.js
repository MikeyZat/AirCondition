import React, {Component} from 'react';

class TimeSwapper extends Component{



    render(){
        return <div className="menu">
            <ul>
                <li><button onClick={() => this.props.onClick(0)}>Now</button></li>
                <li><button onClick={() => this.props.onClick(1)}>6 hours ago</button></li>
                <li><button onClick={() => this.props.onClick(2)}>24 hours ago</button></li>
            </ul>
        </div>;
    }
}

export default TimeSwapper;