module.exports = (srv) => {
    srv.on('sayHello', req => `Hello there! This endpoint works`)
    srv.on('crashApp', req => {
        setTimeout(async (tx) => {
            nonExistentFunction();
        })
        return "You just crashed the app"
    }
    )
}