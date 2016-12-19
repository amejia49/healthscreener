import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from '~/config/routes'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '~/redux/modules'

// const sagaMiddleware = createSagaMiddleware()
const preloadedState = window.__PRELOADED_STATE__
const store = createStore(combineReducers(reducers), preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    {getRoutes()}
  </Provider>,
document.getElementById('app'))
