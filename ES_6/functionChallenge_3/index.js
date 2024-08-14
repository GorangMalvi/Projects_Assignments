// Example Invocation:

javascript

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
function highestPaid(employees) {
  let highestSalary = 0;
  let highestPaidEmployee = {};

  for (const employee of employees) {
    const { salary } = employee; // Destructuring to get the salary
    if (salary > highestSalary) {
      highestSalary = salary;
      highestPaidEmployee = employee;
    }
  }

  return highestPaidEmployee;
}
console.log(highestPaid(employee)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }


// Example Invocation:

const employee = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
function destructuringToSwap(employee) {
    if (employee.length < 2) {
      // If there are less than 2 employees, no need to swap
      return employee;
    }
  
    // Destructuring assignment to swap the first and last employees
    [employee[0], employee[employee.length - 1]] = [employee[employee.length - 1], employee[0]];
  
    return employee;
  }
console.log(destructuringToSwap(employee)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
 