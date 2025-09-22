type Grade = {
  score: number;
  coefficient: number;
}

type Student = {
  firstName: string;
  age: number;
  scores: Grade[];
}

const getAverageScore = (student: Student) => {
  if (!student.scores.length) {
    return -1
  }

  const totalScore = student.scores.reduce((acc, grade) => acc + (grade.score * grade.coefficient), 0)
  return totalScore / student.scores.length
}
 
const getHighestAverageScore = (students: Student[]) => {
  if (!students.length) {
    return null;
  }

  return students.reduce((acc, student) => {
    const averageScore = getAverageScore(student)
    return averageScore > getAverageScore(acc) ? student : acc
  }, students[0])
}
