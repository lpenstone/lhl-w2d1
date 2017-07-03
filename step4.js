var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

function printHTML (html) {
  console.log(html);
}

function getHTML (options, print) {

https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    var dataString = '';
    for (var i = 0; i < 1; i++){
    dataString += data + '\n';
    }
    print(dataString);
  });
    response.on('end', function() {
    print('Response stream complete.');
  });
});

}

getHTML(requestOptions, printHTML);