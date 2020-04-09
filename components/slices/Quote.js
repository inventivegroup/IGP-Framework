import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Divider } from '.';

export default ({ slice }) =>
  <>
    <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

    <div className="quote-section" style={{minHeight: '200px', backgroundImage: `url("${slice.primary.portrait_author !== null ? slice.primary.portrait_author.url : ' ' }")`}}>
      { slice.primary.quote ? <h2> { RichText.asText(slice.primary.quote) } </h2> : false}
      <br/>
      {slice.primary.name_of_the_author && slice.primary.name_of_the_author !== '' ? <p>- {slice.primary.name_of_the_author[0].text}</p> : false}
    </div>

    <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
  </>


// Have staff in shared - depending on the site they are going too would display specific content ( IG, IV, IS, IC, IP )