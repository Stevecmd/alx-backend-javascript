// Reads database asynchronously and returns a promise
import fs from 'fs';

/**
 * Reads database asynchronously and returns a promise
 * @param {string} filePath - path to the csv file
 * @returns {Promise<object>} - a promise that resolves to an object
 * where each key is a field name and each value is an array of student IDs
 */
export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const students = lines.slice(1).map((line) => line.split(','));
        const fields = {};

        students.forEach((student) => {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        });

        resolve(fields);
      }
    });
  });
}
