import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

// Sort and display the different slice options
const FormSlices = ( form_type ) => {
  const res = (() => {  
    switch(form_type) {
      case 'Co-Worker Widget': return (
        <div>
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
          frameBorder="0"
          frameAncestors='self'>
          </iframe>
        </div>
      )

      case "Schedule Tour": return (
        <div>
          <script>
            {`
              hbspt.forms.create({
                portalId: "4134086",
                formId: "4c35261a-7ea6-40f2-856b-0c65c3cb4d0e"
              });
            `}
          </script>
        </div>
      )

      case "Contact": return (
        <div>
          <script>
            {`
              hbspt.forms.create({
                portalId: "4134086",
                formId: "70bc7831-afeb-423b-925d-9d088320e6e5"
              });
            `}
          </script>
        </div>
      )

      default: return null;
    }
  })();
  return res;
}

export default ({ slice }) => {
  let { blade_background_color, image_side, cta_button_color, featured_image } = slice.primary;
  return (
      <>
        { image_side === "background"
        ? 
        <>
          <div className={"skew-c " + blade_background_color}></div>
          <div className={"blade"} style={{backgroundImage: `url("${featured_image.url}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
                <h3 className={ "subtitle " + cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
                <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
                <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
                {slice.primary.cta_button !== null ? (<a target="_blank" rel="noopener noreferrer" className={"cta_button " + cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>) : " "}
            </div>
            
            { slice.primary.form_type !== null ? FormSlices(slice.primary.form_type) : " "}
          </div>
          <div className={"skew-cc " + blade_background_color}></div>
        </>
        : " " }

        { image_side === "repeated background"
        ? 
        <>
          <div className={"skew-c " + blade_background_color}></div>
          <div className={"blade"} style={{backgroundImage: `url("${featured_image.url}")`, backgroundRepeat: 'repeat', backgroundSize: '300px auto'}}>
            <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
                <h3 className={ "subtitle " + cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
                <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
                <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
                {slice.primary.cta_button !== null ? (<a target="_blank" rel="noopener noreferrer" className={"cta_button " + cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>) : " "}
            </div>
            
            { slice.primary.form_type !== null ? FormSlices(slice.primary.form_type) : " "}
          </div>
          <div className={"skew-cc " + blade_background_color}></div>
        </>
        : " " }

        { image_side === "parallax"
        ? 
        <>
          <div className={"skew-c bgimage"}></div>
          <div className={"blade"} style={{backgroundImage: `url("${featured_image.url}")`, backgroundAttachment: 'fixed', backgroundSize: "cover"}}>
            <>
              <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
                  <h3 className={ "subtitle " + cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
                  <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
                  <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
                  {slice.primary.cta_button !== null ? (<a target="_blank" rel="noopener noreferrer" className={"cta_button " + cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>) : " "}
              </div>
              
              { slice.primary.form_type !== null ? FormSlices(slice.primary.form_type) : " "}
            </>
          </div>
          {/* <div className={"skew-cc bgimage"}></div> */}
        </>
        : " " }

        { image_side === "left" || image_side === "right" ?
        <>
          <div className={"skew-c " + blade_background_color}></div>
            <div className={"blade " + blade_background_color}>
                { slice.primary.featured_image !== null && image_side === "left" ? <img style={{maxHeight: 600 + "px"}} className="feature_image" src={`${featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> : " " }
                <div className="content_container" style={{textAlign: `${slice.primary.text_alignment}`}}>
                    <h3 className={ "subtitle " + cta_button_color}>{ RichText.render(slice.primary.subtitle, linkResolver, htmlSerializer) }</h3>
                    <h2> { RichText.render(slice.primary.section_title, linkResolver, htmlSerializer) } </h2>
                    <p> { RichText.render(slice.primary.content, linkResolver, htmlSerializer) } </p>
                    {slice.primary.cta_button !== null ? (<a target="_blank" rel="noopener noreferrer" className={"cta_button " + cta_button_color} href={`${slice.primary.cta_button.url}`}>{ RichText.asText(slice.primary.cta_button_text) }</a>) : " "}
                </div>
                
                { slice.primary.form_type !== null ? FormSlices(slice.primary.form_type) : " "}
                { slice.primary.featured_image !== null && image_side === "right" ? <img style={{maxHeight: 600 + "px"}} className="feature_image" src={`${featured_image.url}`} alt={"Something Awesome sorry for not having a better description."}/> : " " }
            </div>
          <div className={"skew-cc " + blade_background_color}></div>
        </> : " " }


      </>
  )
}