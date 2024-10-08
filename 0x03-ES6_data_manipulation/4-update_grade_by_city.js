function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      // Find the corresponding grade for the student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, // Spread the existing student properties
        grade: gradeObj ? gradeObj.grade : 'N/A', // Assign the grade or 'N/A'
      };
    });
}

export default updateStudentGradeByCity;
