import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

export default function RequestInfo () {
  return (
    <div className ="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <p className ="lead">Someone will be in contact with you shortly</p>
    </div>
  )
}
