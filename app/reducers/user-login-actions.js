import A from '../actions/constants'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({
  user: {},
  currentUserProfile: {
    exists:false
  },
  loggedIn: false,
  userDoesntExist: false,
  errorMessage: '',
})

function userReducer (state = defaultState, action) {
  switch (action.type) {
    case A.RESET_ERRORS:
      return state.merge({errorMessage:''})
    case A.LOGGED_IN:
      const user = Immutable.Map({ uid: action.payload })
      return state.mergeDeep({user, loggedIn:true})
    case A.NO_USER:
      return state.merge({loggedIn: false})
    case A.USER_EXISTS:
      return state.merge({errorMessage: action.payload})
    case A.USER_DOES_EXIST:
      const currentUserProfile = Immutable.Map({exists:true, user: action.payload })
      return state.mergeDeep({currentUserProfile})
    case A.USER_DOESNT_EXIST:
      return state.merge({userDoesntExist: true})
    case A.LOGOUT_USER:
      state.set({user:{}, userDoesntExist: false, currentUserProfile:{}, loggedIn:false, errorMessage:''})
    case A.LOGIN_ERROR:
      if (action.payload === 'auth/user-not-found'){
        return state.merge({errorMessage: 'User doesn\'t exist!'})
      } else if (action.payload === 'auth/wrong-password') {
        return state.merge({errorMessage: 'There was an error logging in. Please try again.'})
      }
    default:
      return state
  }
}

export default userReducer
