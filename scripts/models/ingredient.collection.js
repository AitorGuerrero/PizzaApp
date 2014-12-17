define(['../../bower_components/backbone/backbone', 'models/ingredient.model'], function(Backbone, Ingredient){
    return Backbone.Collection.extend({
        model: Ingredient,
        url: 'http://162.250.78.47/api/ingredients'
    });
});