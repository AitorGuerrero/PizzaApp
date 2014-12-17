require([
    'jquery', 'marionette', 'backbone',
    'foundation',
    'app',
    'commands',
    'models/ingredient.collection',
    'models/pizza.collection'
], function($, Marionette, Backbone, foundation, app, commands, Ingredients, Pizzas){

    'use strict';

    var ingredients = new Ingredients(),
        pizzas = new Pizzas();

    $(document).foundation();

    app.addRegions({
        mainRegion: $('#app-content')
    });
    app.on('start', function() {
        Backbone.history.start();
    });
    $.when(ingredients.fetch(), pizzas.fetch()).done(function() {
        app.ingredients = ingredients;
        app.pizzas = pizzas;
        app.start();
    });
});