import React from 'react'

const Home = () => {
  return (
    <section id='home' className='home hero'>
      <ul className='home-slider slider'>
        <li />
        <li />
        <li />
        <li />
      </ul>
      <div className='home-container'>
        <div className='home-container-content'>
          <h2 className='home-headline'>
            <span>to inspire creativity,</span><br />
            <span>to build dreams,</span><br />
            <span>to let you,</span><br />
            <span>be you.</span><br />
          </h2>
        </div>
      </div>
      <div className='row hero-footer'>
        <div className='col-sm-12'>
          <a href='#about'>
            <span className='scroll'>find out more</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
