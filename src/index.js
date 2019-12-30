import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import imgService from './services';
import store from './store';
import Context from './components/context';

const imgData = new imgService
ReactDOM.render(
    <Provider store={store}>
        <Context.Provider value={imgData}>
            <App />
        </Context.Provider>
    </Provider>
    , document.getElementById('root'))