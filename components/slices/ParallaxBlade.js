import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Divider } from './index';
import VisibilitySensor from 'react-visibility-sensor';

import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'gatsby-source-prismic-graphql';
import htmlSerializer from '../../utils/htmlSerializer';

library.add(fas)

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
        }
    })();

    return res;
}

export default class ParallaxBlade extends React.Component{
    constructor(props) {
        super(props);

        this.bubbles = [
            this.bubble = React.createRef(),
            this.bubble_two = React.createRef(),
            this.bubble_three = React.createRef(),
            this.bubble_four = React.createRef(),
            this.bubble_five = React.createRef(),
            this.bubble_six = React.createRef(),
            this.bubble_seven = React.createRef(),
            this.bubble_eight = React.createRef(),
            this.faux_bubble_one = React.createRef(),
            this.faux_bubble_two = React.createRef(),
            this.faux_bubble_three = React.createRef(),
            this.faux_bubble_four = React.createRef(),
            this.faux_bubble_five = React.createRef(),
            this.faux_bubble_six = React.createRef(),
            this.faux_bubble_seven = React.createRef(),
            this.faux_bubble_eight = React.createRef(),
            this.faux_bubble_nine = React.createRef(),
            this.faux_bubble_ten = React.createRef(),
            this.faux_bubble_eleven = React.createRef(),
        ];

        this.state = {
            width: '1200px',
            containerVisible: false,
        }
    }

    componentDidMount() {
        if ( document && this.bubbles !== null ) {
            document.addEventListener('scroll', () => {
                this.check_if_in_view(this.bubbles);
            })
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({width: window.innerWidth})
            
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleWindowSizeChange);
            
        }
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    viewportWidth = () => {
        return window.innerWidth;
    }

    containerVisible = () => {

        return this.state.containerVisible;
    }

    check_if_in_view = (animationElements) => {
        let window_top_position = document.documentElement.scrollTop;

        if(this.containerVisible() !== false && animationElements[0].current !== null){
            animationElements.forEach((element) => {
                if(element.current.offsetTop < -1){
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop * .4;
                    
                } else {
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop * .4;
                }
                
                this.parallaxScroll(element, window_top_position)
            })
        }
    }

    parallaxScroll = (element, scrolled) => {
        switch(element.current.id) {
            case 'bubble-one':
                element.current.style.top = ( 220 + (-scrolled*.15))+'px'; // Big Top Left
                break;

            case 'bubble-two':
                element.current.style.top = ( 800 + (-scrolled*.15))+'px'; // Big Bottom Right
                break;

            case 'bubble-three':
                element.current.style.top = ( 200 + (-scrolled*.30))+'px'; // Little Top Left
                break;

            case 'bubble-four':
                element.current.style.top = ( 800 + (-scrolled*.30))+'px'; // Little Bottom right
                break;

            case 'bubble-five':
                element.current.style.top = ( 600 + (-scrolled*.25))+'px'; 
                break;

            case 'bubble-six':
                element.current.style.top = ( 800 + (-scrolled*.20))+'px'; 
                break;

            case 'bubble-seven':
                element.current.style.top = ( 1000 + (-scrolled*.30))+'px'; 
                break;

            case 'bubble-eight':
                element.current.style.top = ( 10 + (-scrolled*.15))+'px'; 
            break;

            // Non Image Bubbles
            case 'faux-bubble-one':
                element.current.style.top = ( 750 + (-scrolled*.25))+'px'; 
                break;
            
            case 'faux-bubble-two':
                element.current.style.top = ( 80 + (-scrolled*.25))+'px'; 
                break;
            case 'faux-bubble-three':
                element.current.style.top = ( 700 + (-scrolled*.30))+'px'; 
                break;
            
            case 'faux-bubble-four':
                element.current.style.top = ( 600 + (-scrolled*.30))+'px'; 
                break;

            case 'faux-bubble-five':
                element.current.style.top = ( 1220 + (-scrolled*.30))+'px'; 
                break;

            case 'faux-bubble-six':
                element.current.style.top = ( 1000 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-seven':
                element.current.style.top = ( 1000 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-eight':
                element.current.style.top = ( 50 + (-scrolled*.20))+'px'; 
                break;

            case 'faux-bubble-nine':
                element.current.style.top = ( 500 + (-scrolled*.30))+'px'; 
                break;

            case 'faux-bubble-ten':
                element.current.style.top = ( 120 + (-scrolled*.20))+'px'; 
                break;
            case 'faux-bubble-eleven':
                element.current.style.top = ( 750 + (-scrolled*.20))+'px'; 
                break;

            default: return false;
        }
    }

    onChange = (isVisible) => {
        this.setState({containerVisible: isVisible});
    }

    getButton = (button, buttonText) => {
        let buttonType = button.__typename;
    
        const res = (() => {
            switch(buttonType){
                case "PRISMIC_Post" :
            return ( <span className="cta_btn_cont w-100 d-flex justify-content-center"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn" href={"/blog/" + button._meta.uid}>{RichText.asText(buttonText)}</a> </span> )
                
                case "PRISMIC__FileLink" :
                    return ( <span className="cta_btn_cont w-100 d-flex justify-content-center"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn" href={button.url}>{RichText.asText(buttonText)}</a> </span> )
                
                case "PRISMIC__ExternalLink" :
                    return ( <span className="cta_btn_cont w-100 d-flex justify-content-center"> <a target="_blank" rel="noopener noreferrer" className="primary_cta_btn" href={button.url}>{RichText.asText(buttonText)}</a> </span> )
    
                default : 
                    return false;
            }
        })();
    
        return res;
    }

    render(){
        let { slice } = this.props;
        const { width } = this.state;

        const isMobile = width <= 650;

        return (
            <>
                <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

            {!isMobile ? 
                <VisibilitySensor partialVisibility={true} minTopValue={10} onChange={this.onChange}>
                    <div className={"parallax-blade cardView blade"} style={{background: 'linear-gradient(' + ((slice.primary.gradient_angle1 !== null && slice.primary.gradient_angle1) > 360 ? 0 : slice.primary.gradient_angle1) + 'deg ,' + getGradient(slice.primary.primary_blade_color1) + "," + getGradient(slice.primary.secondary_blade_color1) + ')'}}>
                        
                        {/* Normal Bubbles on Left */}
                        <div style={{top: '120px', left: '15vw'}} ref={this.bubble}  id="bubble-one" className="bubble sizeOne"> { slice.primary.bubble_one ? <img alt="asdf" src={slice.primary.bubble_one.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_one_icon_name[0].text} /> } </div>
                        <div style={{top: '200px', left: '570px'}} ref={this.bubble_three}  id="bubble-three" className="bubble sizeThree "> { slice.primary.bubble_three ?  <img alt="asdf" src={slice.primary.bubble_three.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_three_icon_name[0].text} /> } </div>
                        <div style={{top: '600px', left: '30px'}} ref={this.bubble_five}  id="bubble-five" className="bubble sizeFour"> { slice.primary.bubble_five ?  <img alt="asdf" src={slice.primary.bubble_five.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_five_icon_name[0].text} />  } </div>
                        <div style={{top: '600px', left: '300px'}} ref={this.bubble_seven}  id="bubble-seven" className="bubble sizeTwo"> { slice.primary.bubble_seven ?  <img alt="asdf" src={slice.primary.bubble_seven.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_seven_icon_name[0].text} /> } </div>


                        {/* Faux Bubbles on Left */}
                        <div style={{top: '750px', left: '100px'}} ref={this.faux_bubble_one} id="faux-bubble-one" className="faux-bubble size-one"></div>
                        <div style={{top: '700px', left: '220px'}} ref={this.faux_bubble_three} id="faux-bubble-three" className="faux-bubble size-two"></div>
                        <div style={{top: '1220px', left: '500px'}} ref={this.faux_bubble_five} id="faux-bubble-five" className="faux-bubble size-one"></div>
                        <div style={{top: '1000px', left: '-20px'}} ref={this.faux_bubble_seven} id="faux-bubble-seven" className="faux-bubble size-two"></div>
                        <div style={{top: '300px', left: '-25px'}} ref={this.faux_bubble_nine} id="faux-bubble-nine" className="faux-bubble size-two"></div>
                        
                        {/* Content */}
                        <div className="content-container">
                            <h1 className="big_title uppercase">{ RichText.asText(slice.primary.section_title) }</h1>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                { !!slice.primary.content_section_one ? <span className={!slice.primary.content_section_two ? "big-content" : 'column-class'}> { RichText.render(slice.primary.content_section_one, linkResolver, htmlSerializer) } </span> : false }
                                { !!slice.primary.content_section_two ?  <span className={!slice.primary.content_section_one ? "big-content" : 'column-class'}> { RichText.render(slice.primary.content_section_two, linkResolver, htmlSerializer) } </span> : false }
                            </div>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                { !!slice.primary.primary_cta_button && !!slice.primary.custom_cta_text ? this.getButton(slice.primary.primary_cta_button, slice.primary.custom_cta_text) : false}
                            </div>
                        </div>
                        
                        {/* Faux Bubbles on Right */}
                        <div style={{top: '750px', right: '250px'}} ref={this.faux_bubble_eleven} id="faux-bubble-eleven" className="faux-bubble size-two"></div>
                        <div style={{top: '120px', right: '80px'}} ref={this.faux_bubble_ten} id="faux-bubble-ten" className="faux-bubble size-two"></div>
                        <div style={{top: '50px', right: '400px'}} ref={this.faux_bubble_eight} id="faux-bubble-eight" className="faux-bubble size-two"></div>
                        <div style={{top: '1000px', right: '10px'}} ref={this.faux_bubble_six} id="faux-bubble-six" className="faux-bubble size-two"></div>
                        <div style={{top: '600px', right: '100px'}} ref={this.faux_bubble_four} id="faux-bubble-four" className="faux-bubble size-one"></div>
                        <div style={{top: '0px', right: '10px'}} ref={this.faux_bubble_two} id="faux-bubble-two" className="faux-bubble size-one"></div>

                        {/* Normal Bubbles on Right */}
                        <div style={{top: '800px', right: '180px'}} ref={this.bubble_six} id="bubble-six" className="bubble sizeFour"> { slice.primary.bubble_six ?  <img alt="asdf" src={slice.primary.bubble_six.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_six_icon_name[0].text} /> } </div>
                        <div style={{top: '780px', right: '70px'}} ref={this.bubble_four} id="bubble-four" className="bubble sizeThree"> { slice.primary.bubble_four ?  <img alt="asdf" src={slice.primary.bubble_four.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_four_icon_name[0].text} /> }</div>
                        <div style={{top: '800px', right: '350px'}} ref={this.bubble_two} id="bubble-two" className="bubble sizeOne"> { slice.primary.bubble_two ?  <img alt="asdf" src={slice.primary.bubble_two.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_two_icon_name[0].text} /> } </div>
                        <div style={{top: '-100px', right: '250px'}} ref={this.bubble_eight} id="bubble-eight" className="bubble sizeTwo"> { slice.primary.bubble_eight ?  <img alt="asdf" src={slice.primary.bubble_eight.url}/> : <FontAwesomeIcon icon={slice.primary.bubble_eight_icon_name[0].text} /> } </div>
                    </div>
                </VisibilitySensor>
            :
                <div className={"parallax-blade cardView blade"} style={{background: 'linear-gradient(' + ((slice.primary.gradient_angle1 !== null && slice.primary.gradient_angle1) > 360 ? 0 : slice.primary.gradient_angle1) + 'deg ,' + getGradient(slice.primary.primary_blade_color1) + "," + getGradient(slice.primary.secondary_blade_color1) + ')'}}>
                    <div className="content-container">
                        <h1 className="big_title uppercase">{ RichText.asText(slice.primary.section_title) }</h1>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            { !!slice.primary.content_section_one ? <span className={!slice.primary.content_section_two ? "big-content" : ''}> { RichText.render(slice.primary.content_section_one, linkResolver, htmlSerializer) } </span> : " " }
                            { !!slice.primary.content_section_two ?  <span className={!slice.primary.content_section_one ? "big-content" : ''}> { RichText.render(slice.primary.content_section_two, linkResolver, htmlSerializer) } </span> : " " }
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-100">
                            { !!slice.primary.primary_cta_button && !!slice.primary.custom_cta_text ? this.getButton(slice.primary.primary_cta_button, slice.primary.custom_cta_text) : false}
                        </div>
                    </div>
                </div>
            }

                <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
            </>
        )
    }
}
