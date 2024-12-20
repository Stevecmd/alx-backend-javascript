const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));

    const result = [];
    result.push(`Number of students: ${students.length}`);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    return result.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
