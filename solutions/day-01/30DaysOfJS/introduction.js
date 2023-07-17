const emptyArr = Array()
// console.log(emptyArr); //[]

const arr5 = ['Vue', 'svelte', 'git', 'node', 'Microsoft', 'React', 'teams'];
// console.log(arr5);


// console.log(arr5.length); //7

//first item
const firstItem = arr5[0];
// console.log(firstItem); //vue
//middle item index
// console.log( arr5.length ); //7
// get index of middle item
const middleItemIndex = Math.floor((arr5.length / 2) );

// console.log(arr5[middleItemIndex]); //node
//last item index
const lastItemIndex = arr5.length - 1;

const lastItem = arr5[lastItemIndex];
//last item // teams
// console.log(lastItem);


const mixedDataTypes = [1, "pres", {name: "john"}, true, 'c', [12,13]]

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array  
console.log(itCompanies);

// no of companies
console.log(itCompanies.length);

//first company
console.log(itCompanies[0]);

//middle company

const middleCompanyIndex = Math.floor(itCompanies.length /2);

const middleCompany = itCompanies[middleCompanyIndex];

console.log(middleCompany);
// array.map 
const eachCompany = itCompanies.map( (e) => {console.log(e);
   
});
// capitalize each company
const eachCompanyUpper = itCompanies.map( (e) => {console.log(e.toUpperCase())})

// print as a string
console.log(`${itCompanies.toString()} are big IT companies`);
const checkCompany = (check) => { itCompanies.includes(check) ? console.log(`${check} exists`) : console.log(`${check} does not exist`);

}
// does not exist
checkCompany('dazzz')

// Amazon exists
checkCompany('Amazon')


//more than 2 Os

const filteredCompanies = [];

itCompanies.forEach(company => {
    let count = 0;
    
    Array.from(company).forEach(letter => {
      if (letter.toLowerCase() === 'o') {
        count++;
      }
    });
    
    if (count > 1) {
      filteredCompanies.push(company);
    }
  });

// display the filteredcompanies
  console.log(filteredCompanies);
  
//sort the array
  const sortedCompanies = filteredCompanies.sort();

  console.log(sortedCompanies);
  
// reverse the array

const reversedArray = filteredCompanies.reverse();

console.log(reversedArray);


//Slice out the first 3 companies from the array

const slice3 = itCompanies.slice(3)
console.log(slice3);

//Slice out the last 3 companies from the array

const last3 = itCompanies.slice(-3)
console.log(last3);


// slice middle item from the array
const sliceMiddle = itCompanies.slice(middleCompanyIndex, middleCompanyIndex+1)
console.log(sliceMiddle);

//Remove the first IT company from the array
const removeFirst = itCompanies.shift()
// first element removed
console.log(removeFirst, [...itCompanies]);


//Remove the middle IT company or companies from the array

const removeMiddle = itCompanies.shift(middleCompany)

//Remove the middle IT company or companies from the array
console.log(removeMiddle , [...itCompanies]);


//Remove the last IT company from the array
const removeLast = itCompanies.pop()

console.log(removeLast, [...itCompanies]);

//Remove all items from the array

// itCompanies.length = 0; OR
itCompanies.splice(0, itCompanies.length)

console.log("empty array",itCompanies);

