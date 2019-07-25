---
layout: post
title:  "Cassettte Tape Player"
description: HTML5 responsive cassette tape that plays music.
date:   2019-05-01 00:05:31 +0700
categories: projects
tags: [html5, css, js]
demo-link: https://patomation.github.io/demos/cassette-tape-player
repo-link: https://github.com/patomation/cassette-tape-player
image: /assets/images/projects/cassette-tape-player.png
---

I was inspired to build this cassette tape based on a cool html5 demo I saw but have since lost. So I thought I would build my own using React to handle my view layer.


I'm going to break this down starting from the entry point and work my way in.
Here's what the react components look like in the index.

```js
<div className="app">
  <Center>
    <Player audioPath={music}>
      <CassetteTape topText="awesome mix" bottomText="totally awesome dude" />
    </Player>
    <Label>{"[ Click The Tape To Play Music ]"}</Label>
  </Center>
  <FullScreenBackground image={image} />
</div>
```
Lets talk about what this all does.

## <Center>
This component just abstracts away the styles that would keep the content both veridically and horizontally aligned to center.
I could have just applied a class but I kept having to manage where the class was applied when I added the label. So I just wrapped things and forgot about it.
When I need to add something else unde the tape I don't have to mess with centering again.

## <Player>
A container that handles Audio playing and send props to the child (Cassette Tape). It contains a click event that handles playing and stopping of the player. So that anywhere on the label or tape is clicked will start playing.

## <CassetteTape>
The meat of the cassette tape animations takes two props. Animating, a boolean that starts or stops the animaiton. Progress a number from ```0``` to ```100```. This is used to animate the tape from left to right just like a real cassette. So if you watch the clip for the full length you'll see it grow larger on the right and shrink on the left.   

## <Label>
Pretty self explanatory. An abstraction for the label elements and what not.

## <FullScreenBackground>
This is a little 100% width and height component that takes one image path prop and covers the background. I've also got one of these in my library that plays videos too.


# The Player
Would you just look at all that glorious JSX.
```js
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      progress: 0
    };
    this.audio = new Audio(this.props.audioPath);
    this.audio.addEventListener('playing', (event) => {})
    this.audio.addEventListener('ended', (event) => {})
    //Start audio progress checker
    this._getProgressChecker();
  }

  //Checks progress every 300 ms and updates it to state
  _getProgressChecker(){
    let _this = this,
    timeout = window.setInterval(function(){
      _this.setState({
        progress: _this._getProgress()
      })
    }, 300);

  }

  //Does our fancy progress calculations
  _getProgress(){
    return this.audio.currentTime / this.audio.duration * 100
  }

  _handleClick(){
    if(this.state.playing == true){
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState(prevState => ({
      playing: !prevState.playing
    }));
  }

  render(){
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        animate: this.state.playing,
        progress: this.state.progress
       })
    );

    return(
      <div className="player" onClick={this._handleClick.bind(this)}>
        { childrenWithProps }
      </div>
    )
  }
}
```
