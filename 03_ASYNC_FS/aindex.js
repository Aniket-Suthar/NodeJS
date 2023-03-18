const fs=require("fs");


//Whenever we use ASYNC mode we always have to implement the callback function
fs.writeFile("async.txt","this is new Async Code",
(err)=>{
console.log("FIle is created successfully..");
console.log(err);
})


//Adding data to existing file
fs.appendFile("async.txt","New data appended ",(err)=>{
    console.log("Successfully Appended");
    console.log(err);
});


//Reading data
const data=fs.readFile("async.txt","utf-8",(err,data)=>{
    console.log(err);
    console.log(data);
});

//Renaming File
fs.rename('async.txt','newAsync.txt',(err)=>{
    console.log("Rename Successfull..");
});

//Deleting File
fs.unlink("newAsync.txt",(err)=>{
    console.log("Deleted SUccessfully")
});