App = Ember.Application.create();

App.Router.map(function() {
  // 'index' route is default
  // this.resource('home');
  this.resource('cloths');
  this.resource('alterations');
  this.resource('appointments');
  this.resource('about');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        // this redirects / to /Index
        // this.transitionTo('home');
    }
});

App.DashboardRoute = Ember.Route.extend({
});

App.ApplicationRoute = Ember.Route.extend({
    renderTemplate: function() {
        // Render default outlet
        this.render();
        // render extra outlets
        // this.render("menu", {
        //     outlet: "menu",
        //     into: "application" // important when using at root level
        // });
    }
});

//Hide show top menu
