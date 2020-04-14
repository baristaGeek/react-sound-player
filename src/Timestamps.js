import React, { useState, useCallback, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Timestamps(props) {
    let [trackUrl, setTrackUrl] = useState('https://k003.kiwi6.com/hotlink/2rc3rz4rnp/1.mp3');
    let [trackLength, setTrackLength] = useState(92)
    let [playStatus, setPlayStatus] = useState("play");
    // curr Time
  return (
    <div className="Timestamps">
      <div className="Time Time--current">{props.trackUrl}</div>
      {/* <div className="Time Time--total">{trackUrl}</div> */}
    </div>
  );
}

export default Timestamps;
