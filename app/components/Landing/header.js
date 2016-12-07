import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, DropdownButton, ButtonToolbar } from 'react-bootstrap/lib'
import { Link } from 'react-router'
import { logout } from '../../actions/index'

class Header extends Component {

  renderNav (arg) {
    if (arg.error){
      return []
    }
    if (arg.authed) {
      return [
        <li key='profile' className='nav-link login'><Link to={`/user/${arg.user}`} >My Profile</Link></li>,
        <li key='signout' onClick={this.props.logout} ><Link to='/'>Sign Out</Link></li>
      ]
    } else {
      return [
        <li key='signin' ><Link to='/signin'>Sign In</Link></li>,
        <li key='signup' className='login'><Link to='/signup'>Sign Up</Link></li>
      ]
    }
  }

  render () {    
    return (
      <div>
        <Navbar className='navbar navbar-default' inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle>
              <span className='icon-bar' />
            </Navbar.Toggle>
            <div className='navbar-brand'>
              <Link to='/'>
                <img className='img-responsive' src='/assets/img/icon.png' />
              </Link>
            </div>
          </Navbar.Header>
          <Navbar.Collapse style={{height: '1px'}}>
            <ul className='nav navbar-nav navbar-right'>
              <li ><Link to='/'>Home</Link></li>
              <ButtonToolbar className='nav-toolbar'>
                <DropdownButton className='nav-dropdown nav-desktop' title="LINKS" id="dropdown-size-medium">
                    <li className='nav-dropdown-link'><Link  to='/'>Events</Link></li>
                    <li className='nav-dropdown-link'><Link  to='/'>Volunteer</Link></li>
                    <li className='nav-dropdown-link'><Link  to='/'>Donate</Link></li>
                    <li className='nav-dropdown-link'><Link  to='/'>Store</Link></li>
                    <li className='nav-dropdown-link'><Link  to='/aboutus'>About Us</Link></li>
                </DropdownButton>
              </ButtonToolbar>
              <li className='nav-mobile' ><Link to='/'>Events</Link></li>
              <li ><Link to='/'>Donate</Link></li>
              <li className='nav-mobile' ><Link to='/'>Store</Link></li>
              <li className='nav-mobile' ><Link to='/'>About Us</Link></li>
              {this.renderNav(this.props)}
              <li className='nav-mobile' >
                 <a href='' target='_top'> <i className='fa-mob fa fa-twitter' /></a>
                 <a href='' target='_top'> <i className='fa-mob fa fa-facebook' /></a>
                 <a href='' target='_top'> <i className='fa-mob fa fa-instagram' /></a>
              </li>
              <li className='nav-desktop' ><a href='' target='_top'><i className='fa fa-twitter' /></a></li>
              <li className='nav-desktop' ><a href='' target='_top'><i className='fa fa-facebook' /></a></li>
              <li className='nav-desktop' >
              <a href='' target='_top'>
                  <i className='fa fa-instagram' />
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default connect(null, { logout })(Header)
