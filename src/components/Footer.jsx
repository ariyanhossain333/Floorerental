import React from 'react'

const Footer = () => {
    return (
      <div>
          <div className='footer-container'>
            <h3 className="name">Binhoff.co</h3>
            <div className="lists">
                <ul className='first-list'>
                    <li>Product</li>
                    <li>Install</li>
                    <li>Quickstart</li>
                </ul>
                <ul className='second-list'>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>

          <div className="icons">
          <i class="fa-brands fa-twitter"></i> &nbsp;  &nbsp; 
            <i class="fa-brands fa-facebook"></i> &nbsp;  &nbsp; 
            <i class="fa-brands fa-linkedin"></i>
          </div>


        </div>

        <p className="copyright">
            copyright @Binhoff.co all right reserved
        </p>
      </div>
    )
}

export default Footer
