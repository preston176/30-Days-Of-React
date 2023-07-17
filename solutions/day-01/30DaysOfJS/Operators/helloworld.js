// let age = prompt("enter your age")

//     if (age >= 18)
//     {
//         console.log("You are old enough to drive");
//     }
//     else
//     {
//     let timeLeft = 18 - age;
//     console.log(`You are left with ${timeLeft} years to drive`);
// }
let a = 4
let b = 3
let number;


if (a > b)
{
    console.log( `${a} is greater than ${b}`)
}

// ternary

(a > b) ? console.log( `${a} is greater than ${b}`) : ''



const checkNum = (num) => {
    (num % 2 === 0) ? console.log(num, "is an even number")
     : console.log(num, "is an odd number")
}

const getNum = () => {number = prompt("Enter a number")
return number
}

checkNum(getNum())