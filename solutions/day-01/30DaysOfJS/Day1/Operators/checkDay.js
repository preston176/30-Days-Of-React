let day;
let input;

const checkDay = (e) => {
    if (e === "monday" || e === "tuesday"
    || e === "wednesday" || e === "thursday"
    || e === "friday"
    )
    {
        console.log(e, "is a working day");
        
    }
    if (e=== "saturday" || e === "sunday")
    {
        console.log(e, "is a weekend");
    }
    return e
}

const getDay = () => {
    input = prompt("Enter the day")

    return input.toLowerCase()
}

checkDay(getDay("monday"))