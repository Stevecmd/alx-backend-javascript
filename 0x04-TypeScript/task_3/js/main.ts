/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';
// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert the row and get the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age field
const updatedRow: RowElement = { 
    firstName: "Guillaume", 
    lastName: "Salva", 
    age: 23 
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
