var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
  var array = html.split('');
  var reverse = [];
  for (var i = array.length; i > 0; i--){
    reverse.push(array[i]);
  }
  var result = reverse.join('');
  console.log(result);
}

getHTML(requestOptions, printHTML);
