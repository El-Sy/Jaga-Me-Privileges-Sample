'use strict';
var PromoCode = require('./functions/promo-code');

module.exports.create = (event, context, callback) => {
  PromoCode.create(event.body)
    .then(res => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Success! Promo Code created!',
          input: event,
        }),
      };

      callback(null, response);
    })
    .catch(err => {
      const error = {
        statusCode: 502,
        body: JSON.stringify({
          message: 'Internal Server Error'
        }),
      };

      callback(null, response);
    })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.read = (event, context, callback) => {
  // console.log("event @ handler", event);
  PromoCode.read(event.queryStringParameters.promo_code)
    .then(res => {
      console.log("at handler",res);
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Promo Code Found!',
          input: res,
        }),
      };

      callback(null, response);
    })
    .catch(err => {
      const error = {
        statusCode: 502,
        body: JSON.stringify({
          message: 'Internal Server Error'
        }),
      };

      callback(null, response);
    })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};