const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages);
//sorted array
ages.sort()
console.log(ages);
// find min and max ages
const minValue = Math.min(...ages)
const maxValue = Math.max(...ages)
console.log(minValue, maxValue);

const medianAgeIndex = Math.floor(ages.length / 2)
const medianAge = ages[medianAgeIndex]
console.log(medianAge);

