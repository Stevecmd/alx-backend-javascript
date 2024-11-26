// Execute: node 1-stdin.js
// Output: Welcome to Holberton School, what is your name?

console.log('Welcome to Holberton School, what is your name?');

// process.stdin is a Readable stream
process.stdin.on('readable', () => {
  // process.stdin.read() returns a string or a Buffer
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
