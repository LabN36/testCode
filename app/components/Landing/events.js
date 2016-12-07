import React, { Component } from 'react'

class Events extends Component {
  render () {
    return (
      <section id='events' className='events'>
        <div className='container events-container'>
          <div className='text-center'>
            <h2 className='events-header'>Upcoming Events</h2>
            <p>SocialWorks hosted events and upcoming community activities.
                <br /> Check out what we're up to below, and don't forget to register to <a className='volunteer-link' href='#volunteer'>volunteer</a> if you're interested!
            </p>
          </div>
          <div className='row'>
            <div className='card col-xs-12 col-sm-4'>
              <a href='#events' className='sw-event' />
              <div className='event-image'>
                <img src='/assets/img/vote.jpg' />
              </div>
              <div className='event-description'>
                <div>
                  <span className='event-title'>Get Out The Vote!</span>
                  <br />
                  <span className='event-date'>November 9th, 2016</span>
                </div>
                <p className='event-text'>
                    Join us as we make the rounds in Chicago and encourage citizens to go out, vote, and express their opinions!
                </p>
                <hr />
                <a className='btn-volunteer btn-clear' href=''>Volunteer</a>
              </div>
            </div>
            <div className='card col-xs-12 col-sm-4'>
              <a href='#events' className='sw-event' />
              <div className='event-image'>
                <img src='/assets/img/iz.jpg' />
              </div>
              <div className='event-description'>
                <div>
                  <span className='event-title'>Interactive Zone @ Loretta's Lounge</span>
                  <br />
                  <span className='event-date'>November 16th, 2016</span>
                </div>
                <p className='event-text'>
                    A night full of festivities, spoken word, and live arts performances (along with some special guests!)
                </p>
                <hr />
                <a className='btn-register btn-clear' href=''>Register</a>
              </div>
            </div>
            <div className='card col-xs-12 col-sm-4'>
              <a href='#events' className='sw-event' />
              <div className='event-image'>
                <img src='/assets/img/open_mike1.jpg' />
              </div>
              <div className='event-description'>
                <div>
                  <span className='event-title'>Open Mike</span>
                  <br />
                  <span className='event-date'>January 1st, 2017</span>
                </div>
                <p className='event-text'>
                    Got a song you want the world to hear? A story that needs to be told? Come participate at our Open Mike and let your voice be heard!
                </p>
                <hr />
                <a className='btn-register btn-clear' href=''>Register</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Events
