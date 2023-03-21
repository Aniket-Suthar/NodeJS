const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end("Hello From Home Page :)")
    }
    else if (req.url == "/about") {
        res.end("Hello from ABout us Page :)")
    }
    else if (req.url == "/contact") {
        res.end("Hello from Contact us Page :)")
    }
    else {
        //Adding the Status Code for the Webpage amd also changing the file extension according to our choice
    
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h2>oops Page doesn't exists :( </h2>");
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Listening to port 3000");
})