import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BirdOverview from "./views/bird-overview/BirdOverview";
import {IBird} from "./common/models/bird.model";
import {birdsMockDate} from "./common/mock-data";

function App() {
  const [birds, setBirds] = useState<IBird[]>(birdsMockDate);

  return (
    <div className="App">
    <BirdOverview birds={birds}></BirdOverview>
    <BirdOverview birds={birds}></BirdOverview>
    </div>
  );
}

export default App;
