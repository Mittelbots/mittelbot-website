const nconf = require('nconf');

module.exports = (app) => {
    app.get(nconf.get('routing:changelog'), async (req, res) => {
        res.redirec(nconf.get('external_links:changelog'));
    });
}