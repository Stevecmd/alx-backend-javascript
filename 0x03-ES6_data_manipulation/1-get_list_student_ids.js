function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return []; // Return an empty array if the input is not an array
  }
  return students.map((student) => student.id); // Use map to extract ids
}

export default getListStudentIds;
