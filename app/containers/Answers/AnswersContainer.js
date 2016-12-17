import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Answer } from '~/components'

class AnswersContainer extends Component {
  render () {
    return (
      <div style = {styles.container}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

function mapStateToProps ({questions}) {
  return {
    question: questions
  }
}
export default connect(
  mapStateToProps
)(
  AnswersContainer
)
