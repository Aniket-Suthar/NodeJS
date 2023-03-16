//Implementing inbuilt NodeJS modules
const fs=require("fs");

//Creating a new file
fs.writeFileSync("read.txt","Hello Im learning nodeJS today")

//NOTE - this method overwrites the already created content of the file 

//To add content to already Existing file
fs.appendFileSync("read.txt","I'm ANiket Suthar");


//Reading the content of file
const buf_data = fs.readFileSync('read.txt')

//It gives Binary representation of data
console.log(buf_data);

//To get original Data
org_Data=buf_data.toString();
console.log(org_Data);

//Renaming a file
fs.renameSync("read.txt","readwrite.txt");

//Deleting the file
// fs.unlinkSync("readwrite.txt");