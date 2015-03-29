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

var loader = {
  elm: '.loader',
  hide: function(){
    $(this.elm).css('display','none');
  }
}

var fancyNavBar = {
  defaults: {
    toggled: false
  },
  scrollToElement: function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
  },
  show: function(){
    $('div[data-nav-arrow]').removeClass('arrow-up');
    $('div[data-nav-arrow]').addClass('arrow-down');
    this.scrollToElement('#nav', 600);
  },
  hide: function(){
    $('div[data-nav-arrow]').removeClass('arrow-down');
    $('div[data-nav-arrow]').addClass('arrow-up');
    this.scrollToElement('html', 600);
  },
  initialize: function(){
    var self = this;

    //Click EVENT
    $('div[data-nav-toggle]').on('click', function(){
      if(self.defaults.toggled){
        self.hide();
        self.defaults.toggled = false;
      } else {
        self.show();
        self.defaults.toggled = true;
      }
    });

    //Derive window height from sample element. Its going to help if the sample elm is fixed and 100% height and width. This is better than using html or body. But not as straightforward.
    var $windowSizeSampleElm = $('.loader'),
        windowHeight = $windowSizeSampleElm.height(),
        windowWidth = $windowSizeSampleElm.width(),
        $target = $('nav[data-nav]'),
        targetHeight = $target.height(),
        toggleHeight = $('div[data-nav-toggle]').height();


    if( targetHeight < windowHeight ){
      $target.css('height',windowHeight);
    }
    $target.css('margin-top', windowHeight - toggleHeight );

  }

}

$( document ).ready(function() {
    console.log( "ready!" );

    fancyNavBar.initialize();

    loader.hide();
});
