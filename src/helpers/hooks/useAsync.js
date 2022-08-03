import { useCallback, useReducer, useRef } from 'react';
import useSafeDispatch from './useSafeDispatch';


const defaultState = {
    data: null, 
    status: 'idle', 
    error: null
}
export default function useAsync(initialState) {
    const initialStateRef = useRef({
        ...defaultState, ...initialState
    })

    const [{data, status, error}, setState] = useReducer ((state, action) => {
        return {...state, ...action}
    }, initialStateRef.current)

    const safeSetState = useSafeDispatch(setState)

    const run = useCallback(
        (promise) => {
            if(!promise || !promise.then)
            throw new Error (`The Arguments passed to useAsync().run must be a promise`)
            safeSetState({status: 'Pending'})
            return promise.then(data => {
                safeSetState({data, status: 'resolved'})
                return data
            }, error => {
                safeSetState({status: 'rejected', error: JSON.parse(error.message)});
            });

        },
        [safeSetState]
    );

    const setData = useCallback(
        (data) => {
            safeSetState({data})
        },
        [safeSetState],
    )
    const setError = useCallback(
        (data) => {
            safeSetState({error})
        },
        [safeSetState],
    )
    const reset = useCallback(
        (data) => {
            safeSetState(initialStateRef.currnet)
        },
        [safeSetState],
    )
    return {
        data, 
        status, 
        error, 
        run, 
        setData, 
        setError, 
        reset, 
        isIdle: status === "idle",
        isLoading: status === "idle" || status === "pending",
        isError: status === "rejected",
        isSucces: status === "resolved",
    };
}
