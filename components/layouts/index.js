import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navigation from './Navigation'

import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../stylesheets/main.scss'

export default props => (
  <StaticQuery
    query={graphql`
      {
        prismic {
          allNavigations{
             edges{
              node{
                display_name
                logo_white
                logo_black
                nav{
                  ... on PRISMIC_NavigationNavNav_item {
                    label
                    primary{
                      link{
                        _linkType
                        
                        ... on PRISMIC__ExternalLink{
                          url
                          __typename
                        }
                        ... on PRISMIC__FileLink{
                          name
                          url
                          __typename
                          size
                        }
                        ... on PRISMIC_Post{
                          title
                          __typename
                          
                          _meta{
                            uid
                          }
                        }
                        ... on PRISMIC_Page{
                          __typename
                          _meta{
                            uid
                          }
                        }
                      }
                      label
                    }
                    fields{
                      sub_nav_link{
                        _linkType

                        ... on PRISMIC__ExternalLink{
                          url
                        }

                        ... on PRISMIC__FileLink{
                          name
                          url
                          size
                        }

                        ... on PRISMIC_Post{
                          title

                          _meta{
                            uid
                          }
                        }

                      }
                      sub_nav_link_label
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={ data => <Layout data={ data } { ...props }/> }
  />
)

const Layout = ( props ) => {
  if(typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

	return(
    <Fragment>
      <Helmet>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-89523634-6">
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag(‘js’, new Date());
            gtag(‘config’, ‘UA-89523634-6’);
          </script>
        </script> */}
          
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="7JKu33wNkDvcIG8cjUKc8FCUoINUfuZqONZK0glvT7g"/>
        <title>{props.metaTitle ? props.metaTitle : "Inventive Studios"}</title>
        <meta name="description" content={props.metaDescription ? props.metaDescription : "An amazing company with amazing people!"}></meta>
      </Helmet>
      <Navigation logoColor={props.logoColor} data={props.data.prismic.allNavigations.edges.slice(0,1).pop().node}></Navigation>
      <main>
        { props.children }

        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4134086.js"></script>
      </main>
      <Footer/>
    </Fragment>
	)
}
