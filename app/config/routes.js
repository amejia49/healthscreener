import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  AppContainer, HomeContainer, QuestionContainer
} from '~/containers'

export default function getRoutes () {

  console.log('AppContainer', AppContainer)
  return (
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
      <Route path='questions' header='Player One' component={QuestionContainer} />
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
