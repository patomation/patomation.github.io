WEB/APP STATIC SITE TEMPLATE V0.1
@author: PAToMation

Installation instructions


1) Run NPM install. Of course from the app dir

2) Run Grunt to package or Grunt Watch


Problems that may be encountered:

--Ruby-Sass isn't working.
  I thought I added npm install --save gulp-ruby-sass to the package.json. It should work nextime....

--Live Reload not working.
  It should work with Grunt Watch.
  And you must download the Chrome Extension.

  But it still doesn't work?
  Solution:
    I might have forgot to add this to my index:
    <script src="//localhost:35729/livereload.js"></script>
    Meh this didn't work. I'm going to install grunt serve.
