---
layout: post
title:  "The Layman's Guide To Redux"
date:   2019-04-20 00:05:31 +0700
categories: tutorials
tags: [redux, react, javascript]
description: Demystify all the boilerplate necessary to get redux working.
excerpt: Demystify all the boilerplate necessary to get redux working.
---
I had trouble trying to learn redux from the examples. Maybe I'm not the only one. The documentation doesn't explain the whole picture all at once and has two many implementation styles for each documentation. It was easy to get lost trying to figure out how it all fits together.

**Obligatory Redux/React hater but then found the light.**
Now I had my reservations about redux for a long time. I didn't even like React at first. But after all I am only a beginner. But the more I learn javascript the more I know about meta developing of object prototypes I can see mostly what's going on.

Side rant. Over time of watching react I've see "the way of doing things" change over and over again. Slowly they have been moving toward alignment with javascipt syntax and best practices instead of "helpery we force you to do it this odd way."

**[Download The Example Project](https://github.com/patomation/redux-example)**

## Redux Overview
Redux is your global state management.
Redux has three parts?
1. Actions - events
2. Reducers - state
3. Consumers - components

| onClick --->   | Action --->    | Reducer --->    | Consumer --->  |
| :------------- | :------------- | :-------------  | :------------- |
| User Action -> | event logic -> | global state -> | Component Prop -> |

It's really simple if you think about it. Most of the time I've made my own global logic to handle these things. Redux takes care of this for us.

## Folder Structure
- src
  - actions
    - index.js
    - addTodo.js
    - changeTodoInput.js
  - reducers
    - index.js
    - todoList.js  `TODO_LIST`  <-- State Lives Here as `state.todoList`
    - todoInput.js `TODO_INPUT` <-- State Lives Here as `state.todoInput`
  - components
    - Consumer.js
  - App.js
  - index.js  


## App / Entry Point
First we need to add all the boilerplate that redux requires. We go from a sexy simple react App.js that looks like this:
```javascript
import React from "react";
import { render } from "react-dom";

render(
  <div>
    Simple React App
  </div>,
  document.getElementById("root")
);
```

..to a bloated app like this:

`src/App.js`
```javascript
import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();

import rootReducers from './reducers/';

let store = createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleware, // Enables dispatch() functions
    loggerMiddleware // logs actions
  )
);

import Consumer from './components/Consumer.js';

render(
  <Provider store={store}>
    <Consumer />
  </Provider>,
  document.getElementById("root")
);
```
It's not so bad when you get it set up. You might not need to change anything. I take it a step further and make a child app that handles importing all the rest of the components so I never have to open this monstrosity of a file.


We create a store that brings in our reducers.
It adds `applyMiddleware`  to let us use redux thunk which lets us dispatch `actions` in the `<Consumer>` components later.
``` javascript
import rootReducers from './reducers/';
let store = createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleware, // Enables dispatch() functions
    loggerMiddleware // logs actions
  )
)
```

Most importantly what's happening here is that your app get wrapped in `<Provider>` tags. This will allow the `<Consumer>` components, that you make later, connect to the redux store.
```javascript
<Provider store={store}>
  <Consumer />
</Provider>
```

## Reducers
Reducers are where your state lives. In the beginner documentation they tell you to use one reducer file. But I'm going to show you how to use multiple files. It makes more sense this way since you can open a folder and see all your state variables as file names. That's right the file name determines the state variable.

We would need to create an index file that imports the individual reducer files and uses `combineReducers` to bring them together then we export the result.

`src/reducers/index.js`
```javascript
import { combineReducers } from 'redux';

import todoInput from './todoInput.js';
import todoList from './todoList.js';

export default combineReducers({
  todoInput,
  todoList
});
```
You see, we have two state variables `todoInput` and `todoList`.


This is what the todoInput reducer looks like. Dispatching the action type of `TODO_INPUT` will change the value of todoInput.
For some reason we use capital letters here.  
`src/reducers/todoInput.js`
```javascript
export default (state = '', action) =>
  (action.type === 'TODO_INPUT' ? action.value : state);
```
Same thing with the todoList reducer. You can see that the default value is a blank array because we set `state = []`
`src/reducers/todoList.js`
```javascript
export default (state = [], action) =>
  (action.type === 'TODO_LIST' ? action.value : state);
```

**Why ternary statements?** In case you don't know what a
ternary statement is it looks like this:
`value ? true : false`
So if `value` is true we use the first value after `?` if its false we use the value after `:`. Make scene? I wanted a simple straightforward reducer file.
The above reducer could be expanded to look like this:
`src/reducers/todoList.js`
```javascript
export function todoList(state = [], action) {
  if(action.type === 'TODO_LIST'){
    return action.value;
  } else {
    return state;
  }
}
```
The redux docs will have us use a switch. Technically they are faster.
`src/reducers/todoList.js`
```javascript
export function todoList(state = [], action) {
  switch (action.value) {
    case 'TODO_LIST':
      return action.value;
      break;
    default:
      return state;
  }
}
```
I guess that is nice If I wanted to have actions such as `INCREMENT` and `DEINCREMENT` in the same reducer. But I never expand to that level of need in my workflow. My reducers always take one value. So it should be simple.
You can't get simpler that two lines.

## Actions
Actions are like your events. This is where we house fetch request to an api like POST GET DELETE. We can link dispatching together and change multiple reducer/global-states in one action. Keeping the application action logic here helps with scalability and makes it easier to find stuff later.

Unfortunately you have to import them into each thing that needs to use them. I wonder if you could just have global actions on the window object or would that be and `ANTI_PATTERN`?
Well, as far as my level of skill I just import the action I need into each consumer.

To make this easier we use an index.js export in our actions folder so we can just import from the folder instead of the action file itself.
`src/actions/index.js`
```javascript
export * from './addTodo.js';
export * from './changeTodoInput.js';
```
For example the changeTodoInput action get called from the onChange handler of our input in our consumer and is passed a text value.
The action here then passes the value to the reducer by dispatching it's name, `TODO_INPUT` and sending the text value. One thing I'll note here is that this action is really unnecessary. I could dispatch the reducer directly from onChange function in the component instead. However, having an action gives me a place to modify the data before it gets to the store if I want to.  
`src/actions/changeTodoInput.js`
```javascript
export function changeTodoInput(text){
  return (dispatch, getState) => {

    dispatch({
      type:'TODO_INPUT',
      value: text
    });

  }
}
```

The addTodo action handles adding pushing an item into the array.
I could have just sent it the text value from the component but since we stored the input values onChange we can grab them from the state with `getState().todoInput`. Then we use getState again to get the todoList valuse. I use slice(0) to make a clone of the array that we can change.
Then I push the new text item into the array and dispatch the 'TODO_LIST' reducer with it's new array.

`src/actions/addTodo.js`
```javascript
export function addTodo(){
  return (dispatch, getState) => {

    let newTodoList = getState().todoList.slice(0),
        item = getState().todoInput;
    newTodoList.push(item);
    dispatch({
      type:'TODO_LIST',
      value: newTodoList
    });

  }
}
```


## Consumer
Finally we have the consumer component.
We need it to have two things to work with redux.
1. ReactReduxContext.Consumer - So the component can access `store.dispatch` to call actions and make reducer changes
2. connect - So the component can get the global state values

AS you can see we have a huge component that should be simple. Maybe there is a better way. Here is where we have our action imports and where we will be using them.
We have an input that dispatches the changeTodoInput event/action. We have a button that has a click event that dispatches the addTodo event/action. The `connect` bit connects our global state `todoList` to props.todoList. We have a simple <ol> list that maps the todo list items as <li> elements.


`src/components/consumer.js`
```javascript
import React from "react";
import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux';

import {
  addTodo,
  changeTodoInput
} from '../actions/';

//Connect redux state to props
export default connect( (state) => {
  return {
    //This is how we get to our state/reducer todoList = []
    todoList: state.todoList
   }
})(class Consumer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ReactReduxContext.Consumer>
        {({ store }) =>
          <div>
            <input
              value={this.props.input}
              onChange={ event => {
                //This is how we pass the value up to global state
                store.dispatch(changeTodoInput(event.target.value)); }}/>
            <button onClick={ () => {
              //Only until we dispatch addTodo will the input get added as a todo
              store.dispatch(addTodo());
            }}>Add</button>
            <ol>
              {this.props.todoList.map( (item, index) =>
                <li key={index}>{item}</li> )}
            </ol>
          </div>
        }
      </ReactReduxContext.Consumer>
    )
  }
});
```

## Conclusion
Redux takes a bunch of boilerplate to do something really simple.
But in practice using this structure has helped me keep my app event/state logic orderly. I really do enjoy having a separate file for each reducer where the fileName becomes the state variable name. This helps keep it simple.

I would like to see a simpler way of implementing the consumer component. I might be using to much stuff here. Maybe I only need to use connect and not ReactReduxContext.Consumer but for now I'm using both.

I know redux is not very opinionated but the official documentation could do better by providing a simplified big picture for beginners rather than taking the users down a path of structures, use cases and methods that get thrown out when they get to more advance tutorials.

**[Download The Example Project](https://github.com/patomation/redux-example)**
