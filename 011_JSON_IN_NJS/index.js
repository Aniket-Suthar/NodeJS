/*
What is JSON?
JavaScript Object Notation, or JSON, is a lightweight data format that has become the defacto standard for the web. JSON can be represented as either a list of values, e.g. an Array, or a hash of properties and values, e.g. an Object.

Encoding and Decoding in JSON in NODEJS
JavaScript provides 2 methods for encoding data structures to JSON and encoding JSON back to JavaScript objects and arrays. They are both available on the JSON object that is available in the global scope.

JSON.stringify takes a JavaScript object or array and returns a serialized string in the JSON format.
JSON.parse takes a JSON string and decodes it to a JavaScript data structure.
*/

const fs=require('fs');

//Creating a simple JS object
const bioData={
    name:"Aniket",
    age:23,
    clg:"PDEU"

}

//Used to convert JS object to JSON object
// const jsonData =JSON.stringify(bioData);

// console.log(jsonData);

//Converting JSON data to simple JS object
// const jsData=JSON.parse(jsonData);

// console.log(jsData);

//Now we will perform the following
/*
1.convert object to JSON 
2.Adding the object created to the file
3.Read file
4.Again convert the JSON to obj
5.Print the obj
*/
const jsonData =JSON.stringify(bioData);

//Appending the JSON data to a file
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log("DONE")
});

//Reading the Content of File
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(jsonData);
    console.log(orgdata)
    console.log(data);
});

