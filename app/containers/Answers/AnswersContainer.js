import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Answer } from '~/components'
import { setAnswer } from '~/redux/modules/questionnaire'

class AnswersContainer extends Component {
  render () {
    return (
      <div style = {styles.container}>
        {this.props.answers.map(({text, value}, index) => {
          return <Answer key= {index}  text={text} value={value} currentQuestion = {this.props.currentQuestion} onAnswerSelect={this.props.onAnswerSelect}/>
        })}
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
}

function mapStateToProps ({questionnaire}) {
  return {
    answers: questionnaire.answers,
    currentQuestion: questionnaire.currentQuestion
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAnswerSelect: (answer, currentQuestion) => dispatch(setAnswer(answer, currentQuestion))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  AnswersContainer
)
