var connectToDatabase = require("../database");

exports.create = function(req){
    // console.log("-------request at PromoCode.create--------")
    // var newPromoCode = new PromoCode(req);
    // return newPromoCode.save()
}

exports.read = function(req){
    // return PromoCode.find({code:req})
    connectToDatabase()
    .then(db=>{
        console.log("finding promo_code")
        const PromoCode = db.model('PromoCode');
        // console.log("PromoCode", PromoCode.find({code:req}));
        // return 
        return PromoCode.find({code:req},function(err, promo){
           if (err) return console.error(err);
        });
    })
    .catch(err=>{
        console.error("error at promocode read ",err);
    })
}


// exports.read = function(req){
//     console.log("-------request at PromoCode.read--------")
//     var selectPromoCode = new PromoCode(req);
//     return selectPromoCode.findOne
// }
// function createPromo(req){
// var newPromoCode = new PromoCode(req)

// return newPromoCode.save();
// }

// module.exports = createPromo;