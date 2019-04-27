---
layout: post
category : blog
tagline: "What I found when I started up my old react project again"
tags : [react, javascript, scss, html5, git]
---

So before I knew any bettery and before github had unlimited free branches. I would keep all my react projects in one branch.
It was based off the same boilerplate. But when I wanted to make something different out of it I would make  branch for the new project. This leaves me with a bunch of branches that have slightly differnet similar code and a huge headache trying to find anything that I worked on in the past.

So what I'm starting to do is move the branches into there own repos. I rememberd an old sound board web app I made and wanted to take a look at it. Well I couldnt find it. It was nested deep within a repo in a branch somewhere.

## Git Repo Management

Here are the steps it took to turn a branch into a repo.

1. Clone the repo:
```
git clone https://github.com/myname/oldrepo.git
```
2. Fetch the branch
```
git fetch
git fetch --all
```
in my case I needed two different branches one should have been  a feature/branch.
3. Checkout the remote branch
```
git checkout --track origin/branchname
```
4. Create new repo on Github.com
I still dont know how to make a new github repo from command line. Enlighten me?
5. Follow gits advice and add new Origin
```
git remote set-url origin http://github.com/myname/newrepo.git
git push -u origin master
```

I ended up deciding to just overwrite master with my branch
There is probably a better way of doing this.
6. Merge ours master
```
git checkout branchname
git merge -s ours master
git checkout master
git merge branchname
```
7. Push again
```
git push
```
I created a new branch called ```development``` so I can do all my new development there and anything I make i want to use feature branches like this: ```feature/mynewfeature```
I'm going to be merging everything into master myself. But If I ever get a chance to work with a team again, pull request on a feature branch would be the preffered workflow.

## Running The Project

So now master is my drum pads app. The next step is diong an npm install
```
cd myrepo
npm install
```
And wait a long time....
Still waiting

Then ne next step is to run the projects
```
npm start
```
Which is a shorcut to run:
```
webpack-dev-server --hot --inline
```

Now sit back and watch the depenency errors flood in

## Dependency errors

Nice. Now I get this spit out on my consul . What does it mean?

```
#
# Fatal error in ../deps/v8/src/api.cc, line 1244
# Check failed: !value_obj->IsJSReceiver() || value_obj->IsTemplateInfo().
#
Illegal instruction (core dumped)

npm ERR! Linux 4.4.0-17134-Microsoft
npm ERR! argv "/usr/bin/node" "/usr/bin/npm" "start"
npm ERR! node v8.10.0
npm ERR! npm  v3.5.2
npm ERR! code ELIFECYCLE
npm ERR! react-web-pack-test@0.0.0 start: `webpack-dev-server --hot --inline`
npm ERR! Exit status 132
npm ERR!
npm ERR! Failed at the react-web-pack-test@0.0.0 start script 'webpack-dev-server --hot --inline'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the react-web-pack-test package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     webpack-dev-server --hot --inline
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs react-web-pack-test
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls react-web-pack-test
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /home/patrick/x/drum-pads/npm-debug.log
```

I should have mention that I'm starting with a new development environment. So i get to figure out what I didn't install when I worked on my old machine. Which I ditched since I cant update osx (its old) I don't get the fancy code changes. End rant?
But anyway. Rather than buy a new mac with the amazing income I'm getting. I decided to give the lothesome windows develpment a shot. At first I was trying to use cygwin but I figured out that it sucks and using Linux vertualization was the way to go. Long story short, I have a unix terminal running on my winows machine. This has been ok for edditing my github pages site and all that jazz. But now I want to run my react webpack npm dependent project.

So what happened in the latest error?

Well I tried to see If I could bundle my project with webpack
```
webpack
```
Which I soon found out it was not installed...
So I guess I should add that to the getting started readme.
But that error above was cryptic... for me anyway...

So I'm going try to install webpack globally
```
npm install --global webpack
```

Great now I get this error:
```
npm WARN optional Skipping failed optional dependency /webpack/chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.2.8
npm ERR! Linux 4.4.0-17134-Microsoft
npm ERR! argv "/usr/bin/node" "/usr/bin/npm" "install" "--global" "webpack"
npm ERR! node v8.10.0
npm ERR! npm  v3.5.2
npm ERR! path /usr/local/lib
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access

npm ERR! Error: EACCES: permission denied, access '/usr/local/lib'
npm ERR!  { Error: EACCES: permission denied, access '/usr/local/lib'
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.

npm ERR! Please include the following file with any support request:
npm ERR!     /home/patrick/x/drum-pads/npm-debug.log

```

So I'm going to try to installing it with super user make me a sandwitch. We will see if that works....
```
sudo npm install --global webpack
```
Well that worked.
Now to run npm start agiain..... wish me luck.





















-----
