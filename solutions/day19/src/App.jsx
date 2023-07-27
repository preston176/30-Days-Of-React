
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [totalCats, setTotalCats] = useState([])
  const [avgAges, setAvgAges] = useState()
  const [avgWeigh, setAvgWeigh] = useState()
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        const averageAges = [];
        data.forEach(cat => {
          let life = cat.life_span;
          // console.log(life);

          let ages = life.split('-').map(Number);
          const sum = ages.reduce((a, b) => a + b, 0);
          let avgAge = sum / ages.length;
          // console.log(avgAge);
  
          averageAges.push(avgAge);
        });

        const overallAvgAge = averageAges.reduce((a, b) => a + b, 0) / averageAges.length;
        console.log('Overall Average Age:', overallAvgAge);

        setAvgAges(overallAvgAge.toFixed(1))
        setTotalCats(data.length);
      
        const averageWeights = [];

        data.forEach(cat => {
          let weight = cat.weight.metric;
          console.log(weight);
  
          let weights = weight.split('-').map(Number);
          const sum = weights.reduce((a, b) => a + b, 0);
          let avgWeights = sum / weights.length;
          console.log('Average Weight for Cat:', avgWeights);
  
          // Store the average weight for each cat in the array
          averageWeights.push(avgWeights);
        });
  
        // Calculate the overall average weight for all cats
        const overallAvgWeight = averageWeights.reduce((a, b) => a + b, 0) / averageWeights.length;
        console.log('Overall Average Weight:', overallAvgWeight)
      
        setAvgWeigh(overallAvgWeight.toFixed(1))
      });

  }, []);
  


  return (
    <div className='form-control justify-content-center text-center'>
      <h1>30 Days of react</h1>
      <div className="cats">
        <h3>Cats paradise</h3>
        <div className="stats">
          <p>Total cats: {totalCats}</p>
          <p>Average Age : {avgAges}</p>
          <p>Average weight: {avgWeigh}</p>
        </div>
      </div>
    </div>
  )
}

export default App
