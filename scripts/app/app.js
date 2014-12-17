define([
    'marionette',
    'router'
], function(Marionette, Router) {
    'use strict';
    var app = new Marionette.Application();
    app.router = new Router(app);
    return app;
});