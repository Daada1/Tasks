//app.js
const http = require('http');
const taskRoutes = require('./routes/taskRoutes');

const Hostname = 'localhost';
const PORT = 3000


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
