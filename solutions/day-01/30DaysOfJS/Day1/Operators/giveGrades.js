let scores;
let grades = ['A', 'B', 'C', 'D', 'F'];


const awardGrade = (marks) => {
    let grade

    if (marks >= 80 && marks <= 100)
    {
        grade = grades[0]
        console.log(marks, grade);
    }
    if (marks >= 70 && marks <= 79)
    {
        grade = grades[1]
        console.log(marks, grade);
    }
    if (marks >= 60 && marks <= 69)
    {
        grade = grades[2]
        console.log(marks, grade);
    }
    if (marks >= 50 && marks <= 59)
    {
        grade = grades[3]
        console.log(marks, grade);
    }
    if (marks >=0 && marks <= 49)
     {
        grade = grades[4]
        console.log(marks, grade);
    }
    if (marks <0 || marks > 100)
    {
        console.log(marks, "invalid score!");
    }
    return `${marks} and ${grade}`
}


const getScores = () => {
    scores = prompt("enter your score")

    return Math.round(scores)
}

awardGrade(getScores())
