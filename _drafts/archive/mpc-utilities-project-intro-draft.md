---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [intro, beginner, jekyll, tutorial]
---



This is a professional blog post talking about something. yaya.
I need to demonstrate my ability to quickly learn things. As well as demonstrate existing tech nolage.
By showcasing what I know.

Im trying to think of a project that I last worked on.
The most recent project that comes to mind is the mpc utilities.

It started out as a collection of python scripts utilites that did various things. Chop files and create mpc programs. This was inspired by the mybuny hugs mpc100 python module that Ive been using for the last couple of years.

I felt like I was waisting so much time editing on the mpc and loading samples with its clunky ui. Even though I installed jj os. I still felt like I was constantly turing things on that could be default.

One day a card fried and I last my entire project and all the recorded samples I collected. I knew it was time to create a tool suit to help me.

So it started with me searching for what was available to load sounds onto the mpc
I came accross this great java app called MpcMaid with lets the user drag and drop files and create mpc programs. While this was nice if you just want to load in raw samples. But what about wanting to use another program to edit the sample. You waould have to extract them from the DAW and load them into this utility. I thought there must be a simpler way.
All my samples 64 of them. the total number of samples that one program can contain. that is 16 pads for each of the 4 banks that are available to switch to. Why not fill up all the samples.

I eneded up getting frusterated with mpcmaids unfinished chopping feature. And somhow stumbed across the source code fro the project. I forget If it was when I decided to try to lear java. I funbled around making jars and figuing out how to do hello worlds. In the process of learning I figured out that there was a way to insect a java app and see some of the code. Luckely the code was unminified ish. I think. I could see that the source for the mpc creationg weas a python module writen by someone else. An engineere now working for google. For that exact purpus. To give other progrmaers the ability to make something further for the mpc1000 owner community.

So just how the JJOS guy made a alternative operationg systme and relieced it to the culst community, another person created a program to decode the PGM files on a low level. A level of computer science I could only wish to comprehend.

Over time in my learning and my desier to create scrips. I began to understand how the python script works. But Ivve not been intellegent enough to recreate such a thing in another langage. I hadnt leanred of child process and at the time I baly knew javascript but only html css and graphing calculator code.
So I though by building what I needed would give me the incenting to learn the python language.

After a while and lots of time spent learning the syntaxes I began learn a bit more. For my day job I began learning about modular programing and react node npm. And I wasnted to make the python scripts more module to resue functions. I spent a long frustrating time trying to convert over to this model and ultimatly came to the conlustion that I should make a node base command line interface. That would allow me to connect to the existing python modules. I ended up using Commander an npm package that is design to read arguments and let me take the user to the desiered script.

So as I go ive been pulling the logic out of hte python cluster fuck. and putting it into clean resuable function in javascript mess. The python module are super simple taking only arguments and producing results. Dumb. The logic is all controlled by node. Teh ptyhon script connects to the mpc1000 module that is unchanged.

So this is where I am so far. The product isnt done yet.
I will be adding more features later.

So far what the mpc-utilites cli can do is this:
- backup a card to hard disk. I use a plethera of compact flash cards.
- chop samples into 64 files. This is for when I render a drum rack out of ableton that I know has 64 samples. The script chops off the silence to save space. My mpc only has 128mb of memory. So I have a bunch of 128 cards.
- Update card with lates autoload files. Remember when I got tired of setting the defalts every time.
- Get autoload files from card. Some times you might want the defalts from your last session to be the default for other projects. Like having diffenet lengths of sequences and so on.
- make program from samples. This one takes the 64 files we made from the chop scipt and automaticaly makes a PGM file with the defaults I like.
- Make a synth. I can take one file and change the pitch to turn it into a piano across all the pads. Kinda fun.

So those are some of the things that it can do. Every time I come across somehting I want I'll add it to the repo and give it a command line option.































<!-- XXX -->
