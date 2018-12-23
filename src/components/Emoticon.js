import React from 'react';
import "../themes/Emoticon.css"

const Emoticon = ({data}) => {
    let pollution = 0;
    for (let key in data) {
        switch (key) {
            case "pył zawieszony PM10":
                pollution+=(Math.floor(data[key]/50));
                break;
            case "pył zawieszony PM2.5":
                pollution+=(Math.floor(data[key]/30));
                break;
            case "dwutlenek azotu":
                pollution+=(Math.floor(data[key]/80));
                break;
            case "dwutlenek siarki":
                pollution+=(Math.floor(data[key]/80));
                break;
            case "benzen":
                pollution+=(Math.floor(data[key]/10));
                break;
            case "tlenek węgla":
                pollution+=(Math.floor(data[key]/3000));
                break;
            default:
                break;
        }

    }

    if(pollution===0){
        return <h2><i className="em em-blush"></i>Dobra jakość powietrza</h2>;
    }else if(pollution<3){
        return <h2><i className="em em-innocent"></i>Bywało lepiej</h2>;
    }else if(pollution<5){
        return <h2><i className="em em-face_with_rolling_eyes"></i>Odradza się aktywność fizyczną na zewnątrz</h2>;
    }else if(pollution<7){
        return <h2><i className="em em-anguished"></i>Lepiej zostać w domu</h2>;
    }else{
        return <h2><i className="em em-dizzy_face"></i>Ryzyko poważnych uszczerbków na zdrowiu!</h2>;
    }
};

export default Emoticon;