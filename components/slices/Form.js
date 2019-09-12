import React from 'react';
// import { RichText } from 'prismic-reactjs';
// import { linkResolver } from '../../utils/linkResolver';
// import htmlSerializer from '../../utils/htmlSerializer';





// Sort and display the different slice options
const Forms = ({ formName }) => {
  switch(formName) {
    case 'Co-Worker Widget': return (
      <div className="homepage-form-wrapper">
        { 
        <iframe title="Schedule a Tour" 
          style={{
            overflowY:"auto",
            overflowX: "hidden", 
            borderRadius: 6 + "px",
            border: 3 + "px solid #00d191", 
            background: "url(https://coworker.imgix.net/add-images/cw_img2018.png) center bottom 3px no-repeat", 
            linearGradient: "(bottom, #00d191 10px, #00d191 20px, #ffffff 21px, #ffffff 10rem, #ffffff 100%)", 
            padding: "0 0 21px 0px"
          }} 
          src="https://www.coworker.com/widget-review/4/11399" 
          id="widget01" 
          width="300" 
          height="414" 
          frameborder="0">
        </iframe> }
      </div>
    )

    default: return null;
  }
}

export default class Form extends React.Component {
  render() {
    return <Forms formName={this.props.formType}></Forms>
  }
}

