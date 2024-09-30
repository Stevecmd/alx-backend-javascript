export default function createReportObject(employees) {
  return {
    allEmployees: employees,
    getNumberOfDepartments(emp) {
      return Object.keys(emp).length;
    },
  };
}
