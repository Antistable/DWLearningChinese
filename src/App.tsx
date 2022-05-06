import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <textarea className='input'></textarea>
      <br></br><br></br>
      <button className='convert'>⇱简体转正体</button>
      &nbsp;&nbsp;
      <button className='convert'>正体转简体⇲</button>
      <br></br><br></br>
      <textarea className='input'></textarea>
    </div>
  );
}

export default App;
