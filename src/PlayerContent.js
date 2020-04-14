import React, { useState, useCallback, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Timestamps from './Timestamps.js'
import PlayerHeader from './PlayerHeader.js'

function PlayerContent() {
    // Fetch
    let [trackUrl, setTrackUrl] = useState('https://k003.kiwi6.com/hotlink/2rc3rz4rnp/1.mp3');
    let [trackName, setTrackName] = useState('Conmigo');
    let [trackLength, setTrackLength] = useState(100);
    let [albumArt, setAlbumArt] = useState('');

    // Change on the run
    let [playStatus, setPlayStatus] = useState("play");
    // curr Time


  return (
    <div className="PlayerContent">
        <PlayerHeader/>
        {/* <Scrubber /><Controls /> */}
        <Timestamps duration={trackLength} currentTime='23' />
        <audio src={trackUrl} controls/>
    </div>
  );
}

export default PlayerContent;
