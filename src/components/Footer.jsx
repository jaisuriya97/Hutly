import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="top-container">
            <div className="footer-desc">
                <h1>Start Your <br></br> Project Now!</h1>
                <p>Made for you convenience for a <br/> more beautiful future for you and <br/>your family</p>
            </div>
            <button className="contact-us">Contact Us</button>
        </div>
        <div className="bottom-contauner">
            <div className="logo">
                <h4>Hutly</h4>
            </div>
            <div className="links">
                <ul>
                    <li>About us</li>
                    <li>Management</li>
                    <li>Project</li>
                    <li>FAQ's</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer