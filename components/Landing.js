import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts' 
import { CTAOne, StaffMember, Plan, BlogPosts, Carousel, ParallaxBlade } from '../components/slices'


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
            
            case 'parallax_blade' : return (
                <div key={ index } className="homepage-slice-wrapper">
                    <p>Parallax Blade</p>
                    <Plan slice={slice}></Plan>
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

          break;
      }
  })();

  return res;
}

const PageBody = ({ page }) => {
  return (
    <div className="container">
      <div className="Homepage-Heading" style={{background: 'linear-gradient(' + ((page.gradient_angle !== null && page.gradient_angle) > 360 ? 0 : page.gradient_angle) + 'deg ,' + getGradient(page.primary_blade_color) + "," + getGradient(page.secondary_blade_color) + ')'}}>
        <div className='content'>
          <h1> { page.headline[0].text }  </h1>
          <p> { page.description[0].text }  </p>
          
          <div className="cta_btn_cont">
            <a href="#" className="secondary_cta_btn">Learn More.</a>
            <a href="#" className="primary_cta_btn">Get a quote now.</a>
          </div>
        </div>

        <div className="header_image">
          <img src={`${page.image.url}`}/>
        </div>

        { page.divider_bottom === "diagonal" ? <div className={"diagonal_top " + page.divider_bottom_color}></div> : " "}
        
      </div>

      <PageSlices slices={ page.body } />
    </div>
  )
}

export default (props) => {
  return(
    <Layout>
      <PageBody page={ props.data[0].node } />
    </Layout>
  )
}