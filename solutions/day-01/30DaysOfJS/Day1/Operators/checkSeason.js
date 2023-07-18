let season;


const checkSeason = (input) => {
   
    if (input === "november" || input === "october" || input === "september")
    {
        season = "Autumn"
        console.log(input, "the season is Autumn");
}
if (input === "december" || input === "january" || input === "february")
{
    season = "Winter"
    console.log(input, "the season is Winter");
}
if (input === "march" || input === "april" || input === "may")
{
    season = "Spring"
    console.log(input, "the season is Spring");
}

if (input === "june" || input === "july" || input === "august")
{
    season = "Summer"  
    console.log(input, "the season is Summer");
}
return input, season;

}


const getInput = () => {

    let data = prompt("Enter month")

    return data.toLowerCase();

}

checkSeason(getInput())