import * as fs from 'fs';

const data = fs.readFileSync('data.json', 'utf8')
console.log(data)