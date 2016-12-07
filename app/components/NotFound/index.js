import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Header from '../Landing/header'
import { getUsername, getUserProfile } from '../../actions/index'
import { firebaseAuth } from '../../config/auth'

class NotFound extends Component {
  state = {
    error: true
  }
  render () {
    return (
    <div>
      <Header error={this.state.error} user={this.props.user} authed={this.props.loggedIn} />
      <section id='home' className='home hero'>
        <ul className='home-slider slider'>
          <li />
          <li />
          <li />
          <li />
        </ul>
        <div className='home-container'>
          <div className='home-container-content'>
            <h2 className='home-headline'>
              <span> Error: Page not found!</span><br />
            </h2>
          </div>
        </div>
      </section>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.getIn(['user','uid']),
    loggedIn: state.user.getIn(['loggedIn']),
  }
}

export default connect(mapStateToProps, { getUserProfile })(NotFound)
