import Firebase from 'firebase'
import { CALL_API, CHAIN_API } from 'middleware/api'
import { ref, config, firebaseAuth } from '../config/auth'
import stringHash from 'string-hash'
import A from './constants'

export function resetErrors (){
  return dispatch => {
    dispatch({
      type: A.RESET_ERRORS
    })
  }
}

export function checkLoggedIn (user) {
  return dispatch => {
    if (!!user) {
      dispatch({
        payload: user,
        type: A.LOGGED_IN,
      })
    } else {
      dispatch({
        type: A.NO_USER
      })
    }
  }
}

export function checkUserExists (user) {
  return ref
    .child('users')
    .child(`${user}`)
    .once('value')
    .then(snapshot => {
      return Promise.resolve({
        exists: snapshot.exists()
      })
    })
}

export function getUserProfile (user){
  return dispatch => {
    ref
      .child('users')
      .child(`${user}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()){
          dispatch({
            type: A.USER_DOES_EXIST,
            payload:snapshot.val().info
          })
        } else if (!snapshot.exists()){
          dispatch({
            type: A.USER_DOESNT_EXIST
          })
        }
      })
  }
}

export function getUsername (user) {
  return ref
    .child('uid')
    .child(user.uid)
    .once('value')
    .then(snapshot => {
      return snapshot.val()
    })
}



export function hash (username, email) {
  return stringHash(`${username}${email}`).toString().slice(0,4)
}

export function saveUser (data, user) {
  ref.child(`uid/${user.uid}`)
    .set({
      uid: data.username
    })

  return ref.child(`users/${data.username}/info`)
    .set({
      email: user.email,
      first: data.first,
      last: data.last,
      admin: false,
      uid: user.uid
    })
    .then(() => user)
}

export function signUp (e, first, last, username) {
  return dispatch => {
    let user = firebaseAuth()
      .createUserWithEmailAndPassword(e.email, e.password)
      .then(saveUser.bind(null, {first, last, username}))
      .catch(error => {
        dispatch({
          type:A.USER_EXISTS,
          payload: error.message
        })
      })
    dispatch({
      type:A.USER_EXISTS,
      payload: ''
    })
    return user
  }
}


export function logout () {
  return dispatch => {
    firebaseAuth().signOut()
    dispatch({
      type:A.LOGOUT_USER
    })
  }
}

export function login (e) {
  return dispatch => {
    return firebaseAuth().signInWithEmailAndPassword(e.email, e.password)
    .catch(error => {
      dispatch({
        type:A.LOGIN_ERROR,
        payload: error.code
      })
    })
  }
}


/* ---------------- NOT-USED JUST AN EXAMPLE ------------ */
// export function loadQuestions () {
//   return {
//     [CALL_API]: {
//       method: 'get',
//       path: '/api/questions',
//       successType: LOADED_QUESTIONS
//     }
//   }
// }

