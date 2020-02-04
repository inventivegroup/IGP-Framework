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
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <title>Inventive Studios</title>
      </Helmet>
      <Navigation logoColor={props.logoColor} data={props.data.prismic.allNavigations}></Navigation>
      <main>
        { props.children }
      </main>
      <Footer/>
    </Fragment>
	)
}
