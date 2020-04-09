// Using Bootstrap, Reactstrap, React Count Up, and React Visibility Sensor from npm

import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import BladeContainer from '../general/BladeContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
 
library.add(fas);

const getColor = (color) => {
    const res = (() => {
        switch(color){
            case "smoke":
                return '#E0E6ED';
            
            case "studios":
                return '#7E5BEF';
  
            case "studios light":
                return '#A389F4';
  
            case "studios dark":
                return '#592DEA'
  
            case "studios black":
                return '#14001D'
  
  
            case "patriots":
                return '#0000FF'
  
            case "patriots light":
                return '#0066ff'
  
            case "patriots dark":
                return '#0000b2'
  
            case "patriots black":
                return '#000033'
  
  
            case "inventive":
                return '#1FB6FF'
  
            case "inventive light":
                return '#85D7FF'
  
            case "inventive dark":
                return '#009EEB'
  
            case "inventive black":
                return '#00151A'
  
  
            case "cares":
                return '#13CE66'
  
            case "cares light":
                return '#29EB7F'
  
            case "cares dark":
                return '#0F9F4F'
  
            case "cares black":
                return '#002A02'
  
  
            case "staffing":
                return '#FFC82C'
  
            case "staffing light":
                return '#FFD55F'
  
            case "staffing dark":
                return '#F8B700'
  
            case "staffing black":
                return '#1A1A00'
  
  
            case "academy":
                return '#FE8A00'
  
            case "academy light":
                return '#FFA827'
  
            case "academy dark":
                return '#DB7000'
  
            case "academy black":
                return '#331C00'
  
  
            case "ventures":
                return '#FE0500'
  
            case "ventures light":
                return '#FF6E6B'
  
            case "ventures dark":
                return '#D40000'
  
            case "ventures black":
                return '#330100'
  
            case "white":
              return '#ffffff'
  
            case "none" : 
                return 'transparent';
  
            default:
              return '#ffffff';
        }
    })();
  
    return res;
}

const getSpecs = (item, i) => {
    return (
        <CountUp
            className="text-center"
            start={0}
            decimals={`${item.number}`.includes('.') ? 2 : 0}
            separator=","
            end={item.number}
            duration="3"
            prefix={item.prefix ? item.prefix[0].text : ''}
            suffix={item.suffix ? item.suffix[0].text : ''}
            redraw={true}
            key={i}
        >
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} partialVisibility={true} delayedCall>
                    <h3 className="counter" ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    )
}

export default ({slice}) => {
    let { divider_top, divider_bottom, primary_blade_color1, secondary_blade_color1, gradient_angle1, font_shade } = slice.primary;
    return (
        <BladeContainer topDivider={divider_top} bottomDivider={divider_bottom} primaryColor={primary_blade_color1} secondaryColor={secondary_blade_color1} gradient={gradient_angle1}>
            <div className={"count-up" + (font_shade === "white" ? ' light' : ' dark')}>
                <div>
                    {slice.primary.section_title ? <h2 className="col-12 text-center section-title">{slice.primary.section_title[0].text}</h2> : false}
                </div>
                <div className="d-flex flex-wrap" style={{justifyContent: 'space-evenly'}}>
                    {slice.fields.map((item, i)=>{
                        return (
                            <div className="d-flex flex-column align-items-center custom-column">
                                {item.icon ? <div className="icon-container d-flex justify-content-center align-items-center"><FontAwesomeIcon style={{color: getColor(item.icon_color)}} className="custom-icon" icon={item.icon[0].text}/></div> : false}
                                {getSpecs(item, i)}
                                {item.text ? <h3 className="counter-text text-center">{RichText.render(item.text, linkResolver, htmlSerializer)}</h3> : false}
                            </div>
                        );
                    })}
                </div>
            </div>
        </BladeContainer>
    )
}