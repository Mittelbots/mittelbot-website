const nconf = require('nconf');

module.exports = (app) => {
    app.get(nconf.get('routing:invite'), async (req, res) => {
        res.redirect(nconf.get('external_links:invite'));
    });
};
