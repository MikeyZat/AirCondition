import React, {Component} from 'react';
import "../themes/TimeSwapper.css"
class TimeSwapper extends Component{



    render(){
        return <div className="menu-container">
            <ul className="menu">
                <li><button onClick={() => this.props.onClick(0)}>Now</button></li>
                <li><button onClick={() => this.props.onClick(1)}>6 hours ago</button></li>
                <li><button onClick={() => this.props.onClick(2)}>24 hours ago</button></li>
            </ul>
        </div>;
    }
}

export default TimeSwapper;