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
            var app = this.app,
                pizza = new Pizza();
            this.listenToOnce(pizza, 'sync', function() {
                this.navigate('#', {trigger: true});
            });
            app.mainRegion.show(new PizzaEditView({
                model: pizza,
                ingredientCollection: app.ingredients
            }));
        },
        pizzaEdit: function(id) {
            var app = this.app,
                pizza = app.pizzas.get(id);
            this.listenToOnce(pizza, 'sync', function() {
                this.navigate('#', {trigger: true});
            });
            app.mainRegion.show(new PizzaEditView({
                model: pizza,
                ingredientCollection: app.ingredients
            }));
        }
    });
});