const fs = require('fs'),
      path = 'demos/';

const toTitleCase = function(str){
  // Remove dashes
  str = str.replace(/-/g,' ');
  // Title Case Things
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

const readDirectory = function(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, items) {
            if (err) return reject(err);
            resolve(items);
        });
    });
}

const removeExtension = function(item){
  // Remove extension
  return item.split('.')[0];
}

const removeExtensions = function(array){
  // Push to new array
  return array.map(function(item){
    // Remove Extension
    return removeExtension(item);
  });
}

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
        '{% include JB/setup %}',
        '','', //Extra Returns
        '[!['+title+'](https://patomation.github.io/demos/'+name+'/thumbnail.png "'+title+'")](https://patomation.github.io/demos/'+name+')', //IMAGE
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


// Read Directories and save for later
var promises = [
  readDirectory( 'demos/'),
  readDirectory( '_projects/')
];

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























//        X . X       -               I've got a baby opossum in my room... What should I do?
