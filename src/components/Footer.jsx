import React from 'react'

export const Footer = () => {
  return (
    <section className="footer-container">
      <div className='footer-container__copyright'>
        <small>
          Made with ♥︎ by Juanequex <br/> All Rights Reserved &#169; {(new Date().getFullYear())}
        </small>
      </div>
    </section>
  )
}

export default Footer
