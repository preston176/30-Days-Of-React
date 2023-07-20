import React, { useEffect, useState } from 'react'

const countriesArray = [{
    image: "",
    Name: "Kenya",
    Capital: "Nairobi",
    Languages: "English, Kiswahili",
    Population: "900 0000",
    Currency : "KES"
},{},{},{}]



console.log(countriesArray[0]);



function CountrySelector() {

const [countryState ,SetCountryState] = useState(0);

const displayCountry = countriesArray[countryState]


console.log(displayCountry.Name);
    
  return (
    <div>

    <div className="country-img-name">
    <img src="" alt="country-img" />
    <p>Country Name : {displayCountry.Name}</p>
    </div>

    <div className="country-stats">

        <p>Capital: {displayCountry.Capital}</p>
        <p>Languages:{displayCountry.Languages} </p>
        <p>Population: {displayCountry.Population}</p>
        <p>Currency: {displayCountry.Currency}</p>
    </div>


    <button>Select country</button>
    </div>
  )
}

export default CountrySelector