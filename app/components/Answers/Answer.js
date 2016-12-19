import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

export default function Answer (props) {
  return (
        <button type='button' onClick ={() => props.onAnswerSelect(props.value, props.currentQuestion)} className='btn btn-lg btn-success'>
          {props.text}
        </button>
  )
}
