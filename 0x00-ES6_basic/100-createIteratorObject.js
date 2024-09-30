export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < allEmployees.length) {
            const value = allEmployees[index];
            index += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
