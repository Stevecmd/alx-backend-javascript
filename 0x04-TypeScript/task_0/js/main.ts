interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

/**
 * Renders a table displaying student information.
 * @param students The list of students to display.
 */
const renderTable = (students: Student[]) => {
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    tableHead.appendChild(headRow);
    
    const tableBody = document.createElement("tbody");
    students.forEach(student => {
        const bodyRow = document.createElement("tr");
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.appendChild(bodyRow);
    });

    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
};

// Apply styles
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.appendChild(styleSheetElement);

// Render the table
renderTable(studentsList);
