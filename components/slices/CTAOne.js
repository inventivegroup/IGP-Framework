import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

import VisibilitySensor from 'react-visibility-sensor';
import { Row, Col, Button } from 'reactstrap';
import { Divider } from './index';


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


export default class CTAOne extends React.Component{
    constructor() {
        super();

        this.check_if_in_view = this.check_if_in_view.bind(this);
        
        this.bubbles = [
            this.faux_bubble_one = React.createRef(),
            this.faux_bubble_two = React.createRef(),
            this.faux_bubble_three = React.createRef(),
            this.faux_bubble_four = React.createRef(),
            this.faux_bubble_five = React.createRef(),
            this.faux_bubble_six = React.createRef(),
            this.faux_bubble_seven = React.createRef()
        ];

        this.state = {
            containerVisible: false,
        }
    }

    componentDidMount() {
        if ( document ) {
            document.addEventListener('scroll', () => {
                this.check_if_in_view(this.bubbles);
            })
        } else {
            console.warn("No document to connect to!");
        }
    }

    containerVisible = () => {
        return this.state.containerVisible;
    }

    check_if_in_view = (animationElements) => {
        let window_top_position = document.documentElement.scrollTop;
        
        if(this.containerVisible() !== false){
            animationElements.forEach((element) => {
                if(element.current.offsetTop < -1){
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop * .6;
                    
                } else {
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop * .6;
                }
                
                this.parallaxScroll(element, window_top_position)
            })
            
        }
    };

    parallaxScroll = (element, scrolled) => {
        switch(element.current.id) {
            // Non Image Bubbles
            case 'faux-bubble-one': // pink
                element.current.style.top = ( 650 + (-scrolled*.15))+'px'; 
                break;

            case 'faux-bubble-three': // orange
                element.current.style.top = ( 950 + (-scrolled*.30))+'px'; 
                break;

            case 'faux-bubble-five': // grey
                element.current.style.top = ( 950 + (-scrolled*.40))+'px'; 
                break;

                


            case 'faux-bubble-two': // green
                element.current.style.top = ( -250 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-four': // grey
                element.current.style.top = ( 300 + (-scrolled*.40))+'px'; 
                break;
            case 'faux-bubble-six': // purple
                element.current.style.top = ( 300 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-seven': // grey
                element.current.style.top = ( 200 + (-scrolled*.40))+'px'; 
                break;

            default: return false;
        }
    }

    onChange = (isVisible) => {
        this.setState({containerVisible: isVisible});
    }
    
    render(){
        let { slice } = this.props;
        let { section_subtitle, section_title, content, cta,  cta_text, text_alignment, primary_blade_color, secondary_blade_color, gradient_angle, divider_top, divider_bottom, divider_top_color, divider_bottom_color, image, layout } = slice.primary;

        return (
            <div className="parallax-container">
                <Divider type={divider_top} backgroundColor={divider_top_color} side="top" flipped={false} />
                
                <VisibilitySensor partialVisibility={true} minTopValue={10} onChange={this.onChange}>
                    <div>
                        {/* Faux Bubbles on Left */}
                        <div style={{top: '400px', left: '-120px', backgroundColor: 'tomato'}} ref={this.faux_bubble_one} id="faux-bubble-one" className="faux-bubble Big"></div>
                        <div style={{top: '500px', left: '20px', backgroundColor: 'orange'}} ref={this.faux_bubble_three} id="faux-bubble-three" className="faux-bubble Small"></div>
                        <div style={{top: '360px', left: '90px', backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_five} id="faux-bubble-five" className="faux-bubble XSmall"></div>
                        
                        <Row className="cta_one p-4" style={{background: 'linear-gradient(' + (gradient_angle > 360 ? 0 : gradient_angle) + 'deg ,' + getGradient(primary_blade_color) + "," + getGradient(secondary_blade_color) + ')'}}>
                            { !!layout && layout === 'image left' ?
                                <Col lg="5" md="6" sm="12" xs="12" className="img_cont m-auto">
                                    <div className="image" style={{backgroundImage: `url(${image.url})`}}></div>
                                </Col>
                                : false
                            }
            
                            <Col lg="5" md="6" sm="12" xs="12" className={"m-auto main " + text_alignment }>
                                { !!section_subtitle  ? <h3>{section_subtitle[0].text}</h3> : false }
                                { !!section_title  ? <h2>{section_title[0].text}</h2> : false }
                                {RichText.render(content, linkResolver, htmlSerializer)}
                                { !!cta  ? <Button href={'/' + ( !!cta._meta ? cta._meta.uid : cta.url )} color="primary">{RichText.asText(cta_text, linkResolver, htmlSerializer)}</Button> : " " }
                            </Col> 
            
                            { !!layout && layout === 'image right' ?
                                <Col lg="5" md="6" sm="12" xs="12" className="m-auto img_cont">
                                    <div className="image" style={{backgroundImage: `url(${image.url})`}}></div>
                                </Col>
                                : false
                            }
                        </Row>

                        {/* Faux Bubbles on Right */}
                        <div style={{top: '-300px', right: '-98vw', backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_seven} id="faux-bubble-seven" className="faux-bubble XSmall"></div>
                        <div style={{top: '-100px', right: '-95vw', backgroundColor: 'rebeccapurple'}} ref={this.faux_bubble_six} id="faux-bubble-six" className="faux-bubble Medium"></div>
                        <div style={{top: '-250px', right: '-94vw', backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_four} id="faux-bubble-four" className="faux-bubble XSmall"></div>
                        <div style={{top: '-600px', right: '-94vw', backgroundColor: 'lime'}} ref={this.faux_bubble_two} id="faux-bubble-two" className="faux-bubble Small"></div>
                    </div>
                </VisibilitySensor>     

                <Divider type={divider_bottom} backgroundColor={divider_bottom_color} side="bottom" flipped={false} />
            </div>
        )
    }
}