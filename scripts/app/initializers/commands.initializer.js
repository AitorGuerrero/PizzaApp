define([], function() {
    'use strict';
    return function() {
        var app = this;
        this.commands.setHandler('pizza:save', function(pizza, cb) {
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
        this.commands.setHandler('pizza:destroy', function(pizza, cb) {
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
    }
});