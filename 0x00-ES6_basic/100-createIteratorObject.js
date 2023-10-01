export default function createIteratorObject(report) {
  const employees = [];
  
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  let current = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (current < employees.length) {
            return { value: employees[current++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
