const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

let maxSkills = 0;
let skilledPerson = '';

for (const user in users) {
  if (users.hasOwnProperty(user)) {
    const { skills } = users[user];
    if (skills.length > maxSkills) {
      maxSkills = skills.length;
      skilledPerson = user;
    }
  }
}

console.log(skilledPerson, "is the person with the most skills.");


let loggedInUsers = 0;
let highPointUsers = 0;

for (const user in users) {
  if (users.hasOwnProperty(user)) {
    const { isLoggedIn, points } = users[user];
    if (isLoggedIn) {
      loggedInUsers++;
    }
    if (points >= 50) {
      highPointUsers++;
    }
  }
}

console.log("Logged-in users:", loggedInUsers);
console.log("Users with >= 50 points:", highPointUsers);


//MERN STACK DEVELOPERS 


const mernStackDevelopers = [];

for (const user in users) {
  if (users.hasOwnProperty(user)) {
    const { skills } = users[user];
    const hasMERNStackSkills = skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node');
    if (hasMERNStackSkills) {
      mernStackDevelopers.push(user);
    }
  }
}
console.log("MERN stack developers:", mernStackDevelopers);

const updatedUsers = {
    ...users,
    Pres: { // Add a new user with your name
        email: 'preston@github.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Tailwind'],
        age: 20,
        isLoggedIn: true,
        points: 100
      }
    };
    

    console.log(updatedUsers);

// get all keys

const keys = Object.keys(users);

console.log(keys);

const values = Object.values(users)

console.log(values);
