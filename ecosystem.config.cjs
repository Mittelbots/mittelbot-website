module.exports = {
    apps : [{
        name      : 'Mittelbot Website',
        exec_mode : 'cluster', 
        cwd       : './current',
        script    : "./node_modules/nuxt/bin/nuxt.js",
        args      : "start",
    }]
};