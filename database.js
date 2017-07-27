var config =  require('./config');
var mongoose = require('mongoose');
var PromoCodeSchema = require('./models/promo-code.model');
mongoose.Promise = global.Promise
// var PromoCode = mongoose.model('PromoCode', PromoCodeSchema);

//connecting db with mongoose
// console.log("config", config);
// mongoose.connect(config.db, {config:{autoIndex:false}});
// const db = mongoose.connection
// db.on('error',console.error.bind(console, 'connection error:'));
// db.once('open', ()=>{
//     console.log('DB connected!');
// });

function connectToDatabase() {
    console.log("connectToDatabase");
    if (isConnected(mongoose.connection)) {
        return Promise.resolve(mongoose.connection);
    } else {
        return mongoose
            .connect(config.db)
            .then(function(){
                let db = mongoose.connection;
                db.model('PromoCode', PromoCodeSchema);
                return db;
            })
            .catch(function(err){
                console.log('error at connecting',err);
                return null;
            });
    }
}

function isConnected(db) {
    return mongoose.Connection.STATES.connected === db.readyState;
}

//Schemas

module.exports = connectToDatabase
