import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login, resetErrors, getUsername } from '../../actions/index'
import { Link } from 'react-router'
import { firebaseAuth } from '../../config/auth'

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } 
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, untouched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <div className='alert alert-warning'>{error}</div>))}
    </div>
  </div>
)

class SignIn extends Component {
  static contextTypes = {
    // gives us access to this.context.router
    router: PropTypes.object
  }

  state = {
    loading:true,
    submitLoading: false
  }

  componentWillMount (){
    this.props.resetErrors()
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

  handleSubmit (e) {
    this.setState({submitLoading: true})
    this.props.login(e)
  }

  errorMessage () {
    const { pristine, submitting } = this.props
    if (this.props.errorMessage) {
      return (
        <div>
          <div className='alert alert-danger'>{this.props.errorMessage}</div>
          <button className="btn btn-success" type="submit" disabled={submitting}>
            Login
          </button>
        </div>
      )
    } else {
      return (
        <div>
         <button className="btn btn-success" type="submit" disabled={submitting}>
            {this.state.submitLoading ? 'Loading' : 'Login'}
        </button>
        </div>
      )
    }
  }

  render () {
    if (this.state.loading) {
      return <div>Loading</div>
    }
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
     <div>
        <div className='container-fluid signin'>
            <div className='icon-wrap text-center'>
              <Link to='/'><img className='' src="assets/img/icon.png" alt=""/></Link>
            </div>
            <div className="signin-content">
                <h2 className='text-center'>Login</h2>
                <div className='signin-form signin-input'>
                  <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <Field name="email" type="email" component={renderField} label="Email"/>
                    <Field name="password" type="password" component={renderField} label="Password"/>
                      {this.errorMessage()}
                  </form>
                </div>
            </div>
            <div className='signin-footer text-center'>
              Don't have an account? <Link className='signin-link' to='/signup'>Sign Up.</Link>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.user.getIn(['errorMessage'])
  }
}
// because middleware/api.js we need to wrap our form and then pass to connect
const SignInWrapper = reduxForm({
  form: 'SignIn',  // a unique identifier for this form
  validate         // <--- validation function given to redux-form
})(SignIn)

export default connect(mapStateToProps, { login, resetErrors })(SignInWrapper)
