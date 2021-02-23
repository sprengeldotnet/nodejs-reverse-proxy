const http = require('http');
http.createServer((req, res) => {
  var options = { 
    hostname: '1.1.1.1',       //IP Address or Domain
    port: 80,               //Port Number
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
