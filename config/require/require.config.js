require.config({
    baseUrl: '',
    deps: ['index.js'],
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone',
        'marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
        'text': 'config/require/plugins/text'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone'
        },
        marionette: {
            exports: 'Marionette'
        }
    }
});