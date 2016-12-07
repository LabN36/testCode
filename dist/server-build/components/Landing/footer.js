import React from 'react'

const Footer = () => {
  return (
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

  )
}

export default Footer
