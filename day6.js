// Create an employee object
let employee = {
    id: 101,
    name: "Samira",
    department: "IT",
    salary: 100000
};

// Display the original object
console.log("Original Employee Object:");
console.log(employee);

// Add a new property
employee.address = "Damak";
console.log("\nAfter Adding Address:");
console.log(employee);

// Update the salary
employee.salary = 60000;
console.log("\nAfter Updating Salary:");
console.log(employee);

// Delete the department property
delete employee.department;
console.log("\nAfter Deleting Department:");
console.log(employee);