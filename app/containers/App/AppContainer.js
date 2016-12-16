import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

class AppContainer extends Component {
  render () {
    console.log('this.props.children', this.props.children)

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
)(AppContainer)
