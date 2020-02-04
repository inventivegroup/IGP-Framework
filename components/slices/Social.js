import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

import { Divider } from './index';
import { ShortPost } from '../general';
import {Row, Col} from 'reactstrap';


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
                
            case "brown smoke" : 
                return '#E0E0E0';

            case "none" : 
                return '100%, white';

            default :
                return '100%, white';

            break;
        }
    })();

    return res;
}

export default ({ slice }) => {
    let { section_title, description1, cta, custom_cta_text, custom_cta_color, primary_blade_color1, secondary_blade_color1, gradient_angle1, divider_top, divider_top_color, divider_top_flipped, divider_bottom, divider_bottom_color, divider_bottom_flipped } = slice.primary;

    return (
        <>
            <Divider type={divider_top} backgroundColor={divider_top_color} side="top" flipped={divider_top_flipped} />

            <div className={"cardView social"} style={{background: 'linear-gradient(' + ((gradient_angle1 !== null && gradient_angle1) > 360 ? 0 : gradient_angle1) + 'deg ,' + getGradient(primary_blade_color1) + "," + getGradient(secondary_blade_color1) + ')'}}>
                <h1 className="big_title uppercase ml-5 pl-4 white">{RichText.render(section_title, linkResolver, htmlSerializer)}</h1>
                
                <div className="container py-5">
                    <Row>
                        <Col xs="12" sm="12" md="4" lg="4">
                            <p className="no-padding">{RichText.render(description1, linkResolver, htmlSerializer)}</p>
                            <a className="category-link" style={{color: getGradient(custom_cta_color)}} href={cta.url}>{RichText.asText(custom_cta_text, linkResolver, htmlSerializer)}</a>
                        </Col>

                        <ShortPost data={{
                            featured_image: {url:"https://images.unsplash.com/photo-1483808161634-29aa1b0e585e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},
                            post_author: "James Shaw",
                            title: [{text: "Really Cool Blog Post About Something Really Cool!!!"}],
                            _meta: {uid: "welcome" },
                            index: 1,
                            date: Date.now()
                        }}></ShortPost>

                        <ShortPost data={{
                            featured_image: {url:"https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"},
                            post_author: "Andrew Siemer",
                            title: [{text: "Really Cool Blog Post About Something Really Cool!!!"}],
                            _meta: {uid: "welcome" },
                            index: 1,
                            date: Date.now()
                        }}></ShortPost>
                    </Row>
                </div>
                <Row className="px-3">
                    <Col className="d-flex flex-wrap justify-content-between align-items-center">
                        {slice.fields.map((data, index) => {
                            return (
                                <div key={index} className="d-flex justify-content-around align-items-center">
                                    { !!data.logo ?  <img className="sm_img" src={data.logo.url}></img> : " " }
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </div>

            <Divider type={divider_bottom} backgroundColor={divider_bottom_color} side="bottom" flipped={divider_bottom_flipped} />
        </>
    )
}
