var PromoCode = require("../database").PromoCode;

exports.create = function(req){
    console.log("-------request at PromoCode.create--------")
    var newPromoCode = new PromoCode(req);
    return newPromoCode.save()
}

exports.read = function(req){
    return PromoCode.find({code:req})
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