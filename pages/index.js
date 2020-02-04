import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Landing from '../components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            header_text_color
            page_divider_bottom
            page_divider_bottom_color
            gradient_angle

            header_button_text
            header_button{
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

            secondary_cta_text
            secondary_header_cta{
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
                divider_top_flipped
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
              }

              fields{
                image
                carousel_item_title
                content     
                item_background_color
                
                custom_cta_text
                
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

                secondary_cta_btn_text
                secondary_cta_btn{

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

            ... on PRISMIC_HomepageBodyText_columns{
              type
              label

              primary{
                blade_title
                text_alignment
                primary_blade_color
                secondary_blade_color
                gradient_angle
                divider_top
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
              }

              fields{
                featured_image
                featured_icon
                section_subtitle
                content
              }
            }

            ... on PRISMIC_HomepageBodyParallax_blade {
              type
              label

              primary{
                section_title
                content_section_one
                content_section_two
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1
                divider_top
                divider_top_flipped
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color

                bubble_one
                bubble_one_icon_name
                bubble_two
                bubble_two_icon_name
                bubble_three
                bubble_three_icon_name
                bubble_four
                bubble_four_icon_name
                bubble_five
                bubble_five_icon_name
                bubble_six
                bubble_six_icon_name
                bubble_seven
                bubble_seven_icon_name
                bubble_eight
                bubble_eight_icon_name
                bubble_nine
                bubble_nine_icon_name
                bubble_ten
                bubble_ten_icon_name
                bubble_eleven
                bubble_eleven_icon_name
                bubble_twelve
                bubble_twelve_icon_name
                bubble_thirteen
                bubble_thirteen_icon_name
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
                divider_top_flipped
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
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
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
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
                divider_top
                divider_top_flipped
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
                popular_plan
                display_as
                section_title
            
                plan_one_icon_name
                plan_one_image
                plan_one_name
                show_plan_one
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
                plan_two_image
                plan_two_name
                show_plan_two
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
                plan_three_image
                plan_three_name
                show_plan_three
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
                plan_four_image
                plan_four_name
                show_plan_four
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
                plan_five_image
                plan_five_name
                show_plan_five
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
                divider_top_flipped
                divider_top_color
                divider_bottom
                divider_bottom_flipped
                divider_bottom_color
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
            
            ... on PRISMIC_HomepageBodyMap{
              type
              label

              primary{
                divider_top
                divider_top_color
                divider_top_flipped
                
                divider_bottom
                divider_bottom_color
                divider_bottom_flipped
                marker
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
