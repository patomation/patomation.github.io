---
layout: post
category : documentation
tagline: "Writing a template file for each demo code project I add"
tags : [utilities, template, jekyll, node]
---



Short story is I dumped in all my old demo projects into my site and I needed to create a page for each project so I can begin to write content. Well I could have just created one template and copied it 10 times. then manually rename each one. and Manually add the data that is needed at the top of each Jekyll post.
```Jekyll
---
layout: page
title: Drum Machine
header: Drum Machine
permalink: drum-machine
---
```

first we need in require fs. We will use this module to access nice file system stuff.

```Javascript
const fs = require('fs');
```

Then we create some helper functions that we will use later.
We want to title case the slugs that we get from the demo folder names

```Javascript
const toTitleCase = function(str){
  // Remove dashes
  str = str.replace(/-/g,' ');
  // Title Case Things
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
```

We need a resusable function for reading the directory. Also it includes a promise that will help keep us out of callback hell.
```Javascript
const readDirectory = function(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, items) {
            if (err) return reject(err);
            resolve(items);
        });
    });
}
```

A function for removing the extension in filenames simply by using .split(.) and getting the first index.
```Javascript
const removeExtension = function(item){
  // Remove extension
  return item.split('.')[0];
}
```

I was lazy and made a separate function that accepts an array and removes the extension from each item.
```Javascript
const removeExtensions = function(array){
  // Push to new array
  return array.map(function(item){
    // Remove Extension
    return removeExtension(item);
  });
}
```

Then we have the function that writes the template file.
```Javascript
// Write MD PAGE FILE
const writeFile = function(name){

  // Make it pretty
  var title = toTitleCase(removeExtension(name)),
      path = '_projects/'+name+'.md',

      // MD Template
      data = [
        '---',
        'layout: page',
        'title: '+title,
        'header: '+title,
        'permalink: '+name,
        '---',
        '','', //Extra Returns
        '!['+title+'](https://patomation.github.io/demos/'+name+'/thumbnail.png "'+title+'")', //IMAGE
        '### DEMO: ['+title+'](https://patomation.github.io/demos/'+name+')' //LINK
      ];

  return new Promise(function(resolve,reject){
    var file = fs.createWriteStream(path);
    file.on('error', function(err){reject(err)} );
    // file.on('end', resolve() );

    data.forEach(function(item){
      file.write(item + '\n');
    });

    file.end(resolve());


  });
}
```
I want to read the directory for the demos and the projects to only create templates if one does not exist yet.Since readDirectory returns a promise. We can put these in an array.
```Javascript

// Read Directories and save for later
var promises = [
  readDirectory( 'demos/'),
  readDirectory( '_projects/')
];
```
Since there is a nice feature Promise.all, we can do something when ALL the promises have been resolved.
```Javascript
//When directories have been read compare them
Promise.all(promises).then(function(){

  // Store arguments as list of project pages and demo folders
  var demoCodeFolders = arguments[0][0];
  var projectPages = removeExtensions(arguments[0][1]);

  // For each demo folder
  demoCodeFolders.forEach(function(demoCodeFolder){
      // Check to see if it already has a page

      // If no page found create one from template
      if(projectPages.indexOf(demoCodeFolder) < 0){

        // Write Template File
        writeFile(demoCodeFolder).then(function(){console.log('File Write Complete');});
      }

  })
}, function(err){
  console.log(err);
})

```

So instead of tediously creating a page for each demo I spent more time coding a script that will take care of this forever.


Now to run the script I can simply type from the command line:
```bash
node _utilities/create-project-page.js
```
