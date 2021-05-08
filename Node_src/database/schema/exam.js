const { Schema,model } = require("mongoose");

const types = Schema.Types

const examSchema = new Schema({
    title: types.String,
    data: types.Array,
    datetime: {
        type: "String",
        default: new Date()
    },
    type: types.String,
    userId: types.String,
    sampling_rate: types.String,
    labels: {
        type: [types.String],
        default: ["ECG"]
    },
    resolution: types.Number
})

module.exports = model("exam", examSchema)



//{'data': [1.2, 3.4, 5.6], 'sampling_rate': 1000.0, 'labels': [u'ECG'], 'resolution': 12}