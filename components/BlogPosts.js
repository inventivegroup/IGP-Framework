import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Divider } from './slices';
import moment from 'moment';
import { RichText } from 'prismic-dom';

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

function getBlogPostHome(data) {
  let BlogPostHomeData;

  for(let edge of data[0].node.body) {
    switch(edge.type) {
      case "blog_posts": 
        BlogPostHomeData = edge.primary;
    }
  }

  return BlogPostHomeData;
}

function Posts( data ) {
    let formattedPosts = [];

    data.slices.allPosts.edges.map((post, index) => {
        let { featured_image, title, post_author, date, _meta } = post.node;
        let post_limit =  getBlogPostHome(data.slices.allHomepages.edges).post_limit;

        if(formattedPosts.length <= ( post_limit - 1) ){
          formattedPosts.push(
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

                  <div className="content carousel_content">
                      <h3 className="carousel-header">{title[0].text}</h3>
                      <a href={"/blog/" + _meta.uid}>Read More ></a>
                  </div>
              </div>
            </div>
          )
        }
    })

    return formattedPosts;
}

const PageBody = ( data ) => {
  let { divider_top, divider_top_flipped, divider_top_color, divider_bottom, divider_bottom_flipped, divider_bottom_color, section_title } = getBlogPostHome(data.data.allHomepages.edges)


  return (
    <>
      <Divider type={divider_top} side="top" backgroundColor={divider_top_color} flipped={divider_top_flipped} />

      <div className="blog_home_container cardView">
        <span className="pl-4">{ !!section_title ? <h2 className="big_title uppercase smoke pl-4">{section_title[0].text}</h2> : false }</span>
        <div className="blog_home-posts_container">
            <Posts slices={ data.data }/>
        </div>
      </div>

      <Divider type={divider_bottom} side="bottom" backgroundColor={divider_bottom_color} flipped={divider_bottom_flipped} />
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
                divider_top_flipped
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
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