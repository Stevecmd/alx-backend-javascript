function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city); // Filter students by location
}

export default getStudentsByLocation;
