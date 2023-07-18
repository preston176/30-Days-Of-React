const dog = {}

// console.log(dog)


dog.name = "scooby"
dog.legs = 4
dog.age = 5
dog.bark = () => {
    return "woof woof"
}

// console.log(dog);

// console.log(dog.name,dog.age,dog.bark());

// set new props

dog.breed = "german shepherd"
dog.getDogInfo = () => {
    return dog
}

console.log(dog.getDogInfo());
