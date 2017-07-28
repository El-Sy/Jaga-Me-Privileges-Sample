const config = require('../config');
const mongoose = require('mongoose');
const PromoCodeSchema = require('./models/promo-code.model');
mongoose.Promise = require('bluebird')
// var PromoCode = mongoose.model('PromoCode', PromoCodeSchema);

//connecting db with mongoose
// console.log("config", config);
// mongoose.connect(config.db, {config:{autoIndex:false}});
// const db = mongoose.connection
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', ()=>{
//     console.log('DB connected!');
// });

 const connectToDB = function () {
    if (isConnected(mongoose.connection)) {
      console.log("reusing db connection")
      db = mongoose.connection
    } else {
      console.log("connecting db")
      db = mongoose.connect(config.db).connection
      db.model('PromoCode', PromoCodeSchema);
    }

    function isConnected(db) {
      return mongoose.Connection.STATES.connected === db.readyState;
    }
  }

module.exports = { connectToDB }
