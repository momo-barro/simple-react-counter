import React, { Component } from 'react';
// import of Provider from react-redux
import {Provider}  from 'react-redux';
// import of createStore from redux
import {createStore}  from 'redux';
import './App.css';
import Counter from './Counter';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const incrementActionCreator = () => ({
  type: INCREMENT
});

export const decrementActionCreator = () => ({
  type: DECREMENT
});

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count+1
      };
    case DECREMENT:
    return {
      count: state.count-1
    };
    default:
      return state;

  }
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>        
        <div>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
