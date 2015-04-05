App = Ember.Application.create();

App.Router.map(function() {
  // 'index' route is default
  // this.resource('home');
  this.resource('clothes');
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

App.LoginButton= Ember.View.extend({
  click: function(evt) {
   alert('clicky time')
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
    toggled: false,
    animationSpeed: 300
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
    this.scrollToElement('#nav', this.defaults.animationSpeed);
    this.defaults.toggled = true;
  },
  hide: function(){
    $('div[data-nav-arrow]').removeClass('arrow-down');
    $('div[data-nav-arrow]').addClass('arrow-up');
    this.scrollToElement('html', this.defaults.animationSpeed);
    this.defaults.toggled = false;
  },
  initialize: function(){
    var self = this;
    //Click EVENT
    $('div[data-nav-toggle]').on('click', function(){
      if(self.defaults.toggled){
        self.hide();
      } else {
        self.show();
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

    //hide nav when a link/Route is clicked
    $("nav a").on('click',function(){
      self.hide();
    });

    // extension:
    $.fn.scrollEnd = function(callback, timeout) {
      $(this).scroll(function(){
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
          clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,timeout));
      });
    };

    var lastScrollTop = 0;
    $(window).scrollEnd(function(){
        console.log('stopped scrolling');
        var position = $('body').scrollTop();
        console.log('scroll');
        console.log(position);


        var thisScrollTop = $(this).scrollTop();
        if( position < windowHeight/2 ) { //800/2=400, 800/4 = 200
          if (thisScrollTop > lastScrollTop){
            // downscroll
          } else {
            // upscroll
            self.hide();
          }
        } else {
          if (thisScrollTop > lastScrollTop){
            // downscroll
            self.show();
          } else {
            // upscroll
          }
        }
        lastScrollTop = thisScrollTop;

        //
        // var thisScrollTop = $(this).scrollTop();
        // if (thisScrollTop > lastScrollTop){
        //     // downscroll
        //     console.log('downscroll');
        //     if( position > windowHeight/4 ) { //800/2=400 800/4 = 200
        //       self.show();
        //     }
        // } else {
        //    // upscroll
        //    console.log('upscroll');
        //    if( position < windowHeight/4 ) { //800/2=400 800/4 = 200
        //      self.hide();
        //    }
        // }
        // lastScrollTop = thisScrollTop;


    }, 600);

    // var lastScrollTop = 0;
    // $(window).bind('scroll', function() {
    //   var position = $('body').scrollTop();
    //   console.log('scroll');
    //   console.log(position);
    //   //wait 250ms
    //   //if position (windowHeight/2)(800/2=400)
    //   // windowHeight
    //
    //    var st = $(this).scrollTop();
    //    if (st > lastScrollTop){
    //        // downscroll code
    //        console.log('downscroll code');
    //    } else {
    //       // upscroll code
    //       console.log('upscroll code');
    //    }
    //    lastScrollTop = st;
    //
    //
    // });

  }

}

var IOSscrollJumpFix = function(){
  //Iphone Scroll jumping fix
  //window.scrollTo(0, 1);
  $('body, html')
    .animate({scrollTop: 0})
    .scrollTop(0);

  // set percentage height to fixed px height. This should fix it.
  var targetHeight = $('header').height();
  $('header').css('height',targetHeight);

}



$( document ).ready(function() {
    console.log( "ready!" );


    IOSscrollJumpFix();


    fancyNavBar.initialize();

    loader.hide();
});
