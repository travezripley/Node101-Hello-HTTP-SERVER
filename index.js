var http = require('http');

http.createServer(function (req, res) {
   
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World');


})
.listen(8080, '127.0.0.1');
console.log('Server running at https://127.0.0.1:8080/');


/*http.createServer(app).listen(process.env.port || 3000, function() {
    console.log('Express app started');
})

app.get('/', (req, res) => res.send("Hello World"))
  
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))*/
