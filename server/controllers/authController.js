const hash = require('../helper/hash');
const handleLogin = async (req, res) => { 
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({ 'message':'Username and Password are required'}); 
    }
    if (username === process.env.USER && password === process.env.PASSWORD) {
        const token = hash('promoters'); 
        res.cookie('auth', token);
        res.status(200).json({token: token});
    } else {
        res.status(400).json({ token:''}); 
    }
}; 

module.exports = {handleLogin}; 
