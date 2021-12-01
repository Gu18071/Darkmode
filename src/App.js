import { useState } from 'react';
import './App.css';

function App() {

   const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode': 'light-mode'}>
      <div className="container">
      <span style={{color: darkMode ? 'grey' : 'yellow'}}>☼</span> 
        <div className="switch-checkbox">
    <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)}></input>
          <span className="slider round"></span>
          </label>
        </div>
        <span style={{color: darkMode ? '#c96dfd' : 'grey'}}>☽</span> 
      </div>
      <div>
        <h1 style={{alignItems:'center', justifyContent:'center', display:'flex', position: 'relative'}}> Darkmode </h1>
      </div>

      
    </div>
  );
}

export default App;
