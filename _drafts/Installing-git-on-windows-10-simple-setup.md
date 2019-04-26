# Windows 10 Git Setup 


## Install git to command line
1. Downlaod git installer [here](https://github.com/git-for-windows/git/releases/tag/v2.21.0.windows.1)
Installing this will add git command to Command Prompt


2. Start windows Command Prompt
```
Keboard Shortcut: windows + r
Type: cmd then hit enter
```
This will bring up the command prompt


3. Set up git user name and email
```
$ git config --global user.name "yourname"
$ git config --global user.email "yourname@domain.com"
```

4. Clone your repo
```
git clone https://github.com/yourname/yourname.github.io.git
```

Now you will have access to your repo to edit markdown files..
I just put my repo in the user directory so I cna find it eaisily. 
Then pin it to the windows explorer sidebar...
When ever I make a change I do a push to the repo from the command line:
```
$ git push
```




