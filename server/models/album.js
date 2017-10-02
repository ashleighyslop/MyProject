'use strict';
//nested function within this function
module.exports = function(Album) {
  //callback = cb
  Album.sayHello = function(message, req, cb) {
    /*call back frist argument is the error, if not passing
    any error put 'null'. Second argument is the result*/
    console.log(req);
    cb(null, message)
  }
  Album.remoteMethod('sayHello', {
    accepts:[
      {arg: 'message',
      type: 'string',
      http:{
        source: 'query'
      }},
      {arg: 'req',
      type: 'object',
      http:{
        source: 'req'
      }}],
    returns:{
      arg: 'greeting',
      type:'string'
    },
    http:{
      path: '/hello',
      verb: 'GET'
    }
  })

};
