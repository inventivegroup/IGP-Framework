import React from 'react'
import GoogleMapReact from 'google-map-react';
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'
import mapImage from '../../images/map.png';
import { Divider } from './index';
 
const Marker = ({}) => <i className="fas fa-map-marker" style={{color: '#7E5BEF', fontSize: '30px'}}></i>;

export default ({slice}) =>{
    let { divider_top, divider_top_color, divider_top_flipped, divider_bottom, divider_bottom_color, divider_bottom_flipped } = slice.primary;
    return (
        <div className="map-image" style={{backgroundImage: `url(${mapImage})`, minHeight:'650px', backgroundPosition:'center', backgroundSize: 'cover'}}>
            <Divider className="top-divider" type={divider_top} backgroundColor={divider_top_color} side="top" flipped={divider_top_flipped}/>
            <Divider className="bottom-divider" type={divider_bottom} backgroundColor={divider_bottom_color} side="bottom" flipped={divider_bottom_flipped}/>
        </div>
    )
}