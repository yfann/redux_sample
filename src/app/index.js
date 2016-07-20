
import * as React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let store=createStore(
    rootReducer,
    applyMiddleware(thunk)
);


render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById("container")
);