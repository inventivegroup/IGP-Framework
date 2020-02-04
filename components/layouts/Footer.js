import React from 'react'
import {Row, Col} from 'reactstrap';

export default () =>
<>
  <div className="swoosh_top footer studios_black"></div>
  <footer className="footer">
    <Col lg="3" md="4" sm="12" className="p-3" xs="12">
      <img alt="Inventive Brand" className="footer-logo" src="https://prismic-io.s3.amazonaws.com/inventivestudios%2F78507ee6-8b69-4db2-9d38-772b4a7795a0_inventive-logo.webp"/>
      
      <div>7701 North Lamar Blvd</div>
      <div>Ste 500</div>
      <div>Austin Texas, 78752</div>
      <div>Made with ♥ by Inventive</div>

    </Col>


    <Col lg="3" md="4" sm="12" className="p-3" xs="12">
        <h3>Inventive Studios</h3>
        <div><a href="/contact-us">Contact Us</a></div>
        {/* <div><a href="/refer-a-friend">Refer a Friend</a></div> */}
        {/* <div><a href="/mission">Mission</a></div> */}
        <div><a href="/workspaces">Workspaces</a></div>
        {/* <div><a href="/social-impact">Social Impact</a></div> */}
        {/* <div><a href="/our-team">Our Team</a></div> */}
        <div><a href="/blog">Blog</a></div>
    </Col>

    
    <Col lg="3" md="4" sm="12" className="p-3" xs="12">
        <h3>Discover Inventive</h3>
        {/* <div><a href="/enterprise-consulting">Enterprise Consulting</a></div> */}
        {/* <div><a href="/technology-product">Technology Product</a></div> */}
        {/* <div><a href="/incubator">Incubator</a></div> */}
        <div><a href="https://inventive.io/academy">Coding Academy</a></div>
        {/* <div><a href="/government-consulting">Government Consulting</a></div> */}
        {/* <div><a href="/staffing">Staffing</a></div> */}
        {/* <div><a href="/cares">Inventive Cares</a></div> */}
        {/* <div><a href="/life">Inventive Life</a></div> */}
    </Col>
  </footer>
</>