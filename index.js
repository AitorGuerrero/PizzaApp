require([
    'jquery', 'marionette',
    'text!views/home.view.html'
], function($, Marionette, template){

    'use strict';

    var app = new Marionette.Application();

    app.addInitializer(function() {

        var homeTemplate = new Marionette.ItemView({
            template: _.template(template)
        });
        this.mainRegion.show(homeTemplate);
    });

    app.addRegions({
        mainRegion: $('#app-content')
    });

    app.start();
});