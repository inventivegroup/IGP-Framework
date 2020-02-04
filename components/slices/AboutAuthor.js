import React from 'react';

import { Row, Col, Button } from 'reactstrap';
import { Divider } from './index';

const AuthorImage = ( data ) => {
    const res = (() => {
      switch(data.author) {
        case 'Maisy Shaw': return (
            <div className="author-image" style={{backgroundImage: `url(https://images.prismic.io/inventivestudios/25d85b2c-e5bf-4f62-9716-3fc260814aeb_Maisy-Shaw-Profile-Pic.jpg?auto=compress,format)`}}></div>
        )
        
        case 'James Shaw': return (
            <div className="author-image" style={{backgroundImage: `url(https://images.prismic.io/inventivestudios/214680fe-cc17-4221-9857-66f11ee5579e_James-Shaw-Profile-Pic.jpg?auto=compress,format)`}}></div>
        )
        
        case 'Andrew Siemer': return (
            <div className="author-image" style={{backgroundImage: `url(https://images.prismic.io/inventivestudios/e126414b-5ed7-4a21-b699-f708c337affd_Andrew-Siemer-Profile-Pic.jpg?auto=compress,format)`}}></div>
        )
        
        case 'Laura Ruffino': return (
            <div className="author-image" style={{backgroundImage: `url(https://images.prismic.io/inventivestudios/6ae79737-ea9a-4407-897e-8035415739b3_Laura-Ruffino-Profile-Pic.jpg?auto=compress,format)`}}></div>
        )
        
        case 'Miguel Gonzalez': return (
            <div className="author-image" style={{backgroundImage: `url(https://images.prismic.io/inventivestudios/350033dc-d750-4f6a-9408-2ed7eaccd4f3_Miguel-Gonzalez-Profile-Pic.jpg?auto=compress,format)`}}></div>
        )

        default: return null;
      }
    })();
    return res;
}

export default class AboutAuthor extends React.Component{
    constructor() {
        super();

        this.check_if_in_view = this.check_if_in_view.bind(this);
        this.bubblesContainer = React.createRef();
        
        this.bubbles = [
            this.post_bubble_one = React.createRef(),
            this.post_bubble_two = React.createRef(),
            this.post_bubble_three = React.createRef(),
            this.post_bubble_four = React.createRef(),
            this.post_bubble_five = React.createRef(),
            this.post_bubble_six = React.createRef(),
            this.post_bubble_seven = React.createRef()
        ];
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

    check_if_in_view = (animationElements) => {
        // let window_height = window.innerHeight;
        // let window_top_position = document.documentElement.scrollTop;
        // let window_bottom_position = (window_top_position + window_height);
        
        animationElements.forEach((element) => {
            // let element_height = element.current.offsetHeight;
            // let element_top_position = element.current.offsetTop;
            // let element_bottom_position = (element_top_position + element_height);

            // let container_top = this.bubblesContainer.current.offsetTop;
            // let container_height = this.bubblesContainer.current.offsetHeight;
            // let container_bottom = (container_top + container_height);
            
            // this.parallaxScroll(element, window_top_position)
        })
    };

    parallaxScroll = (element, scrolled) => {
        switch(element.current.id) {
            case 'post-bubble-one':
                element.current.style.top = ( 350 + (-scrolled*.2))+'px'; 
                break;

            case 'post-bubble-two':
                element.current.style.top = ( 300 + (-scrolled*.2))+'px'; 
                break;

            case 'post-bubble-three':
                element.current.style.top = ( 470 + (-scrolled*.25))+'px'; 
                break;

            case 'post-bubble-four':
                element.current.style.top = ( 370 + (-scrolled*.25))+'px'; 
                break;

            case 'post-bubble-five':
                element.current.style.top = ( 440 + (-scrolled*.2))+'px'; 
                break;

            case 'post-bubble-six':
                element.current.style.top = ( 650 + (-scrolled*.2))+'px'; 
                break;

            case 'post-bubble-seven':
                element.current.style.top = ( 680 + (-scrolled*.25))+'px'; 
                break;

            default: return false;
        }
    }

    render(){
        let { author } = this.props;

        return (
            <>
                <div className="about-the-author" ref={this.bubblesContainer}>
                    <Row className="p-4">
                        <Col xs="12" sm="12" md='6' lg="5" className="d-flex justify-content-center">
                            <div style={{top: '0px', left: '0px'}} ref={this.post_bubble_one} id="post-bubble-one" className="post-bubble small"></div>
                            <div style={{top: '20px', left: '40px'}} ref={this.post_bubble_two} id="post-bubble-two" className="post-bubble med"></div>
                            <div style={{top: '80px', left: '20px'}} ref={this.post_bubble_three} id="post-bubble-three" className="post-bubble large"></div>
                            <AuthorImage author={author}/>
                            <div style={{top: '0px', right: '40px'}} ref={this.post_bubble_four} id="post-bubble-four" className="post-bubble x-large"></div>
                            <div style={{top: '100px', right: '20px'}} ref={this.post_bubble_five} id="post-bubble-five" className="post-bubble small"></div>
                            <div style={{bottom: '0px', left: '80px'}} ref={this.post_bubble_six} id="post-bubble-six" className="post-bubble small"></div>
                            <div style={{bottom: '20px', left: '100px'}} ref={this.post_bubble_seven} id="post-bubble-seven" className="post-bubble large"></div>
                        </Col>

                        <Col xs="12" sm="12" md="6" lg="7">
                            <h3 className="subtitle studios_light">{author}</h3>
                            <h1 className="big-title white">About The Author</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="cta_btn_cont">
                                <Button color="primary" href="/our-team">Learn More</Button>
                            </div>
                        </Col>

                    </Row>
                    <Divider backgroundColor="studios" side='top' type="diagonal" />
                </div>
            </>
        )
    }
}
  