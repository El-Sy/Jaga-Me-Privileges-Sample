'use strict'

const ENV = process.env.NODE_ENV || "production";
module.exports= require('./' + ENV + '.js') || {};