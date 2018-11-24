/** server/controllers/article.ctrl.js*/
const Entry = require('../models/Entry')
 
module.exports = {
    getAll: (req, res, next) => {
        Entry.find({}, function(err, entries){
            res.send(entries);
        })
    },

    addNewEntry:(req, res, next) =>{
        var newEntry = new Entry();
        console.log(newEntry)
        newEntry.save();
        res.send("1");
    },

    editEntry:(req, res, next) =>{
        Entry.findOne({id : req.params.id}, function(err, entry){
            entry = req.params;
            res.send("1");
        })
    },

    deleteEntry:(req, res, next) =>{
        Entry.deleteOne({ _id: req.params.id}, function (err) {
            console.log(req.params);
            if (err) console.log(err);
            res.send("1");
          });
    }
}