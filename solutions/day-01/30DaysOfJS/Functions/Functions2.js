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

const printArray =(passedArray) => {
    passedArray.map( (item) => {
        console.log(item);
        return item
        
    })   
}

const array = []
array.push(2,3,4,5,6,7,999,619)
printArray(array)