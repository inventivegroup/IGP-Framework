import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import { Container, Row, Col } from 'reactstrap';
import { Divider } from './index';


export default ({slice}) => {
    return (
        <>
            <Divider type={slice.primary.divider_top} backgroundColor={slice.primary.primary_blade_color} side="top" flipped={slice.primary.divider_top_flipped} />

            <div className="text-col">
                <h2 className="big_title">{slice.primary.blade_title !== null ? RichText.asText(slice.primary.blade_title) : false}</h2>
                <Row className="d-flex columns flex-wrap">
                {slice.fields.map(item => {
                    return (
                        <Col xs="12" md="6" xl={slice.fields.length > 2 ? '4' : '6'}>
                            {item.featured_image !== null ? <img className="featured_image" src={item.featured_image.url}/> : false }
                            <h3>{ item.section_subtitle !== null ? RichText.render(item.section_subtitle, linkResolver, htmlSerializer) : " " }</h3>
                            <p>{ item.content !== null ? RichText.render(item.content, linkResolver, htmlSerializer) : " " }</p>
                        </Col>
                    );
                })}
                </Row>
            </div>
            
            <Divider type={slice.primary.divider_bottom} backgroundColor={slice.primary.primary_blade_color} side="bottom" flipped={slice.primary.divider_bottom_flipped} />
        </>
    )
}