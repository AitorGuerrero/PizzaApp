require.config({
    baseUrl: '',
    deps: ['index.js'],
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'backbone': 'bower_components/backbone/backbone',
        'marionette': 'bower_components/backbone.marionette/lib/backbone.marionette',
        'text': 'config/require/plugins/text',
        'foundation': 'bower_components/foundation/js/foundation',
        'fastclick': 'bower_components/fastclick/lib/fastclick',
        'modernizr': 'bower_components/modernizr/modernizr'
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
        },
        foundation: {
            deps: [
                'jquery',
                'fastclick',
                'modernizr'
            ]
        }
    }
});