define([
    'marionette',
    'models/message.model',
    'text!views/message/message.underscore.html',
    'text!views/message/message.error.underscore.html',
    'text!views/message/message.succeed.underscore.html'
], function(Marionette, Message, template, templateError, templateSucceed) {

    var templates = {};
    templates[Message.TYPE_NOTICE] = template;
    templates[Message.TYPE_ERROR] = templateError;
    templates[Message.TYPE_SUCCEED] = templateSucceed;

    return Marionette.ItemView.extend({
        template: function(data) {
            return _.template(templates[data.type])(data);
        },
        onRender: function() {
            var view = this,
                timeOut = this.model.get('timeOut');
            if(timeOut) {
                setTimeout(function() {
                    view.destroy();
                }, timeOut)
            }
            this.foundationAlertBoxInit();
        },
        foundationAlertBoxInit: function() {
            var view = this,
                $alertBox = $(view.$('.alert-box'));
            $alertBox.on('close.fndtn.alert-box', function() {
                Marionette.ItemView.prototype.destroy.call(view);
            });
            this.destroy = function() {
                $(this.$('.alert-box .close')).click();
            }
        }
    });
});