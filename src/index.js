import { createStore } from 'redux';
import reducer from './reducer';
import { inc, dec, rnd } from './actions';



const store = createStore(reducer);
const { dispatch } = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
};

const incDispatch = bindActionCreator(inc,dispatch);
// const decDispatch = () => dispatch(dec());
const rndDispatch = bindActionCreator(rnd, dispatch);   // const rndDispatch = (payload) => dispatch(rnd(payload));

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('dec').addEventListener('click', () => {
    dispatch(dec());
});
document.getElementById('rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rndDispatch(payload)
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};
store.subscribe(update);