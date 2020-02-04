import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/layouts' 
import { ImageCaption, Quote, Text, Sidebar, AboutAuthor } from '../components/slices'
import BlogPostsBlade from '../components/slices/BlogPostsBlade';
import ContactUsForm from '../components/general/ContactUsForm'


// Query for the Blog Post content in Prismic
export const query = graphql`
query BlogPostQuery($uid: String) {
  prismic{
    allPosts(uid: $uid){
      edges{
        node{
          _meta{
            id
            uid
            type
          }
          title
          date
          featured_image
          short_description
          post_author

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
`

// Sort and display the different slice options
const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'text': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <Text slice={ slice } /> }
          </div>
        )

        case 'quote': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <Quote slice={ slice } /> }
          </div>
        )

        case 'image_with_caption': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <ImageCaption slice={ slice } /> }
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

// Display the title, date, and content of the Post
const PostBody = ({ blogPost, allPosts }) => {
  const titled = blogPost.title.length !== 0 ;
  
  return (
    <>
      <div className="post-header" style={{backgroundImage: `url(${blogPost.featured_image.url !== null && blogPost.featured_image.url !== undefined ? blogPost.featured_image.url : ''})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="colored-layover flex">
          <h1 data-wio-id={ blogPost._meta.id }>
            { titled ? RichText.asText(blogPost.title) : 'Untitled' }
          </h1>
          <p>
            {blogPost.short_description !== null ? RichText.asText(blogPost.short_description) : ''}
          </p>
        </div>
      </div>

      <div className="d-flex row">
        <div className="post-container col-md-9">
          <PostSlices slices={ blogPost.body } />
        </div>
        <Sidebar/>
      </div>

      <AboutAuthor author={blogPost.post_author}/>

      <>  
        <div className="more-stories">
          <h3 className="blade_title">More Stories</h3>
          <BlogPostsBlade></BlogPostsBlade>
        </div>
        <div className={"diagonal_bottom studios"}></div>
      </>

      <ContactUsForm slice={{title:"TELL US ABOUT YOUR NEEDS", content:"Fill out the information below, we will schedule a time to discuss your needs and how we can help!"}}/>
    </>
  );
}

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismic.allPosts.edges.slice(0,1).pop();
  const everything = props.data.prismic.allPosts;

  if(!doc) return null;

  return(
    <Layout>
      <PostBody blogPost={ doc.node } allPosts={everything} />
    </Layout>
  )
}
