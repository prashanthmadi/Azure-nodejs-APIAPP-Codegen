'use strict';

exports.callFromWebsiteToNodeJsPost = function(value) {

  var examples = {};
  
  examples['application/json'] = {
  "sessionid" : "aeiou",
  "message" : "aeiou",
  "status" : 123
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
