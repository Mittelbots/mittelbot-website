const nconf = require('nconf');

module.exports = (app) => {
    app.get(nconf.get('routing:invite'), async (req, res) => {
        return res.send(`Invite link is not available. Please join the discord support server to get access. <a href="${nconf.get('routing:support')}">Click here to join the support server</a>`);
        res.redirect(nconf.get('external_links:invite'))
    });
}