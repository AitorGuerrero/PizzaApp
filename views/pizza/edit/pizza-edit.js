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
            selectableIngredients: '#selectable-ingredients input'
        },
        childViewContainer: '#selected-ingredients',
        childView: Marionette.ItemView.extend({
            tagName: 'li',
            template: _.template(selectedIngredientTemplate)
        }),
        initialize: function(options) {
            this.ingredientCollection = options.ingredientCollection;
            this.collection = new Backbone.Collection();
            _(this.model.get('ingredients')).each(function(id) {
                this.addIngredient(id);
            }, this);
        },
        events: {
            'submit form': function(e) {
                e.preventDefault();
                this.fillModelWithForm();
                app.commands.execute('pizza:save', this.model);
            },
            'click label.ingredient': function(e) {
                e.preventDefault();
                this.addIngredient($(e.currentTarget).data('ingredient-id'));
            },
            'click #selected-ingredients a.destroy': function(e) {
                e.preventDefault();
                this.removeIngredient($(e.currentTarget).data('ingredient-id'));
            }
        },
        fillModelWithForm: function() {
            this.model.set('name', this.ui.inputName.val());
            var ingredients = [];
            _(this.$('#selected-ingredients input[name|=ingredient]')).each(function(input) {
                var i,
                    $input = $(input),
                    id =  $input.data('id');
                for(i = 0; i < parseInt($input.val()); i++) {
                    ingredients.push(id);
                }
            });
            this.model.set('ingredients', ingredients);
        },
        addIngredient: function(id) {
            var model = this.collection.get(id);
            if(model) {
                model.set('amount', model.get('amount') + 1);
                if(this.isRendered) {
                    this.children.findByModel(model).render();
                }
            } else {
                var ingredient = this.ingredientCollection.get(id);
                this.collection.add(new Backbone.Model({
                    amount: 1,
                    id: ingredient.id,
                    name: ingredient.get('name')
                }));
            }
        },
        removeIngredient: function(id) {
            var model = this.collection.get(id);
            this.collection.remove(model);
        },
        serializeData: function() {
            var data =  Marionette.CompositeView.prototype.serializeData.call(this);
            data.ingredients = this.ingredientCollection.toJSON();
            data.title = this.model.isNew() ? 'New pizza' : 'Edit pizza ' + this.model.get('name');
            return data;
        }
    });
});