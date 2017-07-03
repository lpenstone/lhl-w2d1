var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-practice/step2.html'
  };

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    var dataString = '';
    for (var i = 0; i < 1; i++){
    dataString += data + '\n';
    }
    console.log(dataString);
  });
    response.on('end', function() {
    console.log('Response stream complete.');
  });
});

}

getAndPrintHTML();