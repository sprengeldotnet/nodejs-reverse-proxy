const http = require('http');
http.createServer((req, res) => {
  var options = { 
    hostname: hostname,       //IP Address or Domain
    port: port,               //Port Number
    path: req.url,            //For example '/index.html'
    method: req.method,       //For example 'GET'
    headers: req.headers,     //UserAgent, Cookies etc.
  };
  var proxy = http.request(options, function (proxy_res) {
    res.writeHead(proxy_res.statusCode, proxy_res.headers);
    return proxy_res.pipe(res);
  });
  return req.pipe(proxy);
}).listen(8080, "127.0.0.1");
console.log("server is running!");
