let countries =['Kenya', 'Tanzania', 'India', 'Canada']
console.log(countries);

// if (countries.values("Kenya"))
{
    // console.log(true);
    
}
// es6 ternary

const checkEthiopia = () => {
    countries.includes("Ethiopia") ? console.log(true): console.log("false");
}
checkEthiopia()
// module.exports = countries;


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)