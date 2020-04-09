import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BlogsLanding from '../components/BlogsLanding';


// Query for the Blog Home content in Prismic
export default props => ( <StaticQuery query={graphql`
{
  prismic{
    allBlog_homes{
      edges{
        node{
          filterby{
            tag
          }
        }
      }
    }

    allPosts{
      edges{
        node{
          _meta{
            id
            uid
            type
          }

          meta_title
          meta_description
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
    render={ data => <BlogsLanding data={data.prismic}/> }
  /> 
);