var fs = require('fs');

module.exports = {
  appendTo: function(fileName, content) {

    var path = fileName;
    var content = content;
    fs.write(path, content, 'a');
  }
};