import React from 'react';
import "../themes/Emoticon.css"
const Emoticon = ({data}) =>{
        let smile = <i className="em em-blush"></i>;
        let normal = <i className="em em-innocent"></i>;
        let confused = <i className="em em-face_with_rolling_eyes"></i>;
        let worried = <i className="em em-anguished"></i>;
        let dead = <i className="em em-dizzy_face"></i>;


    return <h2>{smile}Lepiej zostać w domu</h2>;

};

export default Emoticon;