// export function taskFirst() {
//   const task = 'I prefer const when I can.';
//   return task;
// }

// export function getLast() {
//   return ' is okay';
// }

// export function taskNext() {
//   let combination = 'But sometimes let';
//   combination += getLast();

//   return combination;
// }

export default function taskBlock(trueOrFalse) {
  let task = false, task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
