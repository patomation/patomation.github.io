---
layout: post
title:  "Keyboard Drums"
description: Play a drum set with your keyboard
date:   2019-05-01 00:05:31 +0700
categories: projects
tags: [html, css, js, react, sass]
demo-link: https://patomation.github.io/demos/keyboard-drums/
repo-link: https://github.com/patomation/keyboard-drums
image: /assets/images/projects/keyboard-drums.png
---

This is a project that I've wanted to do for a while. I have a bunch of 16 pad drum projects ranging from web apps to native desktop applications. I always used hotkeys and had labels on the 16 pads for each hotkey. But this would limit me to only part of the keyboard.

The hotkeys and pads were arrainged as such.
```
1 2 3 4
q w e r
a s d f
z x c v
```
I always wanted to be able to use the rest of the keyboard and I figured I would be able to expand the code to include more hotkeys at any time. I was wrong. Partially since when I reopend the project react and webpack had changed versions. My code was way behind. So I updated everything. And Started from scratch. First with the keyboard html css look then with the Javascript guts that made it work.

I was able to recycle some of my old code since It was so well documented and organized into different modules. This is my favorite thing. I'm always thinking about code re-usability. From this I've been able to export my modules to native apps and begin using them there.

## Hotkeys
Here is the keyboard listener function. I only need to launch this once for it to create a window event listener for the keyboard.
 ```javascript
 //Keyboard listener
 keyboardListener() {
  window.onkeydown = function(e) {
    this.handleHotkeyDown(e.key);
  }.bind(this);
  window.onkeyup = function(e) {
    this.handleHotkeyUp(e.key);
  }.bind(this);
}


 ```
I want to listen for key down and key up since I want to stop the sound when the key is lifted. Both the handleHokeyDown and up functions get called by they hotkey listener and the click events on the dom elements as well.

### Mouse Clicks
OnMouseDown fires when the finder is pressing down on the key.
onClick fires when the finger leaves the mouse. Lets just say this is the event I use to stop the sound.

```javascript
<div
  onMouseDown={this.handleMouseDown.bind(this)}
  onClick={this.handleClick}
  className={`${this.state.active['1'] ? 'active' : ''} key num dual`}>
```
Both of the handleMouseDown and OnClick events call handleHotkeyDown and handleHotkeyUp passing through the key.

## Event Funnel
The sound playing code is quite simple.
These functions pass the events to the sound manager class that holds all the Audio objects.

```javascript
handleHotkeyDown(key) {
  this.makeActive(key);
  if (keyAudios[key] !== undefined) {
    keyAudios[key].play();
  }
}

handleHotkeyUp(key) {
  this.makeDeactive(key);
  if (keyAudios[key] !== undefined) {
    keyAudios[key].pause();
  }
}
```

## Play Sounds
What we do is make a huge object that contains key names that are the actual keyboard keys and the values are new keyAudio classes. This way all we need to do is look at the KeyAudiosObject[key] and we have our extended Audio object
```javascript
class keyAudio {
  constructor(hotKey, audioSource) {
    this.audioSource = audioSource;
    this.key = hotKey;
    this.audio = new Audio(this.audioSource);
  }

  play() {
    // Lets me rappid fire play the samples
    this.audio.pause();
    this.audio.currentTime = 0;
    // Play from start
    this.makePromise(this.audio.play());
  }

  pause() {
    this.audio.pause();
  }

  makePromise(promise) {
    // Promise expected by google chrome audio policy.
    if (promise !== undefined && promise !== false) {
      promise
        .then(_ => {
          // Autoplay started!
        })
        .catch(error => {
          // Error
        });
    }
  }
}
```



# [Try it out for your self: Demo](https://patomation.github.io/demos/keyboard-drums/)
