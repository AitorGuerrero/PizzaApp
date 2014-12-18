define([
    'marionette',
    'app/initializers/router.initializer',
    'app/initializers/commands.initializer',
    'messages/initializer'
], function(Marionette, routerInitializer, commandsInitializer, messages) {
    'use strict';
    window.app = new Marionette.Application();
    app.addInitializer(routerInitializer);
    app.addInitializer(commandsInitializer);
    app.addInitializer(messages);
    return app;
});