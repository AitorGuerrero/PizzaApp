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
            $(document).foundation();
            this.initDeleteModal();
        },
        events: {
            'click a.delete': function(e) {
                $('#deleteModal')
                    .data('pizza-id', $(e.currentTarget).data('id'))
                    .foundation('reveal', 'open');
            }
        },
        initDeleteModal: function() {
            var view = this;
            $(this.$('#deleteModal a.close')).on('click', function() {
                $('#deleteModal').foundation('reveal', 'close');
            });
            $(this.$('#deleteModal a.confirm')).on('click', function() {
                var $modal = $('#deleteModal'), id = $modal.data('pizza-id');
                app.commands.execute('pizza:destroy', view.collection.get(id), function(err) {
                    if(!err) {
                        app.commands.execute('message:succeed', 'The pizza have been destroyed!');
                    } else {
                        app.commands.execute('message:error', err);
                    }
                });
                $modal.foundation('reveal', 'close');
            });
        }
    });
});