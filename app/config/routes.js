import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { RequestInfo } from '~/components'
import {
  AppContainer, HomeContainer, QuestionContainer
} from '~/containers'

export default function getRoutes () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
      <Route path='questions' component={QuestionContainer} />
        <IndexRoute component={HomeContainer}/>
      </Route>
      <Route path='request-info' component={RequestInfo}/>
    </Router>
  )
}
