const fs=require("fs");
const { toUnicode } = require("punycode");
// fs.writeFileSync("crud.txt","This is the first CRUD operation Challenge");

fs.appendFileSync('crud.txt',"  New Data is added Successfully");

const data=fs.readFileSync("crud.txt","utf-8");
console.log(data);