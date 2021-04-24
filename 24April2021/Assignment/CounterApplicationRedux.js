import React from 'react';
import {useStore, useDispatch, useSelector} from 'react-redux';

function CounterApplicationRedux() {
    const dispatch = useDispatch();
    const store = useStore();
    const count = useSelector(state => state.count);

    const increase = () => {
        dispatch({type:'counter/increase'});        
    }

    const decrease = () => {
        dispatch({type:'counter/decrease'});
    }

    const resett = () => {
        dispatch({type:'counter/reset'});
    }

    const square = () => {
        dispatch({type:'counter/square'});
    }

    const squareroot = () => {
        dispatch({type:'counter/squareroot'});
    }

    return (
        <>
            Counter: {count}<br /><br />
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={resett}>Reset</button>
            <button onClick={square}>Square</button>
            <button onClick={squareroot}>Square root</button>
        </>
    )
}

export default CounterApplicationRedux;