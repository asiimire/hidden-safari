import React from 'react';
import Header from './components/Header';
import HighlightedEvents from './components/HighlightedEvents';
import SnowTreks from './components/SnowTreks';
import TreksList from './components/TreksList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HighlightedEvents />
      <SnowTreks />
      <TreksList />
      <Footer />
    </div>
  );
}

export default App;