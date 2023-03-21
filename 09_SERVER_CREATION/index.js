/*
To access web pages of any web application, you need a web server. The web server will handle all the HTTP requests for the web application e.g IIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications.

Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.

Create Node.js Web Server
Node.js makes it easy to create a simple web server that processes incoming requests asynchronously. 
*/


 const http =require('http');
 const server=http.createServer((req,res)=>{
    res.end("Hello my first Server is Created Successfully...");
 })

 //Making the server requests to  access the server 
 server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port 8000");
 })