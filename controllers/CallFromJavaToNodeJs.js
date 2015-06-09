'use strict';

var url = require('url');


var CallFromJavaToNodeJs = require('./CallFromJavaToNodeJsService');


module.exports.callFromJavaToNodeJsPost = function callFromJavaToNodeJsPost (req, res, next) {
  var value = req.swagger.params['value'].value;
  

  var result = CallFromJavaToNodeJs.callFromJavaToNodeJsPost(value);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
