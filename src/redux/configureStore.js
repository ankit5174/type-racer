import {applyMiddleware, combineReducers, createStore} from 'redux';
import textReducer from './text/text-reducer';
import textMiddleware from './text/text-middleware';

export function configureStore() {
    return createStore(
        combineReducers({
            textReducer
        }),
        applyMiddleware(
            textMiddleware
        )
    );
}