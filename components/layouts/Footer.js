import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCoffee, faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube)

export default () =>
<>
  <div className="swoosh_top footer studios_black"></div>
  <footer className="footer">
    <div className="column">
      <img className="footer-logo" src="https://inventive.io/wp-content/uploads/2018/09/inventive-logo-white-transparent.png"/>
      
      <span>7701 North Lamar Blvd</span>
      <span>Ste 500</span>
      <span>Austin Texas, 78752</span>
      <span>Made with ♥ by Inventive</span>

    </div>


    <div className="column text-section">
        <h3>Inventive Studios</h3>
        <span><a href="/contact-us">Contact Us</a></span>
        <span><a href="#">Refer a Friend</a></span>
        <span><a href="#">Mission</a></span>
        <span><a href="#">Workspaces</a></span>
        <span><a href="#">Social Impact</a></span>
        <span><a href="#">Our Team</a></span>
        <span><a href="/blog">Blog</a></span>
    </div>

    
    <div className="column">
        <h3>Discover Inventive</h3>
        <span><a href="#">Enterprise Consulting</a></span>
        <span><a href="#">Technology Product</a></span>
        <span><a href="#">Incubator</a></span>
        <span><a href="#">Coding Academy</a></span>
        <span><a href="#">Government Consulting</a></span>
        <span><a href="#">Staffing</a></span>
        <span><a href="#">Inventive Cares</a></span>
        <span><a href="#">Inventive Life</a></span>
    </div>
  </footer>
</>