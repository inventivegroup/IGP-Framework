import React from 'react';
// import { RichText } from 'prismic-reactjs';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layouts';
import BlogsLanding from '../components/BlogsLanding';



const Blog_Home = ({ data }) => {
  return (
    <BlogsLanding data={data.prismic.allPosts.edges}></BlogsLanding>
  )
}

// Query for the Blog Home content in Prismic
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
  }
}
`} 
    render={ data => <Blog_Home data={data} {...props}/> }
  /> 
);