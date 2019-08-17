import React, { Component } from 'react';
import {connect} from 'react-redux';

//import action creators
import {incrementActionCreator, decrementActionCreator} from './App'

class Counter extends Component {
    constructor(props){
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment = () => {
        //this.props.dispatch({type:'INCREMENT'});
        this.props.inc();
      }
    
      decrement = () => {
        //this.props.dispatch({type:'DECREMENT'});
        this.props.dec();
      }

    render() {
        return(
            <div>
                <h2>Counter</h2>
                <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.count
}); 

const mapDispatchToProps = dispatch => ({
    inc : () => {
        //dispatch({type: 'INCREMENT'})
        dispatch(incrementActionCreator())
    },
    dec : () => {
        //dispatch({type: 'DECREMENT'})
        dispatch(decrementActionCreator())
    }
});

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Counter);