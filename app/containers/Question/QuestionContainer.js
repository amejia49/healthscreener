import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { AnswersContainer, ResultContainer } from '~/containers'
import { Question } from '~/components'
import { clearAnswers, previousQuestion } from '~/redux/modules/questionnaire'

class QuestionContainer extends Component {
  componentWillMount () {
    this.props.dispatch(clearAnswers()) //if user goes back to Home, reset currentQuestion count
  }
  render () {
    return (
      <div>
      {this.props.showResults === true ?
        <ResultContainer />:
        <div style = {styles.container}>
          <Question question = {this.props.question}/>
          <AnswersContainer />
          {this.props.currentQuestion !== 0 &&
            <span style= {styles.previous} onClick={this.props.onPreviousQuestion}>Previous Question</span>
          }
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
  },
  previous: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}

function mapStateToProps ({questionnaire}) {
  let { currentQuestion } = questionnaire
  return {
    currentQuestion,
    question: questionnaire.questions[currentQuestion],
    showResults: currentQuestion >=  questionnaire.numOfQuestions
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    onPreviousQuestion: () => dispatch(previousQuestion())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  QuestionContainer
)
