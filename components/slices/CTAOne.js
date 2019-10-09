import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import { Button } from 'reactstrap';


// Sort and display the different slice options

const getGradient = (color) => {
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

            case "none" : 
                return '100%, white';

            break;
        }
    })();

    return res;
}


export default ({ slice }) => {
    let { section_subtitle, section_title, content, cta,  cta_text, text_alignment, primary_blade_color, secondary_blade_color, gradient_angle, divider_top, divider_bottom, divider_top_color, divider_bottom_color, image, layout } = slice.primary;
  return (
    <>
        { slice.primary.divider_top === "diagonal" ? <div className={"diagonal_top " + slice.primary.divider_top_color}></div> : " "}
        { slice.primary.divider_top === "swoosh" ? <div className={"swoosh_top " + slice.primary.divider_top_color}></div> : " "}
        <div className="cta_one" style={{background: 'linear-gradient(' + (gradient_angle > 360 ? 0 : gradient_angle) + 'deg ,' + getGradient(primary_blade_color) + "," + getGradient(secondary_blade_color) + ')'}}>
            <div className={"d-flex blade "}>  {/* figure out way to do dual color linear gradient on container */}

                {layout === "image left"
                ? <>
                    <div className="img_cont">
                        <div className="image" style={{backgroundImage: `url(${image.url})`}}></div>
                    </div>

                    <div className={"main " + text_alignment}>
                        { section_subtitle !== null ? <h3>{section_subtitle[0].text}</h3> : " " }
                        <h2>{section_title[0].text}</h2>
                        {RichText.render(content, linkResolver, htmlSerializer)}
                        { cta !== null ? <a href={'/' + cta._meta.uid} className="cta_button orange">{RichText.asText(cta_text, linkResolver, htmlSerializer)}</a> : " " }
                    </div> 
                </>

                : <>
                    <div className={"main " + text_alignment}>
                        { section_subtitle !== null ? <h3>{section_subtitle[0].text}</h3> : " " }
                        <h2>{section_title[0].text}</h2>
                        {RichText.render(content, linkResolver, htmlSerializer)}
                        { cta !== null ? <a href={'/' + cta._meta.uid} className="cta_button orange">{RichText.asText(cta_text, linkResolver, htmlSerializer)}</a> : " " }
                    </div> 

                    <div className="img_cont">
                        <div className="image" style={{backgroundImage: `url(${image.url})`}}></div>
                    </div>
                </>
                }
            </div>
        </div>
        { slice.primary.divider_bottom === "diagonal" ? <div className={"diagonal_bottom " + slice.primary.divider_bottom_color}></div> : " "}
        { slice.primary.divider_bottom === "swoosh" ? <div className={"swoosh_bottom " + slice.primary.divider_bottom_color}></div> : " "}
    </>
  )
}