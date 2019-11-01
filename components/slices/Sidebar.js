import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const Sidebar = ({ data }) => {
    return (
        <div className="sidebar col-md-4">
            <div className="recent-posts">
                <h3>Recent Posts</h3>
                <hr/>
                {data.map((post, index) => {
                    if(index < 5 ){ // Wont show more than 6 post titles
                        return <div key={index}><a className="post-title-link" href={`/blog/${post.node._meta.uid}`} key={index}>{post.node.title[0].text}</a></div>
                    } 
                    return "No Recent Posts";
                })}
            </div>

            <div className="categories"> 
                <h3>Categories</h3>
                <hr/>

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
          categories {
            category
          }
        }
      }
    }
  }
}
`} 
    render={ data => <Sidebar data={data.prismic.allPosts.edges}></Sidebar> }
  /> 
);