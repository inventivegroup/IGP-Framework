import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts' 
import { Divider, CTAOne, Plan, StaffMember,ParallaxBlade, Social, List, DropIn, CountUp, BigWordsOne, Media, BigWordsTwo } from '../components/slices'
import { ContactUsForm } from '../components/general'


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
          headline
          description
          header_button_text
          secondary_header_button_text
          primary_blade_color
          secondary_blade_color
          page_header_text_color
          gradient_angle
          page_divider_bottom
          page_divider_bottom_color
          image
          navbar_style
          header_button{
            ... on PRISMIC__ExternalLink{
              url
            }
            ... on PRISMIC__FileLink{
              name
              url
              size
            }
          }
          secondary_header_button{
            ... on PRISMIC__ExternalLink{
              url
            }
            ... on PRISMIC__FileLink{
              name
              url
              size
            }
          }
        
          body{
            __typename
            ... on PRISMIC_PageBodyCta_one{
                type
                label
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
                divider_top_color
                divider_bottom
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
            ... on PRISMIC_PageBodyCount_up {
              type
              label
              primary{
                section_title
                primary_blade_color1
                secondary_blade_color1
                divider_top
                divider_bottom
                gradient_angle1
                font_shade
              }
              fields{
                prefix
                number
                icon_color
                suffix
                text
                icon
              }
            }
            ... on PRISMIC_PageBodySocial{
                type
                label
              primary {
                section_title
                description1
                custom_cta_text
                custom_cta_color
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1
                divider_top
                divider_top_color
                divider_top_flipped
                divider_bottom
                divider_bottom_color
                divider_bottom_flipped
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
              fields{
              	logo
              }
            }
          
            ... on PRISMIC_PageBodyStaff_member {
              type
              label
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
              	full_name  
                job_title
                staff_image
                bio
              }
            }
            ... on PRISMIC_PageBodyPlan{
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
            ... on PRISMIC_PageBodyList{
              type
              primary{
                section_title
                text_color
                icon
                image1
              }
              fields{
                item_header
                item_text
              }
            }
            ... on PRISMIC_PageBodyParallax_blade {
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

                primary_cta_button{
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
                }

								custom_cta_text

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
            ... on PRISMIC_PageBodyBig_words_one{
              type
              label
              primary{
                title
                text_alignment
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1
                divider_top
                divider_bottom
                font_color
              }
            }
            ... on PRISMIC_PageBodyMedia{
              type
              label
              primary{
                section_subtitle
                section_title
                content
                height
                background_image
                video {
                  ... on PRISMIC__FileLink{
                    name
                    url
                    size
                  }
                }
                text_alignment
                text_background_color
                divider_top
                divider_bottom
                layout
                font_shade
                primary_cta_btn{
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }
                } 
                primary_cta_btn_text
                secondary_cta_btn_text
                secondary_cta_btn{
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                  
                  ... on PRISMIC__FileLink {
                    url
                  }
                }
              }
            }
            ...on PRISMIC_PageBodyBig_words_two{
              type
              label
              primary{
                title
                section_subtitle
                content
                divider_top
                divider_bottom
                layout
                text_alignment
                font_color
                primary_blade_color1
                secondary_blade_color1
                gradient_angle1 
              }
            }
            ... on PRISMIC_PageBodyDrop_in{
              type
              label
              primary{
                section_title
                gradient_angle
                divider_top
                divider_bottom
                font_shade
                primary_blade_color
                secondary_blade_color
              }
              fields{
                section_subtitle
              }
            }

            ... on PRISMIC_PageBodyForm{
              type
              label

              primary{
                section_title
                content
                portal_id
                form_id
              }
            }

          }
        }
      }
    }
  }
}`

const getGradient = (color) => {
  const res = (() => {
      switch(color){
          case "smoke":
              return '#E0E6ED';
          
          case "studios":
              return '#7E5BEF';

          case "studios light":
              return '#A389F4';

          case "studios dark":
              return '#592DEA'

          case "studios black":
              return '#14001D'


          case "patriots":
              return '#0000FF'

          case "patriots light":
              return '#0066ff'

          case "patriots dark":
              return '#0000b2'

          case "patriots black":
              return '#000033'


          case "inventive":
              return '#1FB6FF'

          case "inventive light":
              return '#85D7FF'

          case "inventive dark":
              return '#009EEB'

          case "inventive black":
              return '#00151A'


          case "cares":
              return '#13CE66'

          case "cares light":
              return '#29EB7F'

          case "cares dark":
              return '#0F9F4F'

          case "cares black":
              return '#002A02'


          case "staffing":
              return '#FFC82C'

          case "staffing light":
              return '#FFD55F'

          case "staffing dark":
              return '#F8B700'

          case "staffing black":
              return '#1A1A00'


          case "academy":
              return '#FE8A00'

          case "academy light":
              return '#FFA827'

          case "academy dark":
              return '#DB7000'

          case "academy black":
              return '#331C00'


          case "ventures":
              return '#FE0500'

          case "ventures light":
              return '#FF6E6B'

          case "ventures dark":
              return '#D40000'

          case "ventures black":
              return '#330100'

          case "none" : 
              return '100%, white';
          
          break;
      }
  })();

  return res;
}

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

        case 'plan': return (
          <div key={ index } className="homepage-slice-wrapper">
            <Plan slice={ slice } />
          </div>
        )

        case 'staff_member': return (
          <div key={ index } className="homepage-slice-wrapper">
            <StaffMember slice={ slice } />
          </div>
        )

        case 'parallax_blade': return (
          <div key={ index } className="homepage-slice-wrapper">
            <ParallaxBlade slice={ slice } />
          </div>
        )

        case 'social': return (
          <div key={ index } className="homepage-slice-wrapper">
            <Social slice={ slice } />
          </div>
        )

        case 'form': return (
          <div key={ index } className="homepage-slice-wrapper">
            <ContactUsForm slice={ slice } />
          </div>
        )

        case 'list' : return (
          <div key={ index } className="homepage-slice-wrapper">
              <List slice={slice}/>
          </div>
        )

        case 'drop_in': return (
          <div key={ index } className="homepage-slice-wrapper">
            <DropIn slice={ slice } />
          </div>
        )

        case 'count_up': return (
          <div key={ index } className="homepage-slice-wrapper">
            <CountUp slice={ slice } />
          </div>
        );

        case 'big_words_one': return (
          <div key={ index } className="homepage-slice-wrapper">
            <BigWordsOne slice={ slice } />
          </div>
        )

        case 'big_words_two' : return (
          <div key={ index } className="homepage-slice-wrapper">
              <BigWordsTwo slice={slice}/>
          </div>
        )

        case 'media': return (
          <div key={ index } className="homepage-slice-wrapper">
            <Media slice={ slice } />
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
  return (
    <div>
      <div className="Homepage-Heading" style={{background: 'linear-gradient(' + ((page.gradient_angle !== null && page.gradient_angle) > 360 ? 0 : page.gradient_angle) + 'deg ,' + getGradient(page.primary_blade_color) + "," + getGradient(page.secondary_blade_color) + ')'}}>
        <div className={`content ${!!page.page_header_text_color ? page.page_header_text_color : 'black'}`}>
          <h1> { !!page.headline ? page.headline[0].text : false }  </h1>
          <p> { !!page.description ? page.description[0].text : false }  </p>
          
          <div className="cta_btn_cont">
            <a href={!!page.header_button ? page.header_button.url : false} className="secondary_cta_btn">{!!page.header_button_text ? page.header_button_text[0].text : false}</a>
            <a href={!!page.secondary_header_button ? page.secondary_header_button.url : false} className="primary_cta_btn">{!!page.secondary_header_button_text ? page.secondary_header_button_text[0].text : false}</a>
          </div>
        </div>

        <div className="header_image">
          <img alt="Fun Graphic Of A Person At Their Computer" src={`${!!page.image ? page.image.url : false}`}/>
        </div>

        <Divider type={!!page.page_divider_bottom ? page.page_divider_bottom : "none"} side="top" backgroundColor={!!page.page_divider_bottom_color ? page.page_divider_bottom_color : false} flipped={false} />

      </div>
      <PageSlices slices={ page.body } />
    </div>
  );
}

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismic.allPages.edges.slice(0,1).pop();

  if(!doc) return null;

  return(
    <Layout logoColor={doc.node.navbar_style}>
      <PageBody page={ doc.node } />
    </Layout>
  )
}