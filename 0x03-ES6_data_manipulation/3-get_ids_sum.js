function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0); // Use reduce to sum the ids
}

export default getStudentIdsSum;
