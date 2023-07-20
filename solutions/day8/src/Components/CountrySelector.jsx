import React from 'react'

function CountrySelector() {
  return (
    <div>

    <div className="country-img-name">
    <img src="" alt="country-img" />
    <p>Country Name</p>
    </div>

    <div className="country-stats">

        <p>Capital: </p>
        <p>Languages: </p>
        <p>Population: </p>
        <p>Currency: </p>
    </div>


    <button>Select country</button>
    </div>
  )
}

export default CountrySelector