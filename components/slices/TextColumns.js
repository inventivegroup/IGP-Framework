import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import { Row, Col } from 'reactstrap';
import { Divider } from './index';

library.add(fas)


export default ({slice}) => {
    return (
        <>
            <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.primary_blade_color} side="top" flipped={slice.primary.divider_top_flipped} />

            <div className="text-col">
                <h2 className="big_title uppercase">{slice.primary.blade_title !== null ? RichText.asText(slice.primary.blade_title) : false}</h2>
                <Row className="d-flex columns flex-wrap">
                {slice.fields.map(item => {
                    return (
                        <Col className="d-flex flex-column align-items-center align-items-sm-start" xs="12" sm="6" md={slice.fields.length > 2 ? '4' : '6'}>
                            {!!item.featured_image ? <img className="featured_image" alt="Featured" src={item.featured_image.url}/> : false }
                            {!!item.featured_icon ? <FontAwesomeIcon className="text-columns-icon" icon={item.featured_icon[0].text}/> : false }
                            <h3>{ !!item.section_subtitle ? RichText.render(item.section_subtitle, linkResolver, htmlSerializer) : " " }</h3>
                            <p className="text-columns-text">{ !!item.content ? RichText.render(item.content, linkResolver, htmlSerializer) : " " }</p>
                        </Col>
                    );
                })}
                </Row>
            </div>
            
            <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.primary_blade_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
        </>
    )
}