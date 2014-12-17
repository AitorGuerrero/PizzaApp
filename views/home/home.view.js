define([
    'marionette',
    'app',
    'text!views/home/home.view.html',
    'text!views/home/pizza.view.html'
], function(Marionette, app, template, childTemplate) {
    'use strict';
    return Marionette.CompositeView.extend({
        template: _.template(template),
        childViewContainer: '#pizza-list',
        childView: Marionette.ItemView.extend({
            tagName: 'li',
            template: _.template(childTemplate)
        }),
        events: {
            'click a.delete': function(e) {
                e.preventDefault();
                var id = $(e.currentTarget).data('id');
                app.commands.execute('pizza:destroy', this.collection.get(id));
            }
        }
    });
});