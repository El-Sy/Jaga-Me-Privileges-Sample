'use strict';
// const libs = process.cwd() + '/libs/'
const mongoose = require('mongoose')
// const PromoCodeSchema = require(libs + 'models/promo-code');
mongoose.Promise = require('bluebird')

// module.exports.create = (event, context, callback) => {
//   PromoCodeFunctions.create(event.body)
//     .then(res => {
//       const response = {
//         statusCode: 200,
//         body: JSON.stringify({
//           message: 'Success! Promo Code created!',
//           input: res,
//         })
//       }

//        callback(null, response);
//     })
//     .catch(err => {
//       const error = {
//         statusCode: 502,
//         body: JSON.stringify({
//           message: 'Internal Server Error'
//         }),
//       };

//        callback(null, response);
//     })

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
// };

module.exports.read = (event, context, callback) => {
  // var query = event.queryStringParameters.promo_code
  // let db = {}

  // function queryChecker(query) {
  //   console.log("checking query")
  //   if (typeof query === "undefined") {
  //     const error = {
  //       statusCode: 404,
  //       body: JSON.stringify({
  //         message: 'Wrong query parameters'
  //       }),
  //     };
  //     callback(null, error);
  //   }
  // }

  // function connectToDB() {
  //   if (isConnected(mongoose.connection)) {
  //     console.log("reusing db connection")
  //     db = mongoose.connection
  //   } else {
  //     console.log("connecting db")
  //     db = mongoose.connect('').connection
  //     // db.model('PromoCode', PromoCodeSchema);
  //   }

  //   function isConnected(db) {
  //     return mongoose.Connection.STATES.connected === db.readyState;
  //   }
  // }
  // queryChecker(query);
  // connectToDB();

  // function find(db) {
    // console.log("finding promoCode")
    // const PromoCode = db.model('PromoCode')
    // PromoCode
    //   .find({ code: query })
    //   .then((promo) => {
    //     if (promo.length >= 1){
        const responseSuccess = {
          statusCode: 200,
          body: JSON.stringify({
            message: 'Promo Code Found!',
            input: 'promo',
          }),
        };
        callback(null, responseSuccess);
      //   } else {
      //     const notFound = {
      //     statusCode: 404,
      //     body: JSON.stringify({
      //       message: 'promo code NOT Found!'
      //     }),
      //   };
      //   callback(null, notFound);
      //   }
      // })
      // .catch((err) => {
      //   callback(err);
      // })
  // }

 
  // find(db);

  // PromoCodeFunctions.read(event.queryStringParameters.promo_code)
  //   .then(res => {
  //     console.log("at handler",res);
  //     if(res.length >= 1){
  //     const responseSuccess = {
  //       statusCode: 200,
  //       body: JSON.stringify({
  //         message: 'Promo Code Found!',
  //         input: res,
  //       }),
  //     };
  //     return callback(null, responseSuccess);
  //     } else {
  //       const responseFailure = {
  //       statusCode: 404,
  //       body: JSON.stringify({
  //         message: 'Promo Code not Found!'
  //       }),
  //     };
  //      callback(null, responseFailure);
  //     }

  //   })
  //   .catch(err => {
  //     console.error(err.message)
  //     const error = {
  //       statusCode: 502,
  //       body: JSON.stringify({
  //         message: 'Internal Server Error'
  //       }),
  //     };

  //      callback(null, error);
  //   })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};