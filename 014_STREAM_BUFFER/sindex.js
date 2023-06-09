/*
Streams are objects that let you read data from a source or write data to a destination in a continuous fashion. In Node.js, there are four types of streams −

Readable − Stream which is used for a read operation.
Writable − Stream which is used for a write operation.
Duplex − Stream which can be used for both reading and write operation.
Transform − A type of duplex stream where the output is computed based on input.

Each type of Stream is an EventEmitter instance and throws several events at a different instance of times. For example, some of the commonly used events are −
data − This event is fired when there is data is available to read.
end − This event is fired when there is no more data to read.
error − This event is fired when there is an error receiving or writing data.
finish − This event is fired when all the data has been flushed to the underlying system

Streaming means listening to music or watching a video in ‘real-time’, instead of downloading a file to your computer and watching it later*/

const fs=require("fs");
const http=require("http");

const server=http.createServer();

server.on("request",(req,res)=>{

    //Reading Without Streaming
    // fs.readFile("input.txt","utf-8",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    //Reading with Streaming
    const readstream=fs.createReadStream("input.txt");

    readstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });
    readstream.on('data',(chunkdata)=>{
        res.end();
    });
    readstream.on('error',(err)=>{
        console.log(err);
        res.end("File DNE :(")
    });
});


server.listen(3000,"127.0.0.1",()=>{
    console.log("Listening to port 3000");
})