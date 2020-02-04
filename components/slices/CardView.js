import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import htmlSerializer from '../../utils/htmlSerializer';

import { Divider } from './index';


const getGradient = (color) => {
    const res = (() => {
        switch(color){
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


            case "smoke" : 
                return '#E0E6ED';

            case "none" : 
                return '100%, white';

            default : 
                return '100%, white';

            break;
        }
    })();

    return res;
}

export default ({ slice }) =>
<>
    <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

    <div className={"cardView"} style={{background: 'linear-gradient(' + ((slice.primary.slice_gradient_angle !== null && slice.primary.slice_gradient_angle) > 360 ? 0 : slice.primary.slice_gradient_angle) + 'deg ,' + getGradient(slice.primary.primary_blade_color1) + "," + getGradient(slice.primary.secondary_blade_color1) + ')'}}>
        <h1 className="big_title uppercase white p-lg">{RichText.asText(slice.primary.section_title, linkResolver, htmlSerializer)}</h1>
        
        <div className="cards row">
            {slice.fields.map(item => {
                return (
                    <div className="cardViewCard" style={{textAlign: "center", fontFamily: "sans-serif"}}>
                        {item.image1 !== null ? <img className="cardView_img" src={item.image1.url}/> : "" }
                        {/* <FontAwesomeIcon icon={["fas", `${item.card_icon[0].text}`]} /> */}
                        { item.subtitle !== null ? <h3>{RichText.render(item.subtitle[0].text)}</h3> : "" }
                        { item.big_title !== null ? <h3>{RichText.render(item.big_title[0].text)}</h3> : "" }
                    </div>
                );
            })}
        </div>
        
        <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
    </div>
</>
