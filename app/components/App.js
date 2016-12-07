import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { firebaseAuth } from 'config/auth'
import { checkLoggedIn, getUsername } from 'actions/index'

class App extends Component {
  componentDidMount () {
    let checkLoggedIn = this.props.checkLoggedIn
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        getUsername(user).then(data => checkLoggedIn(data.uid))
      } else {
        checkLoggedIn()
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render () {
    return (
      <div>
        <Helmet
          defaultTitle=''
          titleTemplate=''
          meta={[
            {'name': 'description', 'content': 'Empowering youth everywhere'}
          ]}
          htmlAttributes={{'lang': 'en'}}
        />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps, { checkLoggedIn })(App)
