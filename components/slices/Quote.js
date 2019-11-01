import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Divider } from '.';

export default ({ slice }) =>
  <>
    <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

    <div className="quote-section" style={{width: '100vw', height: '500px', backgroundImage: `url("${slice.primary.portrait_author !== null ? slice.primary.portrait_author.url : ' ' }")`}}>
      <h2> { RichText.asText(slice.primary.quote) } </h2>
      <br/>
      <p>- {slice.primary.name_of_the_author[0].text}</p>
    </div>

    <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
  </>


// Have staff in shared - depending on the site they are going too would display specific content ( IG, IV, IS, IC, IP )