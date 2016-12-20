import React, { PropTypes, Component } from 'react'
import { styles } from '~/styles'
import { Link } from 'react-router'

Answer.propTypes = {
  onAnswerSelect: PropTypes.func.isRequired
}
export default function Answer (props) {
  return (
        <button type='button' style={{minWidth: '250px', 'marginBottom' : '10px'}} onClick ={() => props.onAnswerSelect(props.value, props.currentQuestion)} className='btn btn-lg btn-success'>
          {props.text}
        </button>
  )
}
