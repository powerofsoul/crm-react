module.exports = (router) => {
    router
        .route('/')
        .get((req, res) => {
            res.send('Hello World!')
        })
}