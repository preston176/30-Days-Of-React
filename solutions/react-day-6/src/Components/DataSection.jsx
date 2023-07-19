// import React from 'react'
import { tenHighestPopulation } from '../tenHighestPopulation'

const totalPopulation = tenHighestPopulation[0].population;


const data = tenHighestPopulation.map((arr) => {

return (<div key={crypto.randomUUID()} className="data"><span className='country'>{arr.country}</span><span><progress value={arr.population/totalPopulation}></progress></span><span>{arr.population}</span></div>)
})

function DataSection() {
  return (
    <div className='data-wrapper'>
    <div className='data-container'>
       {data}
    </div>
    </div>
  )
}

export default DataSection