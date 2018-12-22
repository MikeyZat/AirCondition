import React, {Component} from 'react';
import "../themes/TimeSwapper.css"
class TimeSwapper extends Component{



    render(){
        return <div className="menu-container">
            <ul className="menu">
                <li className={this.props.index===0 ? "active":undefined} onClick={() => this.props.onClick(0)}>Now</li>
                <li className={this.props.index===1 ? "active":undefined} onClick={() => this.props.onClick(1)}>6 hours ago</li>
                <li className={this.props.index===2 ? "active":undefined} onClick={() => this.props.onClick(2)}>24 hours ago</li>
            </ul>
        </div>;
    }
}

export default TimeSwapper;