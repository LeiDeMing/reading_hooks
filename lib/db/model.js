const mongoose = require('mongoose')

const read = new mongoose.Schema({
    title: {
        type: String
    },
    url: {
        type: String
    },
    html_url: {
        type: String
    },
    number: {
        type: Number
    },
    body: {
        type: String
    },
    payload_all: {
        type: String
    }
}, {
    versionKey: false,
    timestamps: {
        createAt: 'created',
        updateAt: 'updated'
    }
})

module.exports = {
    Read: mongoose.model('Read', read)
}