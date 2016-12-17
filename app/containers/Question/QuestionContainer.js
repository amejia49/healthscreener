import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { AnswersContainer } from '~/containers'
import { Question } from '~/components'

class QuestionContainer extends Component {
  render () {
    return (
      <div style = {styles.container}>
        <Question question = {this.props.question}/>
        <AnswersContainer />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
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
  QuestionContainer
)
