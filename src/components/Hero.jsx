import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className='left-top'>
            <p>Capital Raised</p>
            <h2>$3.5M+</h2>
            <p>Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.</p>
            <span className='rect1'></span>
            <span className='rect2'></span>
        </div>
        <div className='right'>
            <h1>We craft the <br/> future dwellin.</h1>
            <img src="https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='left-bottom'>
            <p>Introducing</p>
            <h3>
                A vision for livable, sustainable & affordable.
            </h3>
            <button>
            Start Exploring
            </button>
            <span className='tri-1'></span>
            <span className='tri-2'></span>
            <span className='tri-3'></span>

        </div>
      
    </div>
  )
}

export default Hero