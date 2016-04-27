var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reportSchema = new Schema({}, {
    strict: false, toJSON: {
        virtuals: true
    }
});
reportSchema.virtual('date').get(function () {
    return new Date(parseInt(("" + this._id).substr(0, 8), 16) * 1000).toISOString();
})
var Report = mongoose.model('reports', reportSchema);
module.exports = Report;
