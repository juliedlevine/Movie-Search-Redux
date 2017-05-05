import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import MovieWidget from './MovieWidget';
import reducer from './MovieWidget.reducer';
import * as actions from './MovieWidget.actions';
import './index.css';


// Add the store
const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    Redux.applyMiddleware(ReduxThunk)
);


// Movie Widget Container
const MovieWidgetContainer = ReactRedux.connect(
    state => ({
        query: state.query,
        results: state.results,
        error: state.error,
        isFetching: state.isFetching
     }),
    actions
)(MovieWidget);


// Render compoenet to the dom, wrap in provider and connect to store
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MovieWidgetContainer />
    </ReactRedux.Provider>,
    document.getElementById('root')
);
