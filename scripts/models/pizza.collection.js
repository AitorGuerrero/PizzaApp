define(['../../bower_components/backbone/backbone', 'models/pizza.model'], function(Backbone, Pizza){
    return Backbone.Collection.extend({
        model: Pizza,
        comparator: 'name',
        url: 'http://162.250.78.47/api/pizzas'
    });
});