import React, {Component} from 'react';
import "../themes/Emoticon.css"

class Emoticon extends Component {

    constructor(props) {
        super(props);
        this.isDataLoaded = false;
        this.isDataAvailable = false
    }

    componentDidMount() {
        setTimeout(() => {
            this.forceUpdate()
        }, 1000);
    }

    calculatePollution = (data) => {
        let pollution = 0;
        this.isDataLoaded = false;                  //bool flag to determine if data has loaded properly
        this.isDataAvailable = false;                  //bool flag to determine if there is any available data
        for (let key in data) {
            this.isDataLoaded = true;
            if (data.hasOwnProperty(key))
                switch (key) {
                    case "pył zawieszony PM10":
                        if (data[key]) {
                            this.isDataAvailable = true;
                            pollution += (Math.floor(data[key] / 40));
                        }
                        break;

                    case "pył zawieszony PM2.5":
                        if (data[key]) {
                            this.isDataAvailable = true;
                            pollution += (Math.floor(data[key] / 20));
                        }
                        break;
                    case "dwutlenek azotu":
                        if (data[key]) {
                            this.isDataAvailable = true;
                            pollution += (Math.floor(data[key] / 80));
                        }
                        break;
                    case "dwutlenek siarki":
                        if (data[key]) {
                            this.isDataAvailable = true;
                            pollution += (Math.floor(data[key] / 100));
                        }
                        break;
                    case "benzen":
                        if (data[key]) {
                            this.isDataAvailable = true;
                            pollution += (Math.floor(data[key] / 5));
                        }
                        break;
                    case "tlenek węgla":
                        if (data[key]) {
                            this.isDataAvailable = true;
                            pollution += (Math.floor(data[key] / 3000));
                        }
                        break;
                    default:
                        break;
                }

        }
        return pollution
    };

    render() {
        let {data, changeColor} = this.props;
        let pollution = this.calculatePollution(data);
        if (!this.isDataLoaded) {
            return <h2></h2>
        }
        if (!this.isDataAvailable) {
            return <h2><i className="em em-neutral_face"> </i>Sprawdź później</h2>;
        }
        if (pollution === 0) {
            changeColor(0);
            return <h2><i className="em em-blush"> </i>Dobra jakość powietrza</h2>;
        } else if (pollution < 3) {
            changeColor(1);
            return <h2><i className="em em-neutral_face"> </i>Bywało lepiej</h2>;
        } else if (pollution < 5) {
            changeColor(2);
            return <h2><i className="em em-face_with_rolling_eyes"> </i>Odradza się aktywność fizyczną na zewnątrz</h2>;
        } else if (pollution < 7) {
            changeColor(3);
            return <h2><i className="em em-anguished"> </i>Lepiej zostać w domu</h2>;
        } else {
            changeColor(4);
            return <h2><i className="em em-dizzy_face"> </i>Ryzyko poważnych uszczerbków na zdrowiu!</h2>;
        }
    };
}

export default Emoticon;