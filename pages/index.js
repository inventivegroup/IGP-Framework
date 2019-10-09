import React from 'react';
// import { RichText } from 'prismic-reactjs';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layouts';
import Landing from '../components/Landing';



const HomePage = ({ data }) => {
  return (
    <Landing data={data.prismic.allHomepages.edges}></Landing>
  )
}

// Query for the Blog Home content in Prismic
export default props => ( <StaticQuery query={graphql`
{
  prismic{
    allHomepages{
      edges{
        node{
            _meta{
                id
                type
            }
            headline
            description
            image

            primary_blade_color
            secondary_blade_color
            divider_bottom
            divider_bottom_color
            gradient_angle
            
        
          body{
            ... on PRISMIC_HomepageBodyCta_one{
              type
              label

              primary {
                section_subtitle
                section_title
                content
                cta{
                  ... on PRISMIC__ExternalLink{
                    url
                  }

                  ... on PRISMIC__FileLink{
                    name
                    url
                    size
                  }

                  ... on PRISMIC_Blog_home {
                    _meta{
                      uid
                    }
                  }
                }
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
              }
            }

            ... on PRISMIC_HomepageBodyCarousel {
              type
              label

              primary{
                section_title
                description1
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1
                divider_top
                divider_top_color
                divider_bottom1
                divider_bottom_color1
              }

              fields{
                image
                carousel_item_title
                content     
                custom_cta_text
                item_background_color
                primary_cta_btn{

                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }

                  
                  ... on PRISMIC_Post {
                    _meta{
                      uid
                    }
                  }
                  
                  ... on PRISMIC_Blog_home{
                    _meta{
                      uid
                    }
                  }

                } 
              }
            }

            ... on PRISMIC_HomepageBodyParallax_blade {
              type
              label

              primary{
                section_title
                description1
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1
                divider_top
                divider_top_color
                divider_bottom1
                divider_bottom_color1

                bubble_one
                bubble_two
                bubble_three
                bubble_four
                bubble_five
                bubble_six
                bubble_seven
                bubble_eight
                bubble_nine
                bubble_ten
                bubble_eleven
                bubble_twelve
                bubble_thirteen
              }
            }

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

            ... on PRISMIC_HomepageBodyCard_view{
              type

              primary{
                section_title
                primary_blade_color1
                secondary_blade_color1
                slice_gradient_angle
                divider_top
                divider_top_flipped
                divider_top_color
                divider_bottom1
                divider_bottom_flipped
                divider_bottom_color1
                layout
                item_background_color
              }

              fields{
                image1
                icon
                big_title
                subtitle
                description1
              }
            }

            ... on PRISMIC_HomepageBodyPlan{
              type

              primary{
                primary_section_color
                secondary_section_color
                gradient_angle1
                section_divider_top
                section_divider_top_flipped
                section_divider_top_color
                section_divider_bottom
                section_divider_bottom_flipped
                section_divider_bottom_color
                popular_plan

                plan_one_icon_name
                plan_one_name
                plan_one_price
                plan_one_link{

                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }

                  
                  ... on PRISMIC_Post {
                    _meta{
                      uid
                    }
                  }
                  
                  ... on PRISMIC_Blog_home{
                    _meta{
                      uid
                    }
                  }
                } 
                plan_one_custom_link_text
                plan_one_perks
                
                plan_two_icon_name
                plan_two_name
                plan_two_price
                plan_two_link{

                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }

                  
                  ... on PRISMIC_Post {
                    _meta{
                      uid
                    }
                  }
                  
                  ... on PRISMIC_Blog_home{
                    _meta{
                      uid
                    }
                  }
                } 
                plan_two_custom_link_text
                plan_two_perks
                
                plan_three_icon_name
                plan_three_name
                plan_three_price
                plan_three_link{

                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }

                  
                  ... on PRISMIC_Post {
                    _meta{
                      uid
                    }
                  }
                  
                  ... on PRISMIC_Blog_home{
                    _meta{
                      uid
                    }
                  }
                } 
                plan_three_custom_link_text
                plan_three_perks
                
                plan_four_icon_name
                plan_four_name
                plan_four_price
                plan_four_link{

                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }

                  
                  ... on PRISMIC_Post {
                    _meta{
                      uid
                    }
                  }
                  
                  ... on PRISMIC_Blog_home{
                    _meta{
                      uid
                    }
                  }
                } 
                plan_four_custom_link_text
                plan_four_perks
                
                plan_five_icon_name
                plan_five_name
                plan_five_price
                plan_five_link{

                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }

                  
                  ... on PRISMIC_Post {
                    _meta{
                      uid
                    }
                  }
                  
                  ... on PRISMIC_Blog_home{
                    _meta{
                      uid
                    }
                  }
                } 
                plan_five_custom_link_text
                plan_five_perks
              }
            }

            ... on PRISMIC_HomepageBodyStaff_member{
              type

              primary{
                section_title
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1
                divider_top
                divider_top_color
                divider_bottom1
                divider_bottom_color1
                layout
              }

              fields{
                staff_image
                icon
                job_title
                full_name
                company
                bio
              }
            }
          }
        }
      }
    }
  }
}
`}
    render={ data => <HomePage data={data} {...props}/> }
  /> 
);