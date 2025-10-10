var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Page</title>
        </head>
        <body>
            <h1>Hello, My name is DOGUCAN GOZACAN</h1>
            <h2>About Me</h2>
            <p>I am learning about Node.js and building my first web app!</p>
        </body>
        </html>
    `);
}).listen(port, function() { 
    console.log(`MyPage server is running on port ${port}...`); 
}); 
