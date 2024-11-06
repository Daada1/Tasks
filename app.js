//app.js
const http = require('http'); // Import the HTTP module to create an HTTP server
const taskRoutes = require('./routes/taskRoutes'); // Import the taskRoutes module for handling task-related routes

const Hostname = 'localhost'; // Define the hostname where the server will run
const PORT = 3000; // Define the port number where the server will listen for requests



const server = http.createServer((req, res)=> {
    
     // If the request URL starts with '/tasks', call the taskRoutesRoutes function to handle it
    
    if (req.url.startsWith('/tasks')){
        taskRoutesRoutes(req, res)
    }else{
         // If the URL doesn't start with '/tasks', respond with a 404 status and a JSON error message
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not Found'}));
    }
});


//taskRoutes.js

server.listen(PORT, Hostname, () => {
    console.log(`Server running at http://${Hostname}:${PORT}`);
});
