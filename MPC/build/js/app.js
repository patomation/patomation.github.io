App = Ember.Application.create();

App.Router.map(function(){
  this.resource('about');
  this.resource('posts');
  this.resource('mpc');
  this.resource('sequencer');
})


var activePad = function(id){
  id = '.'+id;
  $(id).addClass('active_pad');
  setTimeout(function () {
    $(id).removeClass('active_pad');
  }, 200);
}

var play = function(id){
  soundManager.play(id);
  activePad(id);
}

var soundManager
$( document ).ready(function() {
  console.log( "ready!" );

  document.onkeypress = function(e){
    e = e || event;
    var key = String.fromCharCode(e.keyCode);
    switch (key) {
      case '1':
        play('s1');
        break;
      case '2':
        play('s2');
        break;
      case '3':
        play('s3');
        break;
      case '4':
        play('s4');
        break;
      case 'q':
        play('s5');
        break;
      case 'w':
        play('s6');
        break;
      case 'e':
        play('s7');
        break;
      case 'r':
        play('s8');
        break;
      case 'a':
        play('s9');
        break;
      case 's':
        play('s10');
        break;
      case 'd':
        play('s11');
        break;
      case 'f':
        play('s12');
        break;
      case 'z':
        play('s13');
        break;
      case 'x':
        play('s14');
        break;
      case 'c':
        play('s15');
        break;
      case 'v':
        play('s16');
        break;
    }
  }

  var soundURLs = [
  'big-whip',
  'classic-punch',
  'crumble-slap',
  'forceful-reload',
  'gun-reload-slow',
  'gun-shot-with-silencer',
  'huge-glass-smash',
  'kung-fu-chop',
  // 'long-range-cannon',
  'trap-hihat-09',
  'scarey-gong',
  'slap',
  'slow-gun-shot',
  'to-your-doom',
  'Kick6',
  'Kick12',
  'Kick13',
  'Kick22',
  ];
  for (var i=0; i<soundURLs.length; i++) {
    soundManager.createSound({
      autoLoad:true,
      id: 's'+i,
      url: 'audio/'+soundURLs[i]+'.mp3'
    });
  }

});



//MPC EVENTS
App.S1View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s1');
  },
  click: function(evt) {
    play('s1');
  }
});

App.S2View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s2');
  },
  click: function(evt) {
    play('s2');
  }
});

App.S3View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s3');
  },
  click: function(evt) {
    play('s3');
  }
});

App.S4View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s4');
  },
  click: function(evt) {
    play('s4');
  }
});

App.S5View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s5');
  },
  click: function(evt) {
    play('s5');
  }
});

App.S6View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s6');
  },
  click: function(evt) {
    play('s6');
  }
});

App.S7View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s7');
  },
  click: function(evt) {
    play('s7');
  }
});

App.S8View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s8');
  },
  click: function(evt) {
    play('s8');
  }
});

App.S9View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s9');
  },
  click: function(evt) {
    play('s9');
  }
});

App.S10View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s10');
  },
  click: function(evt) {
    play('s10');
  }
});

App.S11View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s11');
  },
  click: function(evt) {
    play('s11');
  }
});

App.S12View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s12');
  },
  click: function(evt) {
    play('s12');
  }
});

App.S13View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s13');
  },
  click: function(evt) {
    play('s13');
  }
});

App.S14View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s14');
  },
  click: function(evt) {
    play('s14');
  }
});

App.S15View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s15');
  },
  click: function(evt) {
    play('s15');
  }
});

App.S16View = Ember.View.extend({
  touchEnd: function(evt) {
    play('s16');
  },
  click: function(evt) {
    play('s16');
  }
});



App.PlayView = Ember.View.extend({
  click: function(evt) {



    function timeout() {
      setTimeout(function () {
        // Do Something Here
        play('s16');
        // Then recall the parent function to
        // create a recursive loop.
        timeout();
      }, 500);
    }
    timeout();

    function timeout2() {
      setTimeout(function () {
        // Do Something Here
        play('s1');
        // Then recall the parent function to
        // create a recursive loop.
        timeout2();
      }, 1000);
    }
    timeout2();
  }
});




























///todo: look up action helper
