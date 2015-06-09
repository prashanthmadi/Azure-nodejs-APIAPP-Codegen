'use strict';

var url = require('url');


var CallFromCSToNodeJs = require('./CallFromCSToNodeJsService');


module.exports.callFromCSToNodeJsPost = function callFromCSToNodeJsPost (req, res, next) {
  var value = req.swagger.params['value'].value;
  

  var result = CallFromCSToNodeJs.callFromCSToNodeJsPost(value);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
