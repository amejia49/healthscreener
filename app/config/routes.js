import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  AppContainer, HomeContainer,
} from '~/containers'

export default function getRoutes () {

  console.log('AppContainer', AppContainer)
  return (
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
