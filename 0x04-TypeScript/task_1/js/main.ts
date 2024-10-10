// Teachers
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional
    location: string;
    [key: string]: any; // Allow additional properties
}

// Extend the Teacher interface to create Directors
interface Directors extends Teacher {
    numberOfReports: number; // Required attribute
}

// Interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// printTeacher Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

const teacher1: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York',
    contract: true, // Additional property
};

const teacher2: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
    yearsOfExperience: 5, // Optional property
    contract: false, // Additional property
};

// Create an instance of Directors
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

// Function to display teacher information
const displayTeacherInfo = (teacher: Teacher) => {
    console.log(`Name: ${teacher.firstName} ${teacher.lastName}`);
    console.log(`Full Time: ${teacher.fullTimeEmployee}`);
    console.log(`Location: ${teacher.location}`);
    if (teacher.yearsOfExperience !== undefined) {
        console.log(`Years of Experience: ${teacher.yearsOfExperience}`);
    }
    // Display additional properties
    for (const key in teacher) {
        if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)) {
            console.log(`${key}: ${teacher[key]}`);
        }
    }
};

// Display information for each teacher
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);

// Log the director information
console.log(director1);

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

// Students
// Interface for the StudentClass
interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Implementation of the StudentClass
class Student implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage of the StudentClass
const student1 = new Student('Alice', 'Johnson');
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working
