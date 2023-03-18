const path=require('path');

console.log(path.dirname('PATH_MODULE/pindex.js'));

console.log(path.extname('PATH_MODULE/pindex.js'));

console.log(path.basename('PATH_MODULE/pindex.js'));

// console.log(path.parse('PATH_MODULE/pindex.js'));

//Getting a particular Property of parse
const parse=path.parse('PATH_MODULE/pindex.js');
console.log(parse.dir);
