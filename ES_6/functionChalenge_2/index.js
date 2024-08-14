//Example Invocation:
const employee = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  function employeeInformation(employees) {
  
  
 
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
  
    
    return { secondEmployeeName, secondEmployeeDepartment };
  }
  console.log(employeeInformation(employee)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }
  

//Example Invocation:

const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  function averageSalary(employees1) {
    let totalSalary = 0;
    for (const { salary } of employees1) {
      totalSalary += salary;
    }
    return totalSalary / employees1.length;
  }
  console.log(averageSalary(employees1)); // Output: 60000
  

 
//Example Invocation:

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  function thirdEmployeeInfo(employees2) {
   
    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees2[2];
  
  
    const bonus = thirdEmployeeSalary * 0.10;
  
  
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
  }
  console.log(thirdEmployeeInfo(employees2)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"

  
  