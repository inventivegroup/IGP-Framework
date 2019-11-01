import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Coffee, Bolt } from '@fortawesome/free-solid-svg-icons';
// import Link from 'gatsby';

const AuthorImage = ( data ) => {
    const res = (() => {
      switch(data.author) {
        case 'Maisy Shaw': return (
            <div className="author-image" style={{backgroundImage: `url(https://inventivedev.wpengine.com/wp-content/uploads/2019/01/maisy-posh-1.jpg)`}}></div>
        )
        
        case 'James Shaw': return (
            <div className="author-image" style={{backgroundImage: `url(https://inventivedev.wpengine.com/wp-content/uploads/2019/03/james_shaw-IG2-sq.jpg)`}}></div>
        )
        
        case 'Andrew Siemer': return (
            <div className="author-image" style={{backgroundImage: `url(https://inventivedev.wpengine.com/wp-content/uploads/2018/06/andrew_seimer_400.jpg)`}}></div>
        )
        
        case 'Laura Ruffino': return (
            <div className="author-image" style={{backgroundImage: `url(https://inventivedev.wpengine.com/wp-content/uploads/2019/04/Laura.png)`}}></div>
        )
        
        case 'Miguel Gonzalez': return (
            <div className="author-image" style={{backgroundImage: `url(https://inventivedev.wpengine.com/wp-content/uploads/2019/07/miguel_headshot.jpg)`}}></div>
        )

        default: return null;
      }
    })();
    return res;
}


export default ({ author }) => {
    return (
        <div className="about-the-author">

            <div className="about-the-author-content">
                <div className="post-bubble med top-left-15"></div>
                <div className="post-bubble small bottom-20-left"></div>
                <div className="post-bubble large top-5-left-10"></div>
                <AuthorImage author={author}/>
                <div className="post-bubble x-large bottom-20-left-10"></div>
                <div className="post-bubble large bottom-15-left-30"></div>

                <span>
                    <h3 className="subtitle studios_light">{author}</h3>
                    <h1 className="big-title">About The Author</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a className="cta-primary" href="/our-team">Learn More</a>
                </span>
            </div>
            
            <div className={" diagonal_top studios"}></div>

        </div>
    )
}
