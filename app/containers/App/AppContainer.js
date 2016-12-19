import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

class AppContainer extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
)(AppContainer)
