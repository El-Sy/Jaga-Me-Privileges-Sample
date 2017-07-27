var connectToDatabase = require("../database");

exports.create = function (req) {
    console.log("-------request at PromoCode.create--------")
    console.log("type in-coming:", typeof req)
    return new Promise(
        function (resolve, reject) {
            // return PromoCode.find({code:req})
            connectToDatabase()
                .then(db => {
                    var new_promo = JSON.parse(req)
                    console.log("new_promo", new_promo);
                    const PromoCode = db.model('PromoCode');
                    var newPromoCode = new PromoCode(new_promo)
                    ;
                    // console.log("PromoCode", PromoCode.find({code:req}));
                    // return 
                    newPromoCode.save()
                        .then(res => {
                            console.log("res at promo-code", res)
                            resolve(res)
                        })
                        .catch(err =>{
                            console.error("err at promo-code", err)
                            reject(err)
                        })
                })
                .catch(err => {
                    console.error("error at promocode read", err);
                    reject(err)
                })
        }
    )
}

exports.read = function (req) {
    console.log(typeof req)
    return new Promise(
        function (resolve, reject) {
            // return PromoCode.find({code:req})
            connectToDatabase()
                .then(db => {
                    console.log("finding promo_code")
                    const PromoCode = db.model('PromoCode');
                    // console.log("PromoCode", PromoCode.find({code:req}));
                    // return 
                    PromoCode.find({ code: req }, function (err, promo) {
                        if (err) return console.error("err", err);
                        else return promo
                    })
                        .then(res => {
                            console.log("res", res)
                            resolve(res)
                        })
                })
                .catch(err => {
                    console.error("error at promocode read", err);
                    reject(err)
                })
        }
    )
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