'use strict';

var url = require('url');


var CallFromWebsiteToNodeJs = require('./CallFromWebsiteToNodeJsService');


module.exports.callFromWebsiteToNodeJsPost = function callFromWebsiteToNodeJsPost (req, res, next) {
  var value = req.swagger.params['value'].value;
  

  var result = CallFromWebsiteToNodeJs.callFromWebsiteToNodeJsPost(value);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
