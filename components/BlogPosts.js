import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


function getBlogPostHome(data) {
  let blogPostLimit;

  for(let edge of data[0].node.body) {
    switch(edge.type) {
      case "blog_posts": 
        blogPostLimit = edge.primary;
    }
  }

  return blogPostLimit;
}

function Posts( data ) {
    let formattedPosts = [];

    data.slices.allPosts.edges.map((post, index) => {
        let { featured_image, title, short_description, post_author, date } = post.node;
        let post_limit = getBlogPostHome(data.slices.allHomepages.edges).post_limit;

        if(formattedPosts.length <= ( post_limit - 1) ){
          formattedPosts.push(
            <a className="post_link" href={"/blog/" + `${post.node._meta.uid}`}>
              <div key={index} className="short_post">
                  <div className="post_header_image" style={{backgroundImage: `url("${featured_image.url}")`, backgroundSize: "cover"}}/>
                  <div className="content">
                      <h3>{title[0].text}</h3>
                      <p>{short_description[0].text}</p>
                      <div className="post_author">
                          <span>{post_author} - {date}</span>
                      </div>
                  </div>
              </div>
            </a>
          )
        } else {
          console.log("Limit passed")
        }
    })

    return formattedPosts;
}

const PageBody = ( data ) => {
  let { divider_top, divider_top_color, divider_bottom1, divider_bottom_color1 } = getBlogPostHome(data.data.allHomepages.edges)

  return (
    <>
      { divider_top === "diagonal" ? <div className={"diagonal_top " + divider_top_color}></div> : " "}
      <div className="blog_home_container">
          <div className="blog_home-posts_container">
              <Posts slices={ data.data }/>
          </div>
      </div>
      { divider_bottom1 === "diagonal" ? <div className={"diagonal_bottom " + divider_bottom_color1}></div> : " "}
    </>
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
          date
          post_author
          short_description
          featured_image
          tags{
            tag
          }

          body{
            __typename
            ... on PRISMIC_PostBodyText{
              type
              label
              primary{
                text
              }
            }
            ... on PRISMIC_PostBodyQuote{
              type
              label
              primary{
                quote
                portrait_author
                name_of_the_author
              }
            }
            ... on PRISMIC_PostBodyImage_with_caption{
              type
              label
              primary{
                image
                caption
              }
            }
          }
        }
      }
    }

    allHomepages {
      edges{
        node{
          body{
            ... on PRISMIC_HomepageBodyBlog_posts{
              type

              primary{
                section_title
                description1
                primary_blade_color1
                secondary_blade_color1
                divider_top
                divider_top_color
                divider_bottom1
                divider_bottom_color1
                post_limit
              }
            }
          }
        }
      }
    }
  }
}
`} 
    render={ data => <PageBody data={data.prismic}></PageBody> }
  /> 
);