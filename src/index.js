import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";  //Redux.createStore
import rootReducer from "./rootReducer";    //we have to import this because we want create a store
import {Provider} from "react-redux";       //this is the glue to connect react and redux
import {BrowserRouter} from "react-router-dom";         //

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//note1: pass 'Provider' store with our 'store' in line 10
//note1: we allow any component that we make to get access to redux store



