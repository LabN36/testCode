import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from 'components/App'
import Landing from 'components/Landing/index'
import SignIn from 'components/User/SignIn'
import SignUp from 'components/User/SignUp'
import UserProfile from 'components/User/UserProfile'
import NotFound from 'components/NotFound/index'
import AboutUs from 'components/Landing/AboutUs'

export default function (history) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Landing} />
        <Route path='signup' component={SignUp} />
        <Route path='signin' component={SignIn} />
        <Route path='/user/:id' component={UserProfile} />
        <Route path='aboutus' component={AboutUs} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  )
}
