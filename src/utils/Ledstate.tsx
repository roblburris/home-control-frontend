import React, { useState } from "react";
import "./Styles.css";

var state = "1";

const LedState: React.FC = () => {
    return (
        <div id='wrapper'>
            <h1 className='header'>Turn simple LED On or Off</h1> 
            <button className='button' onClick={() => switchState()}>
                Switch
            </button>
        </div>
    );
}

function switchState() {
    var url = "http://192.168.11.57:8080/switch/" + state;
    fetch(url, {
        method: 'POST'
    });

    if (state == "1") {
        state = "0";
    } else {
        state = "1";
    }
}

export default LedState;