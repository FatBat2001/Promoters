
const handleLogout = async (req, res) => {
    // On client, also delete the accessToken
    if (!req.cookies['auth']) return res.sendStatus(204); 
    res.clearCookie('auth');
    res.sendStatus(204);
}
module.exports = { handleLogout }