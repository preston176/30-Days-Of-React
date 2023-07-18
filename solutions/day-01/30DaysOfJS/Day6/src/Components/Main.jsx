export default function Main() {
const array = []
for (let i = 1; i <= 31; i++) {
         array.push(i);

}
const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
const newArray = array.map((arr) => {
    let backgroundColor = '';
  
    if (isPrime(arr)) {
      backgroundColor = 'red';
    } else if (arr % 2 === 0) {
      backgroundColor = 'green';
    } else {
      backgroundColor = 'yellow';
    }
  
    return (
      <div key={crypto.randomUUID()} className="number-card" style={{ backgroundColor, padding: '1rem', maxWidth: 'fit-content', margin: '0.1rem'}}>
        {arr}
      </div>
    );
  });


  return (
    <div className='grid-container'>
        <div className="numbers-container" style={{display: 'flex', border: "2px solid black", height: 'fit-content', width: 'fit-content', margin: "auto", flexWrap: "wrap", maxWidth: '50%',}}>
        {newArray}
        </div>
    </div>
  )
}
