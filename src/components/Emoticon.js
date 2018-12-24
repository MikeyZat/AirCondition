import React from 'react';
import "../themes/Emoticon.css"

const Emoticon = ({data,changeColor}) => {
    let pollution = 0;
    for (let key in data) {
        switch (key) {
            case "pył zawieszony PM10":
                pollution+=(Math.floor(data[key]/40));
                break;
            case "pył zawieszony PM2.5":
                pollution+=(Math.floor(data[key]/20));
                break;
            case "dwutlenek azotu":
                pollution+=(Math.floor(data[key]/80));
                break;
            case "dwutlenek siarki":
                pollution+=(Math.floor(data[key]/100));
                break;
            case "benzen":
                pollution+=(Math.floor(data[key]/5));
                break;
            case "tlenek węgla":
                pollution+=(Math.floor(data[key]/3000));
                break;
            default:
                break;
        }

    }

    if(pollution===0){
        changeColor(0);
        return <h2><i className="em em-blush"></i>Dobra jakość powietrza</h2>;
    }else if(pollution<3){
        changeColor(1);
        return <h2><i className="em em-neutral_face"></i>Bywało lepiej</h2>;
    }else if(pollution<5){
        changeColor(2);
        return <h2><i className="em em-face_with_rolling_eyes"></i>Odradza się aktywność fizyczną na zewnątrz</h2>;
    }else if(pollution<7){
        changeColor(3);
        return <h2><i className="em em-anguished"></i>Lepiej zostać w domu</h2>;
    }else{
        changeColor(4);
        return <h2><i className="em em-dizzy_face"></i>Ryzyko poważnych uszczerbków na zdrowiu!</h2>;
    }
};

export default Emoticon;