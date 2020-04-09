import React from 'react'
import {Col} from 'reactstrap';

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
        <div><a target="_blank" rel="noopener noreferrer" href="/contact-us">Contact Us</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href="/workspaces">Workspaces</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href="/blog">Blog</a></div>
    </Col>
    
    <Col lg="3" md="4" sm="12" className="p-3" xs="12">
        <h3>Discover Inventive</h3>
        <div><a target="_blank" rel="noopener noreferrer" href="https://inventive.io/works/">Enterprise Consulting</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href="https://nven.tv/about-ventures">Technology Product</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href="https://inventive.io/academy">Coding Academy</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href=" https://inventive.io/patriots/">Government Consulting</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/pg/InventiveGroup/posts/?ref=page_internal">Inventive Life</a></div>
    </Col>
  </footer>
</>