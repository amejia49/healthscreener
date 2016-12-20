import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

Question.propTypes = {
  question: PropTypes.object
}
export default function Question (props) {
  return (
    <div className ="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <p className ="lead"> Over the last two weeks, how often have you been bothered by..</p>
      <h3> {props.question.text} </h3>
    </div>
  )
}
