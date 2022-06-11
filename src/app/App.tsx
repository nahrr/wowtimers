import React from 'react';
import Timers from '../timers/Timers';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <Timers/>
    </div>
  );
}

export default App;
