import React from 'react';
import Header from './components/Header';
import HighlightedEvents from './components/HighlightedEvents';
import SnowTreks from './components/SnowTreks';
import SpecialEvents from './components/SpecialEvents';
import EpicAdventure from './components/EpicAdventure';
import SummerEvents from './components/SummerEvents';
import Footer from './components/Footer';
import './App.css';
import ExperienceSection from './components/ExperienceSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HighlightedEvents />
      <SnowTreks />
      <SummerEvents />
      <EpicAdventure />
      <SpecialEvents />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;