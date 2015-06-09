'use strict';

var url = require('url');


var CallFromPHPToNodeJs = require('./CallFromPHPToNodeJsService');


module.exports.callFromPHPToNodeJsPost = function callFromPHPToNodeJsPost (req, res, next) {
  var value = req.swagger.params['value'].value;
  

  var result = CallFromPHPToNodeJs.callFromPHPToNodeJsPost(value);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
