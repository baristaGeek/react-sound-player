import React, { useState, useCallback, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Timestamps from './Timestamps.js'
const axios = require('axios');

function PlayerHeader() {
    // Fetch
    // let [trackUrl, setTrackUrl] = useState('https://k003.kiwi6.com/hotlink/2rc3rz4rnp/1.mp3');
    // let [trackName, setTrackName] = useState('Conmigo');
    // let [artist, setArtist] = useState("Bomba Estereo");
    // let [albumName, setAlbumName] = useState('To My Love');
    let [tracks, setTracks] = useState([]);
    let [trackLength, setTrackLength] = useState(100);

    // Change on the run
    let [playStatus, setPlayStatus] = useState("play");
    // curr Time

        useEffect(() => 
            axios.get('https://jsonblob.com/api/374c8a16-7def-11ea-a6e7-39037b2a7b60')
            .then(function (response) {
                console.log("response.data: ")
                console.log(response.data);
                setTracks(response.data);
                console.log("tracks: ")
                console.log(tracks);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            // always executed
            })
        );


  return (
    <div className="PlayerHeader">
        <h2>Tracks</h2>
        {/* <h2>{tracks[0]["name"]}</h2>
        <p>{tracks[0]["artist"]} - {tracks[0]["name"]}</p> */}
    </div>
  );
}

export default PlayerHeader;
