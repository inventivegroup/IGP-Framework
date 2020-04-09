import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import BladeContainer from '../general/BladeContainer';

const getColor = (color) => {
    const res = (() => {
        switch(color){
            case "smoke":
                return '#E0E6ED';
            
            case "studios":
                return '#7E5BEF';
  
            case "studios light":
                return '#A389F4';
  
            case "studios dark":
                return '#592DEA'
  
            case "studios black":
                return '#14001D'
  
  
            case "patriots":
                return '#0000FF'
  
            case "patriots light":
                return '#0066ff'
  
            case "patriots dark":
                return '#0000b2'
  
            case "patriots black":
                return '#000033'
  
  
            case "inventive":
                return '#1FB6FF'
  
            case "inventive light":
                return '#85D7FF'
  
            case "inventive dark":
                return '#009EEB'
  
            case "inventive black":
                return '#00151A'
  
  
            case "cares":
                return '#13CE66'
  
            case "cares light":
                return '#29EB7F'
  
            case "cares dark":
                return '#0F9F4F'
  
            case "cares black":
                return '#002A02'
  
            case "staffing":
                return '#FFC82C'
  
            case "staffing light":
                return '#FFD55F'
  
            case "staffing dark":
                return '#F8B700'
  
            case "staffing black":
                return '#1A1A00'
  
            case "academy":
                return '#FE8A00'
  
            case "academy light":
                return '#FFA827'
  
            case "academy dark":
                return '#DB7000'
  
            case "academy black":
                return '#331C00'
  
  
            case "ventures":
                return '#FE0500'
  
            case "ventures light":
                return '#FF6E6B'
  
            case "ventures dark":
                return '#D40000'
  
            case "ventures black":
                return '#330100'
  
            case "white":
              return '#ffffff'
  
            case "none" : 
                return '100%, white'

            default:
              return 'white';
        }
    })();
  
    return res;
}

export default ({ slice, color }) => {
    let { section_subtitle, section_title, content, text_alignment, text_background_color, font_shade, primary_cta_btn, primary_cta_btn_text, secondary_cta_btn, secondary_cta_btn_text, divider_top, divider_bottom, layout, background_image, video, height } = slice.primary;
    layout = layout.slice(8)
    return (
        <BladeContainer topDivider={divider_top} bottomDivider={divider_bottom} backgroundImage={background_image} video={video}>
            <div className={"media d-flex align-items-center " + font_shade} style={{minHeight: height === 'large' ? '550px' : false}}>
                <div className="container">
                    <div className={"row justify-content-center justify-content-md-" + (layout === 'right' ? 'end' : (layout === 'left' ? 'start' : 'center'))}>
                        <div className={"media-text-box text-center text-md-" + text_alignment} style={{backgroundColor: getColor(text_background_color) + 'E6', padding: '30px', borderRadius: '15px', zIndex: '2', wordBreak: 'break-word'}}>
                            {section_subtitle && (section_subtitle[0].text !== '') ? <h3>{section_subtitle[0].text}</h3> : false}
                            {section_title && (section_title[0].text !== '') ? <h2>{section_title[0].text}</h2> : false}
                            {content && (content[0].text !== '')? <p style={{marginBottom: '0px', paddingBottom: '0px'}}>{RichText.render(content, linkResolver, htmlSerializer)}</p> : false}
                            {!!primary_cta_btn || !!secondary_cta_btn ?
                                <div className={"cta_btn_cont mx-0 row justify-content-center justify-content-md-" + (text_alignment === 'right' ? 'end' : (text_alignment === 'left' ? 'start' : 'center'))}>
                                    {!!primary_cta_btn ? <a target="_blank" rel="noopener noreferrer" href={primary_cta_btn.url} className="my-2 my-lg-0 secondary_cta_btn">{primary_cta_btn_text ? RichText.asText(primary_cta_btn_text, linkResolver, htmlSerializer) : ''}</a> : false}
                                    {!!secondary_cta_btn ? <a target="_blank" rel="noopener noreferrer" href={secondary_cta_btn.url} className="my-2 my-lg-0 primary_cta_btn">{!!secondary_cta_btn_text ? RichText.asText(secondary_cta_btn_text, linkResolver, htmlSerializer) : ''}</a> : false}
                                </div>
                                : false}
                        </div>
                    </div>
                </div>
            </div>
        </BladeContainer>
    )
}