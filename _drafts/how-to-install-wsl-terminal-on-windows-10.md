# WSL LINUX TERMINAL ON WINODWS 10 -> Development enviroment setup

1. Set up WSL
https://docs.microsoft.com/en-us/windows/wsl/install-win10
a. Enable wsl linux ewmulation on windows 10 then restart
b. install Ubunto wsl from microsoft store

2. Install 7z
```
$ sudo apt-get install p7zip-full
```

3. Install wsl-terminal: https://github.com/goreliu/wsl-terminal
a: Download:
```
bash -c "wget https://github.com/goreliu/wsl-terminal/releases/download/v0.8.12/wsl-terminal-0.8.12.7z && 7z x wsl-terminal-0.8.12.7z"
6-set-default-shell.bat
```

2. ZSH
 a. Install zsh
 ```
 $ apt-get install zsh
```

b. Install ohmyzsh
 - agnoster theme: vim .zshrc change theme from robyrussle to adgnoster
 - powerline fonts: Download and install one of the powerline fonts
   - enable font in wsl-terminal options
 - Chose Solarized theme in wsl-terminal options

c. Make zsh default shell edit .bashrc and add "bash -c zsh"
```
$ vim .basrc
```
add:
```
"bash -c zsh"
```

## GET ATOM editor working to edit repos and stuff
1. ATOM: https://github.com/atom/atom/releases
a. Download atom deb
```
$ wget https://github.com/atom/atom/releases/download/v1.36.0-beta1/atom-amd64.deb
```
b. Install atom:
```
$ sudo dpkg -i atom-amd64.deb
```
-If dependancy errors:
```
$ sudo app-get install -f
```
c. Fix atom alias

2. VS Code: https://code.visualstudio.com/docs/?dv=linux64_deb
a Download vscode: https://go.microsoft.com/fwlink/?LinkID=760868  
use
```
dpkg -i packagename.deb ect....
```

3. Xserver
a. Download: https://sourceforge.net/projects/vcxsrv/
b. Install exe
b. add this to .bashrc after 'bash -c zsh' part
 ```
export DISPLAY=:0
export LIBGL_ALWAYS_INDIRECT=1
 ```

## BONUS
Remove computer name in turminal:
```
$ vim .zshrc
```
insert:
```
export DEFAULT_USER="$(whoami)"
```

## If Ubuntu wsl get currupted after reeboot Restart LxssManager
```
sc query LxssManager
sc stop LxssManager
sc start LxssManager
```

## WSL UBUNTU Home folder path:
```
C:\Users\[WindowsUserName]\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs
```

# npm permission error fixes
```
sudo chown -R $(whoami) ~/.npm
```
