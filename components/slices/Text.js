import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'
import { Divider } from './index';

export default ({ slice }) =>
  <>
    <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.divider_top_color} side="top" flipped={slice.primary.divider_top_flipped} />

    <div className="post-text container">
      <div>
        { RichText.render(slice.primary.text, linkResolver, htmlSerializer) }
      </div>
    </div>

    <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.divider_bottom_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
  </>