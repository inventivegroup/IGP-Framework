import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Banner from '../general/Banner';

const Sidebar = ({ data }) => {
    let postData = data.allPosts.edges;
    let sidebarData = data.allPost_sidebars.edges[0].node.banner;

    return (
        <div className="sidebar col-md-3" style={{overflowY: "hidden"}}>
            <div className="banner-container">
              {sidebarData.map((bannerData, index) => {
                return <Banner data={bannerData}/>
              })}
            </div>

            <div className="recent-posts">
                <h3>Recent Posts</h3>
                {postData.map((post, index) => {
                    if(index < 5 ){ // Wont show more than 6 post titles
                        return <div key={index}><a className="post-title-link" href={`/blog/${post.node._meta.uid}`} key={index}>{post.node.title[0].text}</a></div>
                    } 
                    return "No Recent Posts";
                })}
                <hr/>
            </div>

            <div className="categories"> 
                <h3>Categories</h3>
                
                <div>
                    <div><a className="category-link" href={`/blog#all`}>All</a></div>
                    <div><a className="category-link" href={`/blog#academy`}>Academy</a></div>
                    <div><a className="category-link" href={`/blog#cares`}>Cares</a></div>
                    <div><a className="category-link" href={`/blog#development`}>Development</a></div>
                    <div><a className="category-link" href={`/blog#job-posting`}>Job Postings</a></div>
                    <div><a className="category-link" href={`/blog#leadership`}>Leadership</a></div>
                    <div><a className="category-link" href={`/blog#new-hire`}>New Hire</a></div>
                    <div><a className="category-link" href={`/blog#self-improvement`}>Self Improvement</a></div>
                    <div><a className="category-link" href={`/blog#suggested-books`}>Suggested Books</a></div>
                    <div><a className="category-link" href={`/blog#tech`}>Tech</a></div>
                    <div><a className="category-link" href={`/blog#career-management`}>Career Management</a></div>
                </div>
            </div>
        </div>
    )
}



export default props => ( <StaticQuery query={graphql`
{
  prismic{
    allPosts{
      edges{
        node{
          _meta{
            id
            uid
            type
          }
          title
          tags{
            tag
          }
        }
      }
    }
    allPost_sidebars{
      edges{
       node{
         sidebar_background_color
         banner{
           featured_image
           short_description
           banner_cta_button{
             __typename

            ... on PRISMIC__FileLink{
              url
            }
            
            ... on PRISMIC__ExternalLink{
              url
            }
            
            ... on PRISMIC_Post {
              _meta{
                uid
              }
            }
            ... on PRISMIC_Page {
              _meta{
                uid
              }
            }
           }
           custom_cta_button_text
         }
       }
     }
   }
  }
}
`} 
    render={ data => <Sidebar data={data.prismic}></Sidebar> }
  /> 
);