
import React from 'react'
import Layout from '../components/layouts' 

function GetFirstPost (data) {
    return (
        <a className="post_link" href={"/blogs/" + data._meta.uid}>
            <div className="featured_post" style={{backgroundImage: ("url(" + data.featured_image.url + ")"), backgroundSize: "cover"}}>
                <div className="content">
                    <h1>{data.title[0].text}</h1>
                    <p>{data.short_description[0].text}</p>
                    <div className="post_author_container">
                        <h3>{data.post_author}</h3>
                    </div>
                </div>
            </div>
        </a>
    )
}

const Posts = ( data ) => {
    let formattedPosts = [];
    
    data.slices.data.map((post, index) => {
        let { featured_image, title, short_description, post_author } = post.node;
        formattedPosts.push(
            <a className="post_link" href={"/blog/" + post.node._meta.uid}>
                <div key={index} className="short_post">
                    <div className="post_header_image" style={{backgroundImage: ("url(" + featured_image.url + ")"), backgroundSize: "cover"}}/>
                    <div className="content">
                        <h3>{title[0].text}</h3>
                        <p>{short_description[0].text}</p>
                        <div className="post_author">
                            {post_author}
                        </div>
                    </div>
                </div>
            </a>
        )    
    })
    
    return formattedPosts;
}

const PageBody = ({ page }) => {
  return (
    <div className="blog_home_container">
        {GetFirstPost(page.data[1].node)}
        <div className="blog_home-posts_container">
            <Posts slices={ page } />
        </div>
    </div>
  )
}

export default (props) => {
  return(
    <Layout>
      <PageBody page={ props } />
    </Layout>
  )
}