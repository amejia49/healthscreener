import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Result } from '~/components'
import { TherapistContainer } from '~/containers'
import { calculateScore } from '~/redux/modules/questionnaire'

class ResultContainer extends Component {
  componentDidMount () {
    this.props.dispatch(calculateScore())
  }
  render () {
    return (
      <div style={{display:'flex', flexDirection:'column'}}>
      <Result score ={this.props.score}/>
       {this.props.score >= 10 &&
         <TherapistContainer />
       }
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

function mapStateToProps ({questionnaire}) {
  return {
    score: questionnaire.score
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  ResultContainer
)
