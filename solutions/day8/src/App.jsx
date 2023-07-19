
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards';

function App() {

const [darkMode, setDarkmode] = useState(true)

function onClicked () {
  setDarkmode((prev) => !prev)
  console.log("dark mode enabled:",darkMode);
}

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: darkMode ? "black" : "lightgray",
      }}
    >
    
    <button onClick={onClicked} style={{transform: "scale(1.1)", margin: "auto"}}>Dark Mode 😒</button>
    <Cards whichMode={darkMode} />
    </div>
  )
}

export default App
