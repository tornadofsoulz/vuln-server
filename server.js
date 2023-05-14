const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') { //check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
  }
  else if (req.url === '/health-check' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server is healthy' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not found' }));
  }
});

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

