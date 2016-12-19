import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

function score (score) {
  if (score <= 4)
    return 'No'
  else if (score <=9 ) {
    return 'Mild'
  }
  else if (score <=14 ) {
    return 'Moderate'
  }
  else if (score <=19 ) {
    return 'Moderately Severe'
  }
  else {
    return 'Severe'
  }
}
export default function Result (props) {
  console.log('props in question', props);
  return (
    <div className ="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <p className ="lead"> Your Results: {props.score} {score(props.score)} Depression</p>
    </div>
  )
}
