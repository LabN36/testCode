import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import UserReducer from 'reducers/user-login-actions'

const rootReducer = combineReducers({
  form: FormReducer,
  user: UserReducer
})

export default rootReducer
