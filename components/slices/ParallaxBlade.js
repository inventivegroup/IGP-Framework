import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Divider } from './index';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import htmlSerializer from '../../utils/htmlSerializer';


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

export default ({ slice }) =>  {
    return (
        <>
            <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

            <div className={"parallax-blade cardView blade"} style={{background: 'linear-gradient(' + ((slice.primary.gradient_angle1 !== null && slice.primary.gradient_angle1) > 360 ? 0 : slice.primary.gradient_angle1) + 'deg ,' + getGradient(slice.primary.primary_blade_color1) + "," + getGradient(slice.primary.secondary_blade_color1) + ')'}}>
                
                {/* <div id="bubble-one" className="bubble one sizeOne"> <img alt="asdf" src={slice.primary.bubble_one.url}/> </div> */}
                {/* <div id="bubble-three" className="bubble three sizeThree "> <img alt="asdf" src={slice.primary.bubble_two.url}/> </div> */}
                {/* <div id="bubble-five" className="bubble five sizeFour"> <img alt="asdf" src={slice.primary.bubble_five.url}/> </div> */}
                {/* <div id="bubble-seven" className="bubble seven sizeThree"> <img alt="asdf" src={slice.primary.bubble_three.url}/> </div> */}
                {/* <div id="bubble-nine" className="bubble nine sizeFour"> <img src={slice.primary.bubble_seven.url}/> </div> */}
                {/* <div id="bubble-eleven" className="bubble eleven sizeTwo"> <img src={slice.primary.bubble_eight.url}/> </div> */}

                <div className="content-container">
                    <h1  className="big_title">{ RichText.asText(slice.primary.section_title) }</h1>
                    <p> { RichText.render(slice.primary.description1, linkResolver, htmlSerializer) } </p>
                </div>
                
                {/* <div id="bubble-twelve" className="bubble twelve sizeTwo"> <img src={slice.primary.bubble_nine.url}/> </div> */}
                {/* <div id="bubble-six" className="bubble six sizeFour"> <img alt="asdf" src={slice.primary.bubble_twelve.url}/> </div> */}
                {/* <div id="bubble-four" className="bubble four sizeThree"> <img alt="asdf" src={slice.primary.bubble_four.url}/> </div> */}
                {/* <div id="bubble-two" className="bubble two sizeOne"> <img alt="asdf" src={slice.primary.bubble_thirteen.url}/> </div>  */}
                {/* <div id="bubble-eight" className="bubble eight sizeThree"> <img alt="asdf" src={slice.primary.bubble_six.url}/> </div> */}
                {/* <div id="bubble-ten" className="bubble ten sizeFour"> <img src={slice.primary.bubble_eleven.url}/> </div> */}

            </div>

            <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
        </>
    )
}
  