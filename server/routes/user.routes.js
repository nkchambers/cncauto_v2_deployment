// Import User Controller
const User = require('../controllers/user.controller');


module.exports = (app) => {

    // Test Route
    app.get('/api/user/hello', (req, res) => {
        res.json({message: "hello from user routes"})
    })

    // Auth Routes
    app.post('/api/register', User.registerUser);
    app.post('/api/login', User.loginUser);
    app.get('/api/profile', User.verifyUser);
    app.post('/api/logout', User.logoutUser);

}