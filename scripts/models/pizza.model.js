define(['../../bower_components/backbone/backbone', 'models/ingredient.collection'], function(Backbone, IngredientCollection) {
    return Backbone.Model.extend({
        idAttribute: '_id',
        initialize: function() {
            if(this.get('ingredients') === undefined) {
                this.set('ingredients', []);
            }
        }
    });
});