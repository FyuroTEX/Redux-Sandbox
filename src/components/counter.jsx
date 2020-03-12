import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className='jumbotron'>
            <h2 id="counter">{counter}</h2>
            <button id="inc"
                class="btn btn-primary btn-lg"
                onClick={inc}>
                INC
                </button>
            <button id="dec"
                class="btn btn-primary btn-lg"
                onClick={dec}>
                DEC
                </button>
            <button id="rnd"
                class="btn btn-primary btn-lg"
                onClick={rnd}>
                RND
                </button>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        counter: state
    };
};
const mapDispatchToProps = (dispatch) => {

    const { inc,dec,rnd}=bindActionCreators(actions, dispatch);
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => {
            const value = Math.floor(Math.random() * 10);
            dispatch(rnd(value));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);