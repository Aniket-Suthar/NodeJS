//Importing the modules from other file
const operator=require("./oper");

//To remove writing operator.add/sub we can pass the whole object as well
const {add,sub,mult,name}=require("./oper");
console.log(add(5,5));
console.log(sub(5,5));
console.log(mult(5,5));
console.log(name);


// console.log(operator.add(5,5));
// console.log(operator.sub(5,5));