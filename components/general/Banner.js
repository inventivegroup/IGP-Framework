import React from 'react';
import { RichText } from 'prismic-reactjs';
  
export default class Banner extends React.Component{

    getButton = (button, buttonText) => {
        let buttonType = button.__typename;
    
        const res = (() => {
            switch(buttonType){
                case "PRISMIC_Post" :
                    return ( <span className="cta_btn_cont"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn banner_button" href={"/blog/" + button._meta.uid}>{RichText.asText(buttonText)}</a> </span> )
                
                case "PRISMIC_Page" :
                    return ( <span className="cta_btn_cont"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn banner_button" href={"/" + button._meta.uid}>{RichText.asText(buttonText)}</a> </span> )
                
                case "PRISMIC__FileLink" :
                    return ( <span className="cta_btn_cont"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn banner_button" href={button.url}>{RichText.asText(buttonText)}</a> </span> )
                
                case "PRISMIC__ExternalLink" :
                    return ( <span className="cta_btn_cont"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn banner_button" href={button.url}>{RichText.asText(buttonText)}</a> </span> )
      
                default : 
                    return false;
            }
        })();
      
        return res;
    }

    render(){
        let { featured_image, short_description, banner_cta_button, custom_cta_button_text } = this.props.data;

        return(
            <div className="banner-container">
                <div className="banner">
                    { !!featured_image && !!featured_image.url ? <img alt="Banner Add" src={featured_image.url} /> : false } 
                    { !!short_description ? <span>{RichText.asText(short_description)}</span> : false }
                    { !!banner_cta_button && custom_cta_button_text ? this.getButton(banner_cta_button, custom_cta_button_text) : false }
                </div>
                <hr/>
            </div>
        )
    }
}