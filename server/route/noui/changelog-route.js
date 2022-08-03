const nconf = require('nconf');

module.exports = (app) => {
    app.get(nconf.get('routing:invite'), async (req, res) => {
        res.sendStatus(404);
    });
}