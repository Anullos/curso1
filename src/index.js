var http = require("http");
var log = require("./modules/my-log");

var server = http.createServer(function(request,response){
    
    if(request.url==='/'){
        response.writeHead(200,{"Content-Type":'text/html'});
        response.write('<html><body><p>HELLO</p></body></html>');
        response.end();
    }else if(request.url==='/exit'){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write('<html><body><p>HELLO</p></body></html>');
        response.end();
    }
    
    
});

server.listen(4000);

console.log("running on 4000");