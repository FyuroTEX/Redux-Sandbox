import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(Counter);