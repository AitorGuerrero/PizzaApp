define([
    'underscore',
    'marionette',
    'app',
    'text!views/pizza/edit/pizza-edit.html',
    'text!views/pizza/edit/selected-ingredient.html'
], function(
    _,
    Marionette,
    app,
    template,
    selectedIngredientTemplate
    ) {
    'use strict';
    return Marionette.CompositeView.extend({
        template: _.template(template),
        ui: {
            inputName: 'input[name=name]',
            selectableIngredients: '#selectable-ingredients input',
            selectedIngredients: '#selected-ingredients'
        },
        childViewContainer: '#selected-ingredients ul',
        childView: Marionette.ItemView.extend({
            tagName: 'li',
            template: _.template(selectedIngredientTemplate)
        }),
        initialize: function(options) {
            this.ingredientCollection = options.ingredientCollection;
            this.collection = new Backbone.Collection();
            console.log(this.model);
        },
        events: {
            'click #add-ingredients': function(e) {
                _(this.getSelectedIngredients()).each(function(id) {
                    this.addIngredient(id);
                }, this);
            },
            'submit form': function(e) {
                e.preventDefault();
                this.fillModelWithForm();
                app.commands.execute('pizza:save', this.model);
            }
        },
        fillModelWithForm: function() {
            this.model.set('name', this.ui.inputName.val());
            var ingredients = [];
            _(this.$('input[name|=ingredient]')).each(function(input) {
                var i,
                    $input = $(input),
                    id =  $input.data('id');
                for(i = 0; i < parseInt($input.val()); i++) {
                    ingredients.push(id);
                }
            });
            this.model.set('ingredients', ingredients);
        },
        getSelectedIngredients: function() {
            var ids = [];
            this.ui.selectableIngredients.filter(':checked').each(function() {
                ids.push($(this).data('ingredient-id'));
            });
            return ids;
        },
        addIngredient: function(id) {
            var model = this.collection.get(id);
            if(model) {
                model.set('amount', model.get('amount') + 1);
                this.children.findByModel(model).render();
            } else {
                var ingredient = this.ingredientCollection.get(id);
                this.collection.add(new Backbone.Model({
                    amount: 1,
                    id: ingredient.id,
                    name: ingredient.get('name')
                }));
            }
        },
        serializeData: function() {
            var data =  Marionette.CompositeView.prototype.serializeData.call(this);
            data.ingredients = this.ingredientCollection.toJSON();
            return data;
        }
    });
});