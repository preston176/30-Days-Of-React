import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({
    top: `${randomPosition()}px`,
    left: `${randomPosition()}px`,
    
  });

  function randomPosition() {
    const randOm = Math.floor(Math.random() * 500);
    return randOm;
  }

  function handleMouseEnter() {
    setPosition({
      top: `${randomPosition()}px`,
      left: `${randomPosition()}px`,
      bottom: `${randomPosition()}px`
    });
  }

  const styles = {
    position: "absolute",
    top: position.top,
    left: position.left
  };

  return (
    <>
    <div className='container'  style={styles} onMouseEnter={handleMouseEnter}>
      <button
        className='btn'
       
        onMouseEnter={handleMouseEnter}
      >
        Try Click me
      </button>
      </div>
    </>
  );
}

export default App;
