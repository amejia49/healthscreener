import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Home } from '~/components'

class HomeContainer extends Component {
  render () {
    return (
      <Home />
    )
  }
}

export default connect(
)(HomeContainer)
