import React from 'react';
import moment from 'moment';

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
        
        case 'Klarissa Garcia': return (
            <div className="author-image" style={{backgroundImage: `url(https://images.prismic.io/inventivestudios/fa8f5bb7-2134-4c3e-897b-e029ce585f5f_klarissa-garcia.jpg?auto=compress,format)`}}></div>
        )
  
        default: return null;
      }
    })();
    
    return res;
} 

export default class ShortPost extends React.Component{

    render(){

      let {featured_image, post_author, title, date, _meta, index} = this.props.data;

        return(
            <div>
                <div className="post_link">
                    <div key={index} className="short_post">
                        <div className="post_header_image" style={{backgroundImage: `url("${featured_image.url}")`, backgroundSize: "cover"}}>
                            <div className="linear_gradient_dark_studios">
                                <AuthorImage author={post_author}/>

                                <div className="post_author">
                                    <div className="author_name">{post_author}</div>
                                    <div className="date">{moment(date).format('MMMM Do, YYYY')}</div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <h3 className="uppercase">{title[0].text}</h3>
                            <a href={"/blog/" + _meta.uid}>Read More ></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}