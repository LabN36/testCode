import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkUserExists, getUsername, getUserProfile } from '../../actions/index'
import { firebaseAuth } from '../../config/auth'
import { Link } from 'react-router'
import NotFound from '../NotFound/index'
import Helmet from 'react-helmet'

class UserProfile extends Component {
  state = {
    authed: false
  }

  loadUser (userID, getUserProfile) {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        getUsername(user).then(data => {
          if (userID === data.uid){
            getUserProfile(data.uid)
          } else {
            getUserProfile(userID)
          }
        })
      } else {
        getUserProfile(userID)
      }
    })
  }
  componentWillMount () {
    let userID = this.props.params.id
    const getUserProfile = this.props.getUserProfile
    this.loadUser(userID, getUserProfile)
  }

  componentWillReceiveProps(){
    let userID = this.props.params.id
    const getUserProfile = this.props.getUserProfile
    this.loadUser(userID, getUserProfile)
  }
  
  render () {
    let user = this.props.user
    if (this.props.userProfileExists) {
      return (
        <div>
          {user.first}<br />
          {user.last}<br />
          {user.admin.toString()}<br />
          {user.email}
          <Link to='/user/fahdsheikh' style={{color:'black'}} > Click here for link</Link>
        </div>
      )
    } else if (!this.props.userDoesntExist){
      return <div>Loading</div>
    } else if (this.props.userDoesntExist){
      return <NotFound />
    }

    return <div>{this.props.params.id}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    userDoesntExist: state.user.getIn(['userDoesntExist']),
    userProfileExists: state.user.getIn(['currentUserProfile','exists']),
    user: state.user.getIn(['currentUserProfile','user'])
  }
}

export default connect(mapStateToProps, { getUserProfile })(UserProfile)
