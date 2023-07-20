import React from 'react'

function Cards({whichMode}) {

  return (
    <div className='cards-container'>
        <div className="cards-wrapper" style={{backgroundColor: whichMode ? "red" : "green"}}>
            <div className="card">
                Card
            </div>
        </div>
    </div>
  )
}

export default Cards