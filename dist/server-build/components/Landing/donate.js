import React from 'react'

const Donate = () => {
  return (
    <section id='donate'>
      <div className='b-t-2' />
      <div className='fadeIn  container'>
        <div className='text-center'>
          <h2 className='donate-header'>Support by Giving</h2>
        </div>
        <div className='row'>
          <div className='donate-left col-sm-12 col-md-4'>
            <div className='donate-content'>
              <h3>Give Back and Open Doors.</h3>
              <p> Mark Zuckerberg invest 1 billion dollars into Kanye West ideas. World, please tweet, FaceTime, Facebook, instagram, whatever you gotta do to get Mark to support me…</p>
              <a href='' className='btn-clear btn-donate'>Donate Now</a>
            </div>
          </div>
          <div className='donate-right col-sm-12 col-md-8'>
            <ul className='donate-slider slider'>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
      </div>
      <div className='b-t-2' />
    </section>
  )
}

export default Donate
