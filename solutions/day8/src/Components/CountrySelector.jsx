import React, { useEffect, useState } from 'react'

const countriesArray = [{
    image: "",
    Name: "Kenya",
    Capital: "Nairobi",
    Languages: "English, Kiswahili",
    Population: "900 0000",
    Currency : "KES"
},{
    image: "",
    Name: "Nigeria",
    Capital:"Lagos",
    Languages: "English, Kiswahili",
    Population: "100,2944,000",
    Currency : "NAIRA" 
},{},{}]



console.log(countriesArray[0]);



function CountrySelector() {

const [countryState ,SetCountryState] = useState(0);

const displayCountry = countriesArray[countryState]


console.log(displayCountry.Name);
    
  return (
    <div>

    <div className="country-img-name">
    <img src={displayCountry.image} alt="country-img" />
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