define([
    'underscore',
    'backbone',
    'marionette',

    'models/pizza.model',
    'models/ingredient.collection',
    'views/pizza/edit/pizza-edit',
    'views/home/home.view'
], function(
    _,
    Backbone,
    Marionette,

    Pizza,
    IngredientCollection,
    PizzaEditView,
    HomeView
    ) {
    'use strict';
    return Backbone.Router.extend({
        initialize: function(app) {
            this.app = app;
        },
        routes: {
            'pizza/new': 'pizzaNew',
            'pizza/:id': 'pizzaEdit',
            '*path': 'home'
        },
        home: function() {
            this.app.mainRegion.show(new HomeView({
                collection: this.app.pizzas
            }));
        },
        pizzaNew: function() {
            var app = this.app;
            app.mainRegion.show(new PizzaEditView({
                model: new Pizza(),
                ingredientCollection: app.ingredients
            }));
        },
        pizzaEdit: function(id) {
            var app = this.app;
            app.mainRegion.show(new PizzaEditView({
                model: app.pizzas.get(id),
                ingredientCollection: app.ingredients
            }));
        }
    });
});