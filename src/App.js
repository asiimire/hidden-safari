import React from 'react';
import Header from './components/Header';
import HighlightedEvents from './components/HighlightedEvents';
import SnowTreks from './components/SnowTreks';
import SpecialEvents from './components/SpecialEvents';
import EpicAdventure from './components/EpicAdventure';
import SnowTreks from './components/SnowTreks';
import SnowTreks from './components/SnowTreks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HighlightedEvents />
      <SnowTreks />
      <EpicAdventure />
      <Footer />
    </div>
  );
}

export default App;