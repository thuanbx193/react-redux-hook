import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer  from './reducers/rootReducer';
import { 
    // StateListenerRegistry, 
    ReducerRegistry, 
    // MiddlewareRegistry 
}                           from "./react/base/redux";
// import Thunk                from "redux-thunk";

window.APP = {};

let _createStore = () => {
    // let middleware = MiddlewareRegistry.applyMiddleware(Thunk);
    // let middleware = MiddlewareRegistry.applyMiddleware();
    const reducer = ReducerRegistry.combineReducers();
    // const store = createStore( reducer, middleware );
    const store = createStore( reducer );
    // StateListenerRegistry.subscribe(store);
    if (typeof APP !== "undefined") {
        window.APP.store = store;
    }
    return store;
};

let store = _createStore();

ReactDOM.render(
	<Provider store ={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
