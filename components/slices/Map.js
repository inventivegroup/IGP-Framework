import React from 'react'
import GoogleMapReact from 'google-map-react';
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

const Marker = ({}) => <i className="fas fa-map-marker" style={{color: '#7E5BEF', fontSize: '30px'}}></i>;

export default ({slice}) =>{
    let {latitude, longitude} = slice.primary.map_coordinates;
    return (
            <div className="map" style={{height: '500px', width: '100%'}}>
                <GoogleMapReact 
                bootstrapURLKeys={{key: 'AIzaSyAhGAQpTOZJhQj1az_am5DXSLZ5-0G0VR0'}}
                defaultCenter={{lat: latitude, lng: longitude}}
                defaultZoom={15}
                >
                    <Marker lat={latitude} lng={longitude}/>
                </GoogleMapReact>
            </div>
    )
}