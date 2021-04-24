import React from 'react';
import {useStore, useDispatch, useSelector} from 'react-redux';

export default function ReduxCounter() {
    //it will provide a dispatch function
    const dispatch = useDispatch();
    //this will give me access to the store
    const store = useStore();
    //this hook is to get the count from the state. and if state changes,
    //then the count will also change.
    const count = useSelector(state => state.count);
    console.log("inside ReduxCounter ");
    console.log(store);

    const increase = () => {
        dispatch({type:'counter/increase'});
    }

    const decrease = () => {
        dispatch({type:'counter/decrease'});
    }

    return (
        <>
            Count: {count}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </>
    )
}