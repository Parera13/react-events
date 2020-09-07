import React from 'react';
import './App.css';
import Input from './components/onclick';
import Counter from './components/counter';
import Toggle from './components/toggle';
import SpreadArray from './components/spreadArray';
import StateArray from './components/stateArrey';



function App() {
  return (
    <div className="App">
      <Input />
      <Counter />
      <Toggle />
      <SpreadArray />
      <StateArray />
    </div>
  );
}

export default App;
