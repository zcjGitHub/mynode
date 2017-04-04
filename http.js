var http = require('http');

http.createServer(function(request, response) {
  var headers = request.headers;//获取http请求头
  var method = request.method;//获取http请求方法
  var url = request.url;//获取http路径
  var body = [];
  //获取请求内容，http报文主体
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();


    response.on('error', function(err) {
      console.error(err);
    });
    //note:request是可读流，response是可写流
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // 上面两行代码可以用下面这行代替
    // response.writeHead(200, {'Content-Type': 'application/json'})

    var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    response.write(JSON.stringify(responseBody));
    response.end();
    // 上面两行代码可以用下面这行代替
    // response.end(JSON.stringify(responseBody))
  });
}).listen(8080);