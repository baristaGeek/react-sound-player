import React, { useState, useCallback, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';
// import PlayerTrack from './PlayerTrack.js';
import PlayerContent from './PlayerContent.js';

function App() { 
    return (
      <div className="App">
        <PlayerContent />
      </div>
    );
}

export default App;
