import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCoffee, faTwitter, faFacebook, faLinkedin, faInstagram, faYoutube)

export default () =>
  <footer className="footer">
    <div className="column text-section">
        <h2>Who We Are</h2>
        <p>We are a full service consulting and training company specializing in: custom application development, software and team auditing, legacy and cloud migrations, IT Strategy, web and mobile development, continuous integration/continuous delivery, corporate training and full stack development bootcamps for people who want to learn to code and become software engineers.</p>
        <p>Contact an Inventive expert today to see how you can <a href="https://inventivedev.wpengine.com/get-started">get started</a></p>
    </div>
    <div className="column">
        <h2>Get In Touch</h2>
        <a href="mailto:hello@inventivedev.wpengine.com">hello@inventivedev.wpengine.com</a>
        <span>☎️ 866.500.2706</span>
        <span>🏢 7701 N Lamar Blvd</span>
        <span>Suite 500</span>
        <span>Austin, Texas 78752</span>
    </div>

    <div className="logo-section">
      <img className="footer-logo" src="https://inventivedev.wpengine.com/wp-content/uploads/2017/04/usveteranlogo-e1492031560921.png"/>
      
      
      <div className="social">
          <a className="icon" href="http://facebook.com/InventiveGroup"><FontAwesomeIcon icon={faFacebook} size="lg" color="white" /></a>
          <a className="icon" href="http://twitter.com/inventivegroup"><FontAwesomeIcon icon={faTwitter} size="lg" color="white" /></a>
          <a className="icon" href="https://www.linkedin.com/company/15262598"><FontAwesomeIcon icon={faLinkedin} size="lg" color="white" /></a>
          <a className="icon" href="http://www.instagram.com/inventivegroupinc"><FontAwesomeIcon icon={faInstagram} size="lg" color="white" /></a>
          <a className="icon" href="https://www.youtube.com/channel/UCu3d0iWDb8p3QEFgBmmqsNg"><FontAwesomeIcon icon={faYoutube} size="lg" color="white" /></a>
      </div>
      <p>Made with ♥ by Inventive Group in Austin, TX</p>

    </div>
    
  </footer>
