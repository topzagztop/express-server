exports.auth = (req, res, next) => {
    // code
    //Check Token
    if(true) {
        console.log("Hello, Middlewares auth")
        next()
    } else {
        res.json({ message: "Unauthorized" });
    }
    
}