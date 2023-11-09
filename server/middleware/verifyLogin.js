const verifyLogin = (req, res, next) => {
    if (req.cookies['auth'] === process.env.LOGIN_TOKEN) {
        next(); 
    } else {
        res.sendStatus('403'); 
    }
}
module.exports = verifyLogin; 