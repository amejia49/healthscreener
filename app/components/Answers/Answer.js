import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

export default function Answer (props) {
  return (
      <Link to = "/questions">
        <button type='button' className='btn btn-lg btn-success'>
          Get Started
        </button>
      </Link>
  )
}
