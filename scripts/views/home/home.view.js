define([
    'marionette',
    'text!views/home/home.view.html',
    'text!views/home/pizza.view.html',
    'foundation'
], function(Marionette, template, childTemplate) {
    'use strict';
    return Marionette.CompositeView.extend({
        template: _.template(template),
        childViewContainer: '#pizza-list',
        childView: Marionette.ItemView.extend({
            tagName: 'li',
            template: _.template(childTemplate)
        }),
        onShow: function() {
            this.$el.foundation();
            this.initDeleteModal();
        },
        events: {
            'click a.delete': function(e) {
                this.idToDestroy = $(e.currentTarget).data('id');
                $('#deleteModal')
                    .foundation('reveal', 'open');
            }
        },
        initDeleteModal: function() {
            var view = this;
            $(this.$('#deleteModal a.close')).on('click', function() {
                $('#deleteModal').foundation('reveal', 'close');
            });
            $(this.$('#deleteModal a.confirm')).on('click', function() {
                var $modal = $('#deleteModal');
                app.commands.execute('pizza:destroy', view.collection.get(view.idToDestroy), function(err) {
                    if(!err) {
                        app.commands.execute('message:succeed', 'The pizza have been destroyed!');
                    } else {
                        app.commands.execute('message:error', err);
                        view.idToDestroy = null;
                    }
                });
                $modal.foundation('reveal', 'close');
            });
        }
    });
});