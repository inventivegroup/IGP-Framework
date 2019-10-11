import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import { Container, Row, Col } from 'reactstrap';


export default ({slice}) => {
    return (
        <>
        <Container className="text-col">
            {slice.primary.blade_title !== null ? RichText.render(slice.primary.blade_title, linkResolver, htmlSerializer) : false}
            <Row className="d-flex columns">
            {slice.fields.map(item => {
                return (
                    <Col xs="12" md="6" xl={slice.fields.length > 2 ? '4' : '6'}>
                        {item.featured_image !== null ? <img className="featured_image" src={item.featured_image.url}/> : false }
                        {/* <div className="staff_member-image" style={{backgroundImage: `url(${item.staff_image.url})`}}></div> */}
                        <h3>{ item.section_subtitle !== null ? RichText.render(item.section_subtitle, linkResolver, htmlSerializer) : " " }</h3>
                        {/* <span>{ item.job_title !== null ? RichText.render(item.job_title, linkResolver, htmlSerializer) : " " }</span> */}
                        <p>{ item.content !== null ? RichText.render(item.content, linkResolver, htmlSerializer) : " " }</p>
                    </Col>
                );
            })}
            </Row>
        </Container>
        </>
    )
}