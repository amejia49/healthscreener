import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

export default function Home () {
  return (
    <div className ="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1> Welcome </h1>
      <p className ="lead"> PHQ-9 Depression Screener</p>
      <Link to = "/questions">
        <button type='button' className='btn btn-lg btn-success'>
          Get Started
        </button>
      </Link>
    </div>
  )
}
