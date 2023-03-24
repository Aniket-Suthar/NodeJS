
//Creating a Class "EventEmitter" not a Variable
const EventEmitter=require("events");

//Creating an Object for the above class
const event= new EventEmitter();


//Defining what to do when the Event is Fired
event.on('sayMyName',()=>{
    console.log("My name is Aniket")
})

event.on('sayMyName',()=>{
    console.log("My father's name is Pravinkumar Suthar")
})


event.on("checkpage",(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`)
})



//emit=firing an event
event.emit('sayMyName');

//Checking the Page code of the webpages
event.emit("checkpage",200,"ok");