const mongoose = require('mongoose')

let EntrySchema = new mongoose.Schema(
    {
        project_tag: String,
        vendor: String,
        calls:[],
        needs_follow_up: Boolean,
        reviewing:Boolean,
        intends_to_bid:Boolean,
        bidded: Boolean,
        not_bidding:Boolean
    }
);

module.exports = mongoose.model('Entry', EntrySchema)