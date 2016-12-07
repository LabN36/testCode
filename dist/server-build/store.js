import { createStore, applyMiddleware } from 'redux'
import apiMiddleware from 'middleware/api'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'reducers'

const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true
})

const createStoreWithMiddleware = applyMiddleware(
  // logger,
  reduxThunk,
  apiMiddleware
)(createStore)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}