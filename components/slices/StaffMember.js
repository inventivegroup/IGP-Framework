import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import Carousel from 'react-multi-carousel';
import { Divider } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


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

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
};

export default ({ slice }) => {

    return ( <>
        <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

            <div className={"carousel-container staff_members"} style={{background: 'linear-gradient(' + ((slice.primary.gradient_angle1 !== null && slice.primary.gradient_angle1) > 360 ? 0 : slice.primary.gradient_angle1) + 'deg ,' + getGradient(slice.primary.primary_blade_color1) + "," + getGradient(slice.primary.secondary_blade_color1) + ')'}}>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    ssr={true}
                    infinite={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all 1.5s"
                    transitionDuration={500}
                    containerClass="Carousel"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                >
                    {slice.fields.map(item => {
                        return (
                            <div className="staff_item">
                                <div><div className="image"  style={{backgroundImage: `url("${item.staff_image.url}")`, backgroundSize: 'cover'}}></div></div>
                                <div className="content">
                                    <FontAwesomeIcon icon={faQuoteLeft} color="lightgrey" size="lg" />
                                    {item.bio !== null ? RichText.render(item.bio, linkResolver, htmlSerializer) : " " }
                                    <hr className={"seperator" }/>
                                    <h3>{RichText.asText(item.job_title, linkResolver, htmlSerializer)}</h3>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>

        <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
    </> )
}