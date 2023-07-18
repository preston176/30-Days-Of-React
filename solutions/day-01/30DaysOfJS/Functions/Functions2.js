// const solveQuadEquation = (a, b, c) => {
//     const discriminant = b ** 2 - 4 * a * c;
  
//     if (discriminant > 0) {
//       const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//       const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//       return {x1, x2};
//     } else if (discriminant === 0) {
//       const x = -b / (2 * a);
//       return {x};
//     } else {
//       return {};
//     }
//   };
//   console.log(solveQuadEquation()) // {0}
//   console.log(solveQuadEquation(1, 4, 4)) // {-2}
//   console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
//   console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
//   console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
//   console.log(solveQuadEquation(1, -1, 0)) //{1, 0}


//2Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// const printArray =(passedArray) => {
//     passedArray.map( (item) => {
//         console.log(item);
//         return item
        
//     })   
// }

// const array = []
// array.push(2,3,4,5,6,7,999,619)
// printArray(array)

// const showDateTime = () => {
//     let date = new Date().toString()
//     let splitDate = date.split(" ")
//     let shortDate = splitDate.splice(1,3)
//     let toMonth = new Date().getMonth().toString()
//     let finalDate = shortDate.push(toMonth)
//     console.log(splitDate, shortDate, toMonth);
    
// }

// showDateTime()

// const swapValues = (x,y) => {
//     let temp1 = x
//     let temp2 = y

//     x = temp2
//     y = temp1

//     console.log(`x = ${x}  y = ${y}`);
// }

// swapValues(5,4)



// const reverseArray = (e) => {

//     for (let i = 0; i < e.length; i++)
//     {
//         e[0]
//     }

// }


// const array = [1,2,3,4,5]

// console.log(array);

// const reverseArray = (e) => {
//     const newArray = [];
//     for (let i = 0; i < e.length; i++) {
        

//         newArray.push(e[e.length - 1] - i)
        
//     }
//     console.log(newArray);
    
// }
// reverseArray(array)

// const array = ['pres', 'john']

// const capitalizeArray = (e) => {
//     const capitalized = e.toString().toUpperCase()
//     const capArray = []
//     capArray.push(capitalized)
//     console.log(capArray);
    
// }

// capitalizeArray(array)


// const addItem = (e) => {
//     const array = []
//     array.push(e)
//     console.log(array);
//     return array
// }
// addItem(8)
// const array = [1,4,9,8]

// const removeItem = (index) =>{
//     (index === 0) ? array.splice(index,1) : console.log("enter an index");
    
    
//     console.log(array);
//     return array
    
// }

// removeItem()


// const evensAndOdds = (num) => {
//     if (num < 0 || !Number.isInteger(num)) {
//       return 'Please provide a positive integer.';
//     }
  
//     let evenCount = 0;
//     let oddCount = 0;
//     const digits = Array.from(String(num), Number);
  
//     for (const digit of digits) {
//       if (digit % 2 === 0) {
//         evenCount++;
//       } else {
//         oddCount++;
//       }
//     }
//     console.log(oddCount,evenCount);
    
  
//     return `The number of odds are ${oddCount}.\nThe number of evens are ${evenCount}.`;
//   };
  

//   evensAndOdds(100)


// const sumArguments = (...args) => {
//     return args.reduce((sum, arg) => sum + arg, 0);
//   };


//   sumArguments(4)