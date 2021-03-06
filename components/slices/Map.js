import React from 'react'
// import GoogleMapReact from 'google-map-react';
import mapImage from '../../images/map.png';
import VisibilitySensor from 'react-visibility-sensor';
import { Divider } from './index';

// const Marker = ({}) => <i className="fas fa-map-marker" style={{color: '#7E5BEF', fontSize: '30px'}}></i>;

export default class Map extends React.Component {
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
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop * .4;
                    
                } else {
                    window_top_position = -element.current.scrollTop + document.documentElement.scrollTop * .4;
                }
                
                this.parallaxScroll(element, window_top_position)
            })
            
        }
    };

    parallaxScroll = (element, scrolled) => {
        switch(element.current.id) {
            // Non Image Bubbles
            case 'faux-bubble-one-svg': // pink
                element.current.style.top = ( 300 + (-scrolled*.15))+'px'; 
                break;

            case 'faux-bubble-three': // orange
                element.current.style.top = ( 200 + (-scrolled*.30))+'px'; 
                break;

            case 'faux-bubble-five': // grey
                element.current.style.top = ( 200 + (-scrolled*.35))+'px'; 
                break;

            case 'faux-bubble-two': // green
                element.current.style.top = ( -30 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-four': // grey
                element.current.style.top = ( 300 + (-scrolled*.40))+'px'; 
                break;
            case 'faux-bubble-six': // purple
                element.current.style.top = ( -200 + (-scrolled*.30))+'px'; 
                break;
            case 'faux-bubble-seven': // grey
                element.current.style.top = ( 250 + (-scrolled*.40))+'px'; 
                break;

            default: return false;
        }
    }

    onChange = (isVisible) => {
        this.setState({containerVisible: isVisible});
    }

    render(){
        let { slice } = this.props;
        let { divider_top, divider_top_color, divider_top_flipped, divider_bottom, divider_bottom_color, divider_bottom_flipped } = slice.primary;

        const { width } = this.state;
        const isMobile = width <= 650;

        return (
            <div>
                { !isMobile 
                
                ? 
                    <VisibilitySensor partialVisibility={true} minTopValue={10} onChange={this.onChange}>
                        <div className="map-image parallax-container" style={{backgroundImage: `url(${mapImage})`, minHeight:'650px', backgroundPosition:'center', backgroundSize: 'cover'}}>
                            <Divider className="top-divider" type={divider_top} backgroundColor={divider_top_color} side="top" flipped={divider_top_flipped}/>
                        
                            {/* <div style={{top: '200px', left: '95vw', zIndex:999, backgroundColor: '#FF6E6B'}} ref={this.faux_bubble_one} id="faux-bubble-one" className="faux-bubble Big"></div> */}
                            <svg id="faux-bubble-one-svg" ref={this.faux_bubble_one} style={{zIndex: 999, position: 'relative', top: '200px', left: 'calc(100% - 75px)',}} height="200" width="75"><circle cx="100" cy="100" r="100" stroke="none" stroke-width="0" fill="#FF6E6B" /></svg>
                            <div style={{top: '200px', left: 'calc(100% - 115px)', zIndex:999, backgroundColor: 'orange'}} ref={this.faux_bubble_three} id="faux-bubble-three" className="faux-bubble Small"></div>
                            <div style={{top: '200px', left: '75vw', zIndex:999, backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_five} id="faux-bubble-five" className="faux-bubble XSmall"></div>
                            <div style={{top: '280px', left: 'calc(100% - 29px)', zIndex:999, backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_seven} id="faux-bubble-seven" className="faux-bubble XSmall"></div>
                            <div style={{top: '400px', left: 'calc(100% - 75px)', zIndex:999, backgroundColor: 'lime'}} ref={this.faux_bubble_six} id="faux-bubble-six" className="faux-bubble Small"></div>
                            <div style={{top: '250px', left: '90vw', zIndex:999, backgroundColor: '#d9d9d9'}} ref={this.faux_bubble_four} id="faux-bubble-four" className="faux-bubble XSmall"></div>
                            <div style={{top: '100px', left: '80vw', zIndex:999, backgroundColor: '#7E5BEF'}} ref={this.faux_bubble_two} id="faux-bubble-two" className="faux-bubble Medium"></div>
                            
                            <Divider className="bottom-divider" type={divider_bottom} backgroundColor={divider_bottom_color} side="bottom" flipped={divider_bottom_flipped}/>
                        </div>
                    </VisibilitySensor>
                :
                    <div className="map-image parallax-container" style={{backgroundImage: `url(${mapImage})`, minHeight:'650px', backgroundPosition:'center', backgroundSize: 'cover'}}>
                        <Divider className="top-divider" type={divider_top} backgroundColor={divider_top_color} side="top" flipped={divider_top_flipped}/>
                        <Divider className="bottom-divider" type={divider_bottom} backgroundColor={divider_bottom_color} side="bottom" flipped={divider_bottom_flipped}/>
                    </div>
                }
            </div>
        )
    }
}