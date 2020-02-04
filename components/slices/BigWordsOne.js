import React from 'react';
import BladeContainer from '../general/BladeContainer';

const getColor = (color) => {
    const res = (() => {
        switch(color){
            case "white":
                return '#ffffff'
      
            case "dark":
                return '#1E2D3D'
                
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
  
            case "none" : 
                return 'transparent'
  
            default:
              return '#ffffff'
            
            break;
        }
    })();
  
    return res;
}

export default ({ slice, color }) => {
    let { title, text_alignment, primary_blade_color1, secondary_blade_color1, gradient_angle1, font_color, divider_top, divider_bottom } = slice.primary;
    return (
        <BladeContainer topDivider={divider_top} bottomDivider={divider_bottom} primaryColor={primary_blade_color1} secondaryColor={secondary_blade_color1} gradient={gradient_angle1}>
            <div className={"big-words-one d-flex align-items-center"} style={{color: getColor(font_color)}}>
                <div className="container">
                    <div className={"row justify-content-center justify-content-md-" + (text_alignment === 'left' ? 'start' : (text_alignment === 'right' ? 'end' : 'center'))}>
                        {title && (title[0].text !== '') ? <h2 className="the-big-words">{title[0].text}</h2> : false}
                    </div>
                </div>
            </div>
        </BladeContainer>
    )
}
