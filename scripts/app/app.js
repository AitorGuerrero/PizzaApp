define([
    'marionette',
    'app/initializers/router.initializer',
    'app/initializers/commands.initializer',
    'messages/initializer'
], function(Marionette, routerInitializer, commandsInitializer, messages) {
    'use strict';
    window.app = new Marionette.Application();
    app.addInitializer(function(options) {
        commandsInitializer.call(this, options);
        routerInitializer.call(this, options);
    });
    app.addInitializer(messages);
    return app;
});