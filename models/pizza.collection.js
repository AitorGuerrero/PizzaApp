define(['backbone', 'models/pizza.model'], function(Backbone, Pizza){
    return Backbone.Collection.extend({
        model: Pizza,
        url: 'http://162.250.78.47/api/pizzas'
    });
});