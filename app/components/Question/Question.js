import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

export default function Question (props) {
  console.log('props in question', props);
  return (
    <div className ="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1> {props.question.text} </h1>
      <p className ="lead"> PHQ-9 Depression Screener</p>
    </div>
  )
}
