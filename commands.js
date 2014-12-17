define(['app'], function(app) {
    'use strict';
    app.commands.setHandler('pizza:save', function(pizza, cb) {
        cb = cb || function() {};
        app.pizzas.create(pizza, {
            success: function() {
                cb();
            },
            error: function() {
                cb('Error contacting with the server');
            }
        });
    });
    app.commands.setHandler('pizza:destroy', function(pizza, cb) {
        cb = cb || function() {};
        pizza.destroy({
            success: function() {
                cb();
            },
            error: function() {
                cb('Error contacting with the server');
            }
        });
    });
});