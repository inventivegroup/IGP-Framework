import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import { Row, Col } from 'reactstrap';
import { Divider } from './index';

library.add(fas)

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

            default:
                return 'white';
        }
    })();

    return res;
}


export default ({slice}) => {
    return (
        <>
            <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.primary_blade_color} side="top" flipped={slice.primary.divider_top_flipped} />

            <div className="text-col" style={{background: 'linear-gradient(' + (slice.primary.gradient_angle > 360 ? 0 : slice.primary.gradient_angle) + 'deg ,' + getGradient(slice.primary.primary_blade_color) + "," + getGradient(slice.primary.secondary_blade_color) + ')'}}>
                <h2 className="big_title uppercase">{slice.primary.blade_title !== null ? RichText.asText(slice.primary.blade_title) : false}</h2>
                <Row className="d-flex columns flex-wrap">
                {slice.fields.map(item => {
                    return (
                        <Col className="d-flex flex-column align-items-center align-items-sm-start" xs="12" sm="6" md={slice.fields.length > 2 ? '4' : '6'}>
                            {!!item.featured_image ? <img className="featured_image" alt="Featured" src={item.featured_image.url}/> : false }
                            {!!item.featured_icon ? <FontAwesomeIcon className="text-columns-icon" icon={item.featured_icon[0].text}/> : false }
                            <h3>{ !!item.section_subtitle ? RichText.render(item.section_subtitle, linkResolver, htmlSerializer) : " " }</h3>
                            <p className="text-columns-text">{ !!item.content ? RichText.render(item.content, linkResolver, htmlSerializer) : " " }</p>
                        </Col>
                    );
                })}
                </Row>
            </div>
            
            <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.primary_blade_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
        </>
    )
}