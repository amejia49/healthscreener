import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { AnswersContainer, ResultContainer } from '~/containers'
import { Question } from '~/components'

class QuestionContainer extends Component {
  render () {
    return (
      <div>
      {this.props.showResults === true ?
        <ResultContainer />:
        <div style = {styles.container}>
          <Question question = {this.props.question}/>
          <AnswersContainer />
        </div>
      }
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

function mapStateToProps ({questionnaire}) {
  return {
    question: questionnaire.questions[questionnaire.currentQuestion],
    showResults: questionnaire.currentQuestion >=  questionnaire.numOfQuestions
  }
}
export default connect(
  mapStateToProps
)(
  QuestionContainer
)
