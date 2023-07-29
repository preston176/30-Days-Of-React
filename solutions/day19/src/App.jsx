import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [card, setCard] = useState([]);
  const [selections, setSelections] = useState([])

  const handleclick = (e) => {

 setCard([...card, e.target.textContent])
   
    // console.log(e.target.textContent)
    
  }

  return (
    <div className='container1'>
      <div className="card__container">
        {/* {card.map((item, index) => {
          return (<div key={index} className="card select">{item}</div>)
        })}  */}
        {card.map((item, index) => (
          <div className="card select" key={index}>{item}</div>
        ))}
      </div>
      <div className="selctions">
        <div onClick={handleclick} className="card select">card 1</div>
        <div onClick={handleclick} className="card select">card 2</div>
        <div onClick={handleclick} className="card select">card 3</div>
      </div>
    </div>
  )
}

export default App
