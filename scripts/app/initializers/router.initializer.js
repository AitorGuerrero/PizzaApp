define([
    '../../../bower_components/underscore/underscore',
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
    return function() {
        var app = this;
        this.router = new (Backbone.Router.extend({
            routes: {
                'pizza/new': 'pizzaNew',
                'pizza/:id': 'pizzaEdit',
                '*path': 'home'
            },
            home: function() {
                app.mainRegion.show(new HomeView({
                    collection: app.pizzas
                }));
            },
            pizzaNew: function() {
                this.openEditPizzaPage(new Pizza());
            },
            pizzaEdit: function(id) {
                this.openEditPizzaPage(app.pizzas.get(id));
            },
            openEditPizzaPage: function(pizza) {
                this.listenToOnce(pizza, 'sync', function() {
                    this.navigate('#', {trigger: true});
                    app.commands.execute('message:succeed', 'The pizza has been saved!');
                });
                app.mainRegion.show(new PizzaEditView({
                    model: pizza,
                    ingredientCollection: app.ingredients
                }));
            }
        }));
    };
});