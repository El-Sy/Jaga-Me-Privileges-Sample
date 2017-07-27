'use strict';
var PromoCodeFunctions = require('./functions/promo-code');

module.exports.create = (event, context, callback) => {
  PromoCodeFunctions.create(event.body)
    .then(res => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Success! Promo Code created!',
          input: res,
        }),
      }

      return callback(null, response);
    })
    .catch(err => {
      const error = {
        statusCode: 502,
        body: JSON.stringify({
          message: 'Internal Server Error'
        }),
      };

      return callback(null, response);
    })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.read = (event, context, callback) => {
  // console.log("event @ handler", event);
  if (typeof event.queryStringParameters.promo_code === "undefined"){
      const error = {
        statusCode: 404,
        body: JSON.stringify({
          message: 'Wrong query parameters'
        }),
      };

      return callback(null, error);
  }
  
  PromoCodeFunctions.read(event.queryStringParameters.promo_code)
    .then(res => {
      console.log("at handler",res);
      if(res.length >= 1){
      const responseSuccess = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Promo Code Found!',
          input: res,
        }),
      };
      return callback(null, responseSuccess);
      } else {
        const responseFailure = {
        statusCode: 404,
        body: JSON.stringify({
          message: 'Promo Code not Found!'
        }),
      };
      return callback(null, responseFailure);
      }

    })
    .catch(err => {
      console.error(err.message)
      const error = {
        statusCode: 502,
        body: JSON.stringify({
          message: 'Internal Server Error'
        }),
      };

      return callback(null, error);
    })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};