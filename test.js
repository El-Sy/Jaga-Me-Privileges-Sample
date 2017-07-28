var test_case = require('./test_case.json');
var PromoCodeFunctions = require('./libs/functions/promo-code');

const promo = JSON.stringify({
    visibility: "public",
    type: "in-house",
    code: "JAGA_NDP",
    start_date: new Date(2017, 9, 9),
    end_date: new Date(2017, 10, 9),
    categories: ["NDP", "Respite"],
    id: "dhiosgawy12389",
    icon_img: "http://cdn.filestack.com/jkdwgiwyr2893",
    title: "National Day Care Giving Package",
    description: "Respite for our hardworking caregivers",
    partner_id: "HCA",
    partner_url: "www.hca.sg",
    tags: ["homecoming", "ndp", "national day"]
})

var promo_code = "HCA_JAGA"
var false_code = "Whut"

const createTest = function (req) {
    PromoCodeFunctions.create(req)
    .then(res=>{
        console.log("@create Test", res)
    })
    .catch(err=>{
        console.error(err)
    })
}


const queryTest = function (req) {
    // console.log(PromoCodeFunctions.read)
     PromoCodeFunctions.read(req)
        .then(res => {
            return console.log("@read Test", res)
        })
        .catch(err => {
            return console.error(err)

        })
}
// .then(res=>{
//     return console.log("@read Test", res)
// })
// .catch(err=>{
//     return console.error(err)
// })



// createTest(promo);
queryTest(promo_code);
setTimeout(function () {
    queryTest(promo_code);
}, 3000);
setTimeout(function () {
    queryTest(promo_code);
}, 3000);