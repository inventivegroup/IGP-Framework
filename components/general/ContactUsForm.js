import React from 'react';
import HubspotForm from 'react-hubspot-form'
import VisibilitySensor from 'react-visibility-sensor';
import { linkResolver, htmlSerializer } from '../../utils';
import { RichText } from 'prismic-reactjs'


export default class ContactUsForm extends React.Component{
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
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop;
                    
                } else {
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop;
                }
                
                this.parallaxScroll(element, window_top_position)
            })
            
        }
    };

    parallaxScroll = (element, scrolled) => {
        switch(element.current.id) {
            // Non Image Bubbles
            case 'faux-bubble-one': // pink
                element.current.style.top = ( -240 + (-scrolled*.15))+'px';  // done
                break;

            case 'faux-bubble-three': // orange
                element.current.style.top = ( -280 + (-scrolled*.30))+'px'; 
                break;

            case 'faux-bubble-five': // grey
                element.current.style.top = ( -60 + (-scrolled*.40))+'px'; 
                break;


            case 'faux-bubble-two': // green
                element.current.style.top = ( 200 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-four': // grey
                element.current.style.top = ( 160 + (-scrolled*.40))+'px'; 
                break;
            case 'faux-bubble-six': // purple
                element.current.style.top = ( -100 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-seven': // grey
                element.current.style.top = ( 440 + (-scrolled*.40))+'px'; 
                break;

            default: return false;
        }
    }

    onChange = (isVisible) => {
        this.setState({containerVisible: isVisible});
    }

    render(){
        let { section_title, content, portal_id, form_id } = this.props.slice.primary;

        console.log(this.props.slice);
        
        return (
            <>
                <VisibilitySensor partialVisibility={true} minTopValue={10} onChange={this.onChange}>
                    <div style={{height: '900px'}}>
                        <div className="contact-form-container">
                            <h3>{!!section_title ? RichText.render(section_title, linkResolver, htmlSerializer) : false }</h3>
                            <p>{ !!content ? RichText.render(content, linkResolver, htmlSerializer) : false }</p>

                            <div className="contact-form">
                                <HubspotForm
                                    portalId={!!portal_id ? RichText.asText(portal_id) : '4134086'}
                                    formId={!!form_id ? RichText.asText(form_id) : 'ba7e39f3-65d3-433f-becc-f2ef1481b999'}
                                    loading={<div>Loading...</div>}
                                />
                            </div>
                        </div>

                        {/* Faux Bubbles on Left */}
                        <div style={{top: '440px', left: '30px', backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_seven} id="faux-bubble-seven" className="faux-bubble XSmall"></div>
                        <div style={{top: '-100px', left: '-20px', backgroundColor: '#7E5BEF'}} ref={this.faux_bubble_six} id="faux-bubble-six" className="faux-bubble Medium"></div>
                        <div style={{top: '160px', left: '110px', backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_four} id="faux-bubble-four" className="faux-bubble XSmall"></div>
                        <div style={{top: '200px', left: '40px', backgroundColor: '#29EB7F'}} ref={this.faux_bubble_two} id="faux-bubble-two" className="faux-bubble Small"></div>
                        
                        {/* Faux Bubbles on Right */}
                        <div style={{top: '-240px', left: '93vw', backgroundColor: '#FF6E6B'}} ref={this.faux_bubble_one} id="faux-bubble-one" className="faux-bubble Big"></div>
                        <div style={{top: '-280px', left: '93vw', backgroundColor: '#FE8A00'}} ref={this.faux_bubble_three} id="faux-bubble-three" className="faux-bubble Small"></div>
                        <div style={{top: '-60px', left: '91vw', backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_five} id="faux-bubble-five" className="faux-bubble XSmall"></div>
                    
                    </div>
                </VisibilitySensor> 
            </>
        )
    }
}