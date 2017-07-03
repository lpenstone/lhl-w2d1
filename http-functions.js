var https = require('https');


module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        var dataString = '';
        for (var i = 0; i < 1; i++){
        dataString += data + '\n';
        }
        callback(dataString);
      });
        response.on('end', function() {
        callback('Response stream complete.');
      });
    });
};