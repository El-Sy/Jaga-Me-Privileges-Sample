'use strict'

const ENV = process.env.NODE_ENV || "development";
console.log(ENV);
module.exports= require('./' + ENV + '.js') || {};