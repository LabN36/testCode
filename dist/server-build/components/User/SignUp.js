import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { hash, signUp, getUsername, resetErrors, checkUserExists } from '../../actions/index'
import { Link } from 'react-router'
import { firebaseAuth } from '../../config/auth'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <div className='alert alert-warning'>{error}</div>))}
    </div>
  </div>
)

const validate = values => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = 'Required'
  }
  if (!values.lastname) {
    errors.lastname = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be at least 6 characters long'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class SignUp extends Component {
  static contextTypes = {
    // gives us access to this.context.router
    router: PropTypes.object
  }

  state = {
    loading:true,
    submitLoading: false
  }

  componentDidMount () {
    let router = this.context.router
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        getUsername(user).then(data => router.push(`/user/${data.uid}`) )
      } else {
        this.setState({loading: false})
      }
    })
  }

  componentWillMount (){
    this.props.resetErrors()
  }

  handleSubmit (e) {
    this.setState({submitLoading:true})
    const signup = this.props.signUp
    let first = e.firstname.replace(/ /g, '')
    let last = e.lastname.replace(/ /g, '')
    let email = e.email
    let user = `${first.toLowerCase()}${last.toLowerCase()}`
    
    checkUserExists(user)
    .then(event => {
      if (event.exists){
        user = `${user}${hash(user,email)}`
        signup(e, first, last, user)
      } else {
        signup(e, first, last, user)
      }
    })
  }

  errorMessage () {
    const { pristine, submitting } = this.props
    if (this.props.errorMessage) {
      return (
        <div>
          <div className='alert alert-danger'>{this.props.errorMessage}</div>
          <button className="btn btn-success" type="submit" disabled={submitting}>
            Sign Up
          </button>
        </div>
      )
    } else {
      return (
        <div>
         <button className="btn btn-success" type="submit" disabled={submitting}>
            {this.state.submitLoading ? 'Loading' : 'Sign Up'}
        </button>
        </div>
      )
    }
  }

  render () {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <div>
        <div className='container-fluid signup'>
            <div className='icon-wrap text-center'>
              <Link to='/'><img className='' src="assets/img/icon.c456bb43.png" alt=""/></Link>
            </div>
            <div className="signup-content">
                <h2 className='text-center'>Register</h2>
                <div className='signin-form signup-input'>
                  <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <div className="signin-namefield">
                      <Field name="firstname" type="text" component={renderField} label="First Name"/>
                      <Field name="lastname" type="text" component={renderField} label="Last Name"/>
                    </div>
                    <Field name="email" type="email" component={renderField} label="Email"/>
                    <Field name="password" type="password" component={renderField} label="New Password"/>
                      {this.errorMessage()}
                  </form>
                </div>
            </div>
            <div className='signin-footer text-center'>
              Already have an account? <Link className='signin-link' to='/signin'>Sign In.</Link>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.getIn(['user','uid']),
    loggedIn: state.user.getIn(['loggedIn']),
    errorMessage: state.user.getIn(['errorMessage'])
  }
}
// because middleware/api.js we need to wrap our form and then pass to connect
const SignUpWrapper = reduxForm({
  form: 'SignUp',  // a unique identifier for this form
  validate         // <--- validation function given to redux-form
})(SignUp)

export default connect(mapStateToProps, { signUp, resetErrors })(SignUpWrapper)
