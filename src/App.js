import React from 'react';
import './App.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import NavTabs from './components/NavTabs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavTabs></NavTabs>
      <main>
        <Home></Home>
        <Contact></Contact>
        <Portfolio></Portfolio>
        <About></About>
      </main>
    </div>
  );
}

export default App;
