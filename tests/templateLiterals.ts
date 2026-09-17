const username = 'Omar Zidan';
const count = 3;

const stringwithconcat = 'logging as ' + username + ' with ' + count;
const stringwithtemplate = `logging as ${username} with ${count}`;

console.log(stringwithconcat);
console.log(stringwithtemplate);