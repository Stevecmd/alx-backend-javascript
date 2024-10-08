// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Declare the functions from crud.js
declare module 'crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
}

export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
  export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
  }
  
  export function updateRow(rowId, row) {
    console.log(`Update row ${rowId}`, row);
    return rowId;
  }
