var config =  require('./config');
var mongoose = require('mongoose');
require('./models/promo-code.model')();

//connecting db with mongoose
console.log("config", config);
mongoose.connect(config.db, {config:{autoIndex:false}});

const db = mongoose.connection
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log('DB connected!');
});

var PromoCode = mongoose.model('PromoCode');


module.exports = {
    PromoCode:PromoCode
}