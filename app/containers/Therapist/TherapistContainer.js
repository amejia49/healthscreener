import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Result, Therapist } from '~/components'

class TherapistContainer extends Component {
  render () {
    return (
      <div style={styles.container}>
        <Therapist
          image='https://cdn0.sussexdirectories.com/rms/rms_photos/sized/29/70/227029-366240-3_120x150.jpg?pu=1425312282'
          name='Diana Ross'
          phoneNumber='201-543-3312'/>
        <Therapist
          image='https://cdn0.sussexdirectories.com/rms/rms_photos/sized/54/65/106554_2_120x150.jpg?pu=0'
          name='Cindy Gelber'
          phoneNumber='201-432-1992'/>
        <Therapist
          image='https://cdn2.sussexdirectories.com/rms/rms_photos/sized/06/68/196806-406668-2_120x150.jpg?pu=1436126374'
          name='Chris Desario'
          phoneNumber='201-129-3312'/>
        </div>
    )
  }
}

const styles = {
  container: {
    boxSizing: 'border-box',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap'
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
  TherapistContainer
)
