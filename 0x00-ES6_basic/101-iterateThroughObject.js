export default function iterateThroughObject(reportWithIterator) {
  let res = '';
  for (const employee of reportWithIterator) {
    res += `${employee} | `;
  }
  return res.slice(0, -3);
}
