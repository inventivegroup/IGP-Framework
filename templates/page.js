import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layouts' 
import { Text, StaffMember, Carousel, Quote, ParallaxBlade, CTAOne } from '../components/slices'

// Query for the Page content in Prismic
export const query = graphql`
query PageQuery($uid: String) {
  prismic{
    allPages(uid: $uid){
      edges{
        node{
          _meta{
            id
            uid
            type
          }

          title
          date
        
          body{
            __typename

            ... on PRISMIC_PageBodyCta_one{
              primary {
                section_subtitle
                section_title
                content
                

                cta_text
                text_alignment
                primary_blade_color
                secondary_blade_color
                gradient_angle
                divider_top
                divider_bottom
                divider_top_color
                divider_bottom_color
                image
                layout

                cta{
                  ... on PRISMIC__ExternalLink{
                    url
                  }

                  ... on PRISMIC__FileLink{
                    name
                    url
                    size
                  }
                }
              }
            }
          

            ... on PRISMIC_PageBodyStaff_member {
              type
              label

              fields{
              	full_name  
                job_title
                staff_image
                bio
              }
            }
          }
        }
      }
    }
  }
}
`



// Sort and display the different slice options
const PageSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'cta_one': return (
          <div key={ index } className="homepage-slice-wrapper">
            <CTAOne slice={ slice } />
         </div>
        )

        default: return null;
      }
    })();
    return res;
  })
}

// Display the title, date, and content of the Post
const PageBody = ({ page }) => {
  const titled = page.title.length !== 0 ;

  return (
    <div>
      {/* <div className="container post-header">
        <h1 data-wio-id={ page._meta.id }>
          { titled ? RichText.asText(page.title) : 'Untitled' }
        </h1>
      </div>
      Go through the slices of the post and render the appropiate one */}
      <PageSlices slices={ page.body } />
    </div>
  );
}

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismic.allPages.edges.slice(0,1).pop();

  if(!doc) return null;

  return(
    <Layout>
      <PageBody page={ doc.node } />
    </Layout>
  )
}
