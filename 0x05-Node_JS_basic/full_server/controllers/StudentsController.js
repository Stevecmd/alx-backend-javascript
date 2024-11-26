import { readDatabase } from '../utils';

/**
 * Controller for handling student-related requests
 * @class StudentsController
 * @exports StudentsController
 * @static
 * @public
 * @version 1.0.0
 */
class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2];
    readDatabase(database)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        for (const [field, students] of Object.entries(fields)) {
          response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }
        res.send(response.trim());
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  /**
   * Sends a list of all students in a specific major
   * @param {Object} req - Express.js request object
   * @param {Object} res - Express.js response object
   * @param {string} req.params.major - The major for which to retrieve students
   * @throws {Error} If the major parameter is not either 'CS' or 'SWE'
   * @returns {undefined}
   */
  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const database = process.argv[2];
    readDatabase(database)
      .then((fields) => {
        const students = fields[major] || [];
        res.send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;