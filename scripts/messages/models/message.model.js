define(['../../../bower_components/backbone/backbone'], function(Backbone) {
    var types = {
        TYPE_ERROR: 'error',
        TYPE_NOTICE: 'notice',
        TYPE_SUCCEED: 'succeed'
    };
    return Backbone.Model.extend({
        defaults: {
            type: types.TYPE_NOTICE,
            text: null,
            timeOut: 5000
        }
    }, types);
});