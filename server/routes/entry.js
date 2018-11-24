const entryController = require("../controllers/entry.ctrl")


module.exports = (router) => {
    router.route('/entry').get(entryController.getAll);
    router.route('/entry/add/').post(entryController.addNewEntry);
    router.route("/entry/:id").put(entryController.editEntry);
    router.route("/entry/:id").delete(entryController.deleteEntry);
}