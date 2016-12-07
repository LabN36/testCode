import React, { Component/*, PropTypes */} from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import loadMainPage from './main'
import jQuery from 'jquery'

import Header from './header'
import Home from './home'
import About from './about'
import Events from './events'
import Photos from './photos'
import Donate from './donate'
import Footer from './footer'

class Landing extends Component {
  componentDidMount () {
    loadMainPage(jQuery)
  }

  render () {
    return (
      <div>
        <Helmet
          title='SocialWorks'
        />
        <Header user = {this.props.user} authed={this.props.loggedIn} />
        <Home />
        <About />
        <Events />
        <Photos />
        <Donate />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.getIn(['user','uid']),
    loggedIn: state.user.getIn(['loggedIn'])
  }
}

export { Landing }
export default connect(mapStateToProps, null)(Landing)
