import React from 'react'
import Layout from '../components/layouts' 
import BlogPosts from './BlogPosts' 
import { CTAOne, StaffMember, Plan, Carousel, ParallaxBlade, CardView, TextColumns, Map, Divider } from '../components/slices'


const PageSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
        switch(slice.type) {
            case 'cta_one': return (
            <div key={ index } className="homepage-slice-wrapper">
                { <CTAOne slice={ slice } /> }
            </div>
            )

            case 'blog_posts' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <BlogPosts slice={slice}></BlogPosts>
                </div>
            )
            
            case 'plan' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <Plan slice={slice}></Plan> 
                </div>
            )
            
            case 'parallax_blade' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <ParallaxBlade slice={slice}></ParallaxBlade>
                </div>
            )

            case 'staff_member' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <StaffMember slice={slice}></StaffMember>
                </div>
            )
           
            case 'carousel' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <Carousel slice={slice}></Carousel>
                </div>
            )
           
            case 'card_view' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <CardView slice={slice}></CardView>
                </div>
            )
           
            case 'text_columns' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <TextColumns slice={slice}></TextColumns>
                </div>
            )
           
            case 'map' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <Map slice={slice}></Map>
                </div>
            )

            default: return "?";
        }
    })();
    return res;
  })
}

const getGradient = (color) => {
  const res = (() => {
      switch(color){
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

        default :
            return '100%, white';
        }
  })();

  return res;
}

const PageBody = ({ page }) => {

  return (
    <div>
      <div className="Homepage-Heading" style={{background: 'linear-gradient(' + ((page.gradient_angle !== null && page.gradient_angle) > 360 ? 0 : page.gradient_angle) + 'deg ,' + getGradient(page.primary_blade_color) + "," + getGradient(page.secondary_blade_color) + ')'}}>
        <div className={`content ${!!page.page_header_text_color ? page.page_header_text_color : 'white'}`}>
          <h1> { page.headline[0].text }  </h1>
          <p> { page.description[0].text }  </p>
          
          <div className="cta_btn_cont">
            <a target="_blank" rel="noopener noreferrer" href={page.header_button.url} className="secondary_cta_btn" style={{color: 'black'}}>{page.header_button_text[0].text}</a>
            <a target="_blank" rel="noopener noreferrer" href={page.secondary_header_cta.url} className="primary_cta_btn">{page.secondary_cta_text[0].text}</a>
          </div>
        </div>

        <div className="header_image">
          <img alt="Fun Graphic Of A Person At Their Computer" src={`${page.image.url}`}/>
        </div>

        <Divider type={page.page_divider_bottom} side="top" backgroundColor={page.page_divider_bottom_color} flipped={false} />

      </div>

      <PageSlices slices={ page.body } />
    </div>
  )
}

export default (props) => {
  return(
    <Layout metaTitle={props.data[0].node.meta_title[0].text} metaDescription={props.data[0].node.meta_description[0].text}>
      <PageBody page={ props.data[0].node } />
    </Layout>
  )
}