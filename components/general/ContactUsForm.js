import React from 'react';
import HubspotForm from 'react-hubspot-form'
import VisibilitySensor from 'react-visibility-sensor';


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
            width: '1200px',
            containerVisible: false,
        }
    }

    componentDidMount() {
        if ( document ) {
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
        const { width } = this.state;
        const isMobile = width <= 650;

        return (
            <>
            
                {!isMobile ?
                
                    <VisibilitySensor partialVisibility={true} minTopValue={10} onChange={this.onChange}>
                        <div style={{height: '900px'}}>
                            <div className="contact-form-container">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.description}</p>

                                <div className="contact-form">
                                    <HubspotForm
                                        portalId='4134086'
                                        formId='ba7e39f3-65d3-433f-becc-f2ef1481b999'
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

                    :

                    <div className="contact-form-container">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>

                        <div className="contact-form">
                            <HubspotForm
                                portalId='4134086'
                                formId='ba7e39f3-65d3-433f-becc-f2ef1481b999'
                                loading={<div>Loading...</div>}
                            />
                        </div>
                    </div>
                }
            </>
        )
    }
}