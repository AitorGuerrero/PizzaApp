require([
    'jquery', 'marionette', 'backbone',
    'app',
    'Router',
    'commands',
    'models/ingredient.collection',
    'models/pizza.collection'
], function($, Marionette, Backbone, app, Router, commands, Ingredients, Pizzas){

    'use strict';

    var ingredients = new Ingredients(),
        pizzas = new Pizzas();
    app.addRegions({
        mainRegion: $('#app-content')
    });
    app.router = new Router(app);
    app.on('start', function() {
        Backbone.history.start();
    });
    $.when(ingredients.fetch(), pizzas.fetch()).done(function() {
        app.ingredients = ingredients;
        app.pizzas = pizzas;
        app.start();
    });
});