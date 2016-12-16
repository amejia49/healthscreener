import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from '~/config/routes'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from '~/redux/modules'

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    {getRoutes()}
  </Provider>,
document.getElementById('app'))
