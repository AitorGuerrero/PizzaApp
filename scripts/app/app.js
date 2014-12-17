define([
    'marionette',
    'router',
    'commands'
], function(Marionette, Router, commands) {
    'use strict';
    window.app = new Marionette.Application();
    app.router = new Router(app);
    commands(app);
    return app;
});