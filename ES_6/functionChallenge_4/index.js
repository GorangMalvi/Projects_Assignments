const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],

   
    
};
function countCalculation(school) {
    const { math: { teachers: mathTeachersCount, students: mathStudentsCount }, 
    history: { teachers: historyTeachersCount, students: historyStudentsCount } } = school.departments;
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
}
      
   console.log(countCalculation(school));


   function findTopStudent(school, courseName) {
    const topStudent = school.students.reduce((top, student) => {
      return student.scores[courseName] > top.scores[courseName] ? student : top;
    });
    return topStudent;
  }
  
  console.log(findTopStudent(school, 'math'));
  
  function addNewDept(school, newDepartment) {
    const updatedDepartments = { ...school.departments, ...newDepartment };
    return { ...school, departments: updatedDepartments };
  }
  
  const newDepartment = {
    art: { teachers: 2, students: 50 }
  };
  
  console.log(addNewDept(school, newDepartment));
  
  function highestStudentCountDepartment(school) {
    let maxCount = 0;
    let departmentWithMaxStudents = '';
  
    for (const dept in school.departments) {
      if (school.departments[dept].students > maxCount) {
        maxCount = school.departments[dept].students;
        departmentWithMaxStudents = dept;
      }
    }
  
    return departmentWithMaxStudents;
  }
  
  console.log(highestStudentCountDepartment(school));
  
  function generateGreeting(name, language = 'English') {
    const greetings = {
      'English': `Hello, ${name}!`,
      'Spanish': `¡Hola, ${name}!`,
      'French': `Bonjour, ${name}!`
    };
    return greetings[language];
  }
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
  