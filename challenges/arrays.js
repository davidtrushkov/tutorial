// ARRAYS CHALLENGE

const students = [
  {
    id: 1,
    name: "peter",
    score: 80,
    favoriteSubject: "math",
  },
  {
    id: 2,
    name: "david",
    score: 77,
    favoriteSubject: "design",
  },
  {
    id: 3,
    name: "marry",
    score: 89,
    favoriteSubject: "writing",
  },
  {
    id: 4,
    name: "joe",
    score: 66,
    favoriteSubject: "computer science",
  },
  {
    id: 5,
    name: "ivan",
    score: 100,
    favoriteSubject: "reading",
  },
];


const updatedStudents = students.map(function(student) {
    student.role = 'student'
    return student;
})

const highScores = students.filter(function(scores) {
    return scores.score >= 80;
})

const specificID = students.find(function(id) {
    return id.id === 4;
})


// REDUCE METHOD
// Find average score of students
const averageScore = students.reduce(function(scoresTotal, student) {
    return scoresTotal + student.score;
}, 0) / students.length;

console.log(averageScore);

console.log(updatedStudents);
console.log(highScores);
console.log(specificID);