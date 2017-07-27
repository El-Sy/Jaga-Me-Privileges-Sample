//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PromoCodeSchema = new Schema({
    visibility: String,
    type: String,
    code: String,
    created_at: Date,
    deleted_at: Date,
    updated_at: Date,
    start_date: Date,
    end_date: Date,
    categories: Array,
    conditions: String,
    id: String,
    icon_img: String,
    title: String,
    description: String,
    partner_id: String,
    partner_url: String,
    tags: Array
});

PromoCodeSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if (!this.created_at)
        this.created_at = currentDate;
    next();
})

module.exports = PromoCodeSchema;