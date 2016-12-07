import React from 'react'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='b-t-1' />
      <div className='container about-container'>
        <div className='fadeIn'>
          <div id='about-hero'>
            <h1 className='about-description'>Empowering <span>youth</span> through engagement.</h1>
            <p className='about-sub'>We serve as a hub for youth advocacy across the city of Chicago through our initiatives in the arts, education, and civic engagement.</p>
            <p className='about-sub'>With successful initiatives including <strong>OpenMike</strong>, <strong>Holiday Call of Action</strong>, and our summer children's program, we're pushing the boundaries to provide others opportunities - and we're only going to continue to grow.</p>
            <div className='about-buttons'>
              <a href='#events' className='events-btn btn-clear'>Events</a>
              <a href='#photos' className='photos-btn btn-clear'>Photos</a>
              <a href='#volunteer' className='volunteer-btn btn-clear'>Volunteer</a>
            </div>
          </div>
          <div id='about-video'>
            <div className='video-thumbnail'>
              <video className='video-thumb' autoPlay loop>
                <source src='/assets/img/video_thumbnail.92fd882c.mp4' type='video/mp4' />
              </video>
              <svg width='40px' height='40px' viewBox='0 0 40 40' version='1.1' className='icon-videoplay'>
                <defs>
                  <path id='path-1' d='M16.6,26.65 L26.8,19 L16.6,11.35 L16.6,26.65 L16.6,26.65 Z M20,2 C10.65,2 3,9.65 3,19 C3,28.35 10.65,36 20,36 C29.35,36 37,28.35 37,19 C37,9.65 29.35,2 20,2 L20,2 Z M20,32.6 C12.52,32.6 6.4,26.48 6.4,19 C6.4,11.52 12.52,5.4 20,5.4 C27.48,5.4 33.6,11.52 33.6,19 C33.6,26.48 27.48,32.6 20,32.6 L20,32.6 Z' />
                  <filter id='filter-2' x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox'>
                    <feOffset dx='0' dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
                    <feGaussianBlur stdDeviation='1.5' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
                    <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0' type='matrix' in='shadowBlurOuter1' />
                  </filter>
                </defs>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='icon-play'>
                    <use fill='black' fillOpacity='1' filter='url(#filter-2)' xlinkHref='#path-1' />
                    <use fill='#FFFFFF' fillRule='evenodd' xlinkHref='#path-1' />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id='about-video-player' style={{display: 'none'}}>
        <button type='button' aria-hidden='true' className='close'>×</button>
      </div>
      <div className='b-t-2' />
    </section>
  )
}

export default About
