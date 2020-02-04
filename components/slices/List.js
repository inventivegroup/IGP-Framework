import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';
import BladeContainer from '../general/BladeContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
 
library.add(fas);

const getColor = (color) => {
    const res = (() => {
        switch(color){
            case "black":
                return '#1E2D3D';
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

            default: 
                return '#1E2D3D';
            
            break;
        }
    })();

    return res;
}

export default ({slice}) => {
    let { section_title, icon, text_color} = slice.primary;
    // check if image exists
    if (slice.primary.image1){
        var {image1} = slice.primary;
    } else {
        var image1 = '';
    }
    //check that there are no blank headers for these lists
    let fields = [];
    for (let item of slice.fields){
        if (item.item_header && item.item_header[0].text !== ""){
            fields.push(item);
        }
    }


    if (fields.length > 0){
        return (
            <div className="list">
                {section_title && section_title[0].text !== "" ? <h2 className="list-title" style={{color: getColor(text_color)}}>{section_title[0].text}</h2> : false}
                <div className={"container d-flex" + (image1 ? ' flex-row justify-content-center flex-wrap' : false)}>
                    <div className="list-container d-flex justify-content-center align-items-center">
                        <div className="list-body">
                            <div className="list-fade"></div>
                            {fields.map((item, i) => {
                                return (
                                    <div className={"list-item " + (i === 0 ? " first" : (i === fields.length - 1 ? ' last' : ' ')) + (fields.length === 1 ? " last" : ' ')}>
                                        <div className="list-header"><FontAwesomeIcon className="bubble" style={{color: getColor(text_color)}} icon="circle"/><h2 style={{color: getColor(text_color)}}>{item.item_header[0].text}</h2></div>
                                        {item.item_text && item.item_text[0].text !== ""
                                        ? <div className="list-content">{i === fields.length - 1 ? <div className="icon-container"><FontAwesomeIcon className="bottom-icon" style={{color: getColor(text_color)}} icon={icon ? icon[0].text : ''}/></div> : false}<p>{item.item_text[0].text}</p></div>
                                        : <div className="list-content">{i === fields.length - 1 ? <div className="icon-container"><FontAwesomeIcon className="bottom-icon" style={{color: getColor(text_color)}} icon={icon ? icon[0].text : ''}/></div> : false}<p></p></div>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {image1
                    ?
                    <div className="image-container d-flex justify-content-center align-items-center">
                        <div className="image-div">
                            <div className="image" style={{backgroundImage: `url(${image1.url})`}}></div>
                        </div>
                    </div>
                    :false
                    }
                </div>
            </div>
        )
    } else {
        return null;
    }
}