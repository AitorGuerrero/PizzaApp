require.config({
    baseUrl: 'scripts',
    deps: ['index.js'],
    paths: {
        'commands': 'app/initializers/commands.initializer',
        'router': 'app/initializers/router.initializer',
        'messages': 'app/initializers/messages.initializer',
        'jquery': '../bower_components/jquery/dist/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'marionette': '../bower_components/backbone.marionette/lib/backbone.marionette',
        'foundation': '../bower_components/foundation/js/foundation',
        'fastclick': '../bower_components/fastclick/lib/fastclick',
        'modernizr': '../bower_components/modernizr/modernizr',
        'text': '../vendors/requirejs/plugins/text'
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