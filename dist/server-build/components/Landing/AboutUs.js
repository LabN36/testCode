import React from 'react'
import { Link } from 'react-router'
import { Navbar, DropdownButton, ButtonToolbar } from 'react-bootstrap/lib'

export default class AboutUs extends React.Component {
    constructor(props) {
        super(props)
    }

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

    render() {
        return (
            <div>
                <header className="AboutHeader">
                    <Navbar className='navbar navbar-default' inverse collapseOnSelect>
                      <Navbar.Header>
                        <Navbar.Toggle>
                          <span className='icon-bar' />
                        </Navbar.Toggle>
                        <div className='navbar-brand'>
                          <Link to='/'>
                            <img className='img-responsive' src='/assets/img/icon.c456bb43.png' />
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
                </header>
                <div className="banner">
                    <img src="assets/img/back.jpg"/>
                    <div className="buildDreams">
                        <label className="bd">Building Dreams</label>
                    </div>
                </div>
                <div className="history">
                    <h2>Founders</h2>
                    <div className="foundersInfo">
                        <img src="assets/img/foundersImage.6ac74d28.jpg" alt=""/>
                        <p className="foundersHistory">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus placeat sint suscipit deleniti culpa consequuntur veritatis! Esse facilis obcaecati quibusdam tempore beatae eos vitae porro, asperiores, ipsa, excepturi sunt quos.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="motivation-container">
                    <div className="motivation">
                        <h2>Our Motivation</h2>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus placeat sint suscipit deleniti culpa consequuntur veritatis! Esse facilis obcaecati quibusdam tempore beatae eos vitae porro, asperiores, ipsa, excepturi sunt quos.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="cases">
                        <div className="case">
                            <h3>The title of the post</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="case">
                            <h3>The title of the post</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="cases">
                        <div className="case">
                            <h3>The title of the post</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="case">
                            <h3>The title of the post</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="imagesContainer">
                    <h2>Things we have done</h2>
                    <div className="images">
                        <figure className="image">
                            <img src="assets/img/chance.73d30115.jpg" alt="" />
                        </figure>
                        <figure className="image">
                            <img src="assets/img/dreams.c616dce6.jpg" alt="" />
                        </figure>
                        <figure className="image">
                            <img src="assets/img/iz.911f5758.jpg" alt="" />
                        </figure>
                        <figure className="image">
                            <img src="assets/img/p-t-1.bfd2a77d.jpg" alt="" />
                        </figure>
                        <figure className="image">
                            <img src="assets/img/p-t-4.d7dd1b17.jpg" alt="" />
                        </figure>
                        <figure className="image">
                            <img src="assets/img/p-t-7.be52b1e2.jpg" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="contact">
                    <h2>Contact Form</h2>
                    <div className="data">
                        <div className="address">
                            <label className="icon-location"><p>Adress: </p></label>
                            <span>10 Social Works Lane Chicago, iL</span>
                        </div>
                        <div className="phone">
                            <label className="icon-phone"><p>Phone: </p></label>
                            <span>1-800 Social Works</span>
                        </div>
                        <div className="email">
                            <label className="icon-pencil"><p>Email: </p></label>
                            <span>socialworks@socialworks.com</span>
                        </div>
                        <div className="hours">
                            <label className="icon-clock"><p>Adress: </p></label>
                            <span>
                                Monday - Thursday: 10am - 6pm<br/>
                                Friday: 7am - 10pm<br/>
                                Saturday - Sunday: 8am - 2pm<br/>
                            </span>
                        </div>
                    </div>
                    <div className="form">
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your Email" />
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Message" rows="8" cols="46"></textarea>
                        </form>
                        <button className="sendButton">SEND MESSAGE</button>
                    </div>
                </div>
                <footer id='footer' className='footer-container container-brand-dark'>
                  <div className='container'>
                    <div className='row row-condensed'>
                      <div className='hide-sm col-sm-12'>
                        <div className='footer-icon-list-sm'>
                          <ul>
                            <li>
                              <a href='#about' className='link'>About</a>
                            </li>
                            <li>
                              <a href='#volunteer' className='link'>Volunteer</a>
                            </li>
                            <li>
                              <a href='#events' className='link'>Events</a>
                            </li>
                            <li>
                              <a href='#donate' className='link'>Donate</a>
                            </li>
                            <li>
                              <a href='#store' className='link'>Store</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='f-header col-sm-12 col-md-4 col-md-offset-1'>
                        <h5 className='f-desc h5'>Made with <i className='fa fa-heart' /></h5>
                        <br />
                        <div>
                          <div className='join-us'>Join us at:</div>
                          <div className='footer-icon-list'>
                            <ul>
                              <li>
                                <a href=''><i className='footer-icon fa fa-facebook' /></a>
                              </li>
                              <li className=''>
                                <a href=''><i className='footer-icon fa fa-instagram' /></a>
                              </li>
                              <li className=''>
                                <a href=''><i className='footer-icon fa fa-twitter' /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='f-info col-sm-12 col-md-2 col-md-offset-1'>
                        <h5 className='h5'>SocialWorks</h5>
                        <ul className='footer-list'>
                          <li>
                            <a href='#about' className='link'>About</a>
                          </li>
                          <li>
                            <a href='#volunteer' className='link'>Volunteer</a>
                          </li>
                          <li>
                            <a href='#events' className='link'>Events</a>
                          </li>
                          <li>
                            <a href='#donate' className='link'>Donate</a>
                          </li>
                          <li>
                            <a href='#store' className='link'>Store</a>
                          </li>
                        </ul>
                      </div>
                      <div className='f-info col-sm-12 col-md-2 col-md-offset-2'>
                        <a className='link' href='#home'>
                          <h5 className='h5'>Back to Top <i className='fa fa-angle-up' /></h5>
                        </a>
                      </div>
                    </div>
                  </div>
                  <img className='footer-image' src='/assets/img/footer-hands.cbd2e6de.png' />
                </footer>
            </div>
        )
    }
}
