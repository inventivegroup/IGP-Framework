import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import htmlSerializer from '../../utils/htmlSerializer';
// import { Coffee, Bolt } from '@fortawesome/free-solid-svg-icons';

const getGradient = (color) => {
    const res = (() => {
        switch(color){
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


            case "smoke" : 
                return '#E0E6ED';

            case "none" : 
                return '100%, white';

            default : 
                return '100%, white';

            break;
        }
    })();

    return res;
}


export default ({ slice }) =>{
    let {primary_section_color,
        secondary_section_color,
        gradient_angle1,
        section_divider_top,
        section_divider_top_color,
        section_divider_bottom,
        section_divider_bottom_color,
        popular_plan,

        plan_one_icon_name,
        plan_one_name,
        plan_one_price,
        plan_one_link,
        plan_one_custom_link_text,
        plan_one_perks,
        
        plan_two_icon_name,
        plan_two_name,
        plan_two_price,
        plan_two_link,
        plan_two_custom_link_text,
        plan_two_perks,
        
        plan_three_icon_name,
        plan_three_name,
        plan_three_price,
        plan_three_link,
        plan_three_custom_link_text,
        plan_three_perks,
        
        plan_four_icon_name,
        plan_four_name,
        plan_four_price,
        plan_four_link,
        plan_four_custom_link_text,
        plan_four_perks,
        
        plan_five_icon_name,
        plan_five_name,
        plan_five_price,
        plan_five_link,
        plan_five_custom_link_text,
        plan_five_perks
    } = slice.primary;

    return (
        <>
            { slice.primary.section_divider_top === "diagonal" && slice.primary.section_divider_top_flipped === "false" ? <div className={" diagonal_top " + slice.primary.section_divider_top_color}></div> : " "}
            { slice.primary.section_divider_top === "diagonal" && slice.primary.section_divider_top_flipped === "true" ? <div className={" diagonal_bottom " + slice.primary.section_divider_top_color}></div> : " "}
            
            <div className={"cardView"} style={{background: 'linear-gradient(' + ((slice.primary.gradient_angle1 !== null && slice.primary.gradient_angle1) > 360 ? 0 : slice.primary.gradient_angle1) + 'deg ,' + getGradient(slice.primary.primary_section_color) + "," + getGradient(slice.primary.secondary_section_color) + ')'}}>
                <div className="plans">
                    <div className="plan">
                        {/* {plan_one_icon_name !== null ? <FontAwesomeIcon icon={`${plan_one_icon_name[0].text}`} /> : ''} */}
                        {plan_one_name !== null ? <h3>{plan_one_name[0].text}</h3> : ""}
                        { plan_one_price[0].text !== null && plan_one_price[0].text ===  "Free" ? <p>{plan_one_price[0].text}</p> : <p><span className="price">${plan_one_price[0].text}</span>/mo</p>}
                        
                        { plan_one_link !== null ?
                            <div className="cta_btn_cont">
                                <p>{ plan_one_link._meta !== null && plan_one_link._meta !== undefined ? <a className="secondary_cta_btn" href={`${plan_one_link._meta.uid}`}>{plan_one_custom_link_text !== null ? plan_one_custom_link_text[0].text : "Learn more."}</a> : <a className="secondary_cta_btn" href={`${plan_one_link.url}`}>{plan_one_custom_link_text !== null ? plan_one_custom_link_text[0].text : "Learn more."}</a> }</p>
                            </div> 
                            
                            : ''
                        }

                        { plan_one_perks !== null?
                            <div className="perks">
                                {RichText.render(plan_one_perks, linkResolver, htmlSerializer)}
                            </div>

                            : ''
                        }
                    </div>
                    
                    <div className="plan">
                        {/* {plan_two_icon_name !== null ? <FontAwesomeIcon icon={['fa', `fa-${plan_two_icon_name[0].text}`]} /> : ''} */}
                        {plan_two_name !== null ? <h3>{plan_two_name[0].text}</h3> : ""}
                        { plan_two_price[0].text !== null && plan_two_price[0].text ===  "Free" ? <span className="price">{plan_two_price[0].text}</span>: <p><span className="price">${plan_two_price[0].text}</span>/mo</p>}
                        
                        { plan_two_link !== null ?
                            <div className="cta_btn_cont">
                                <p>{ plan_two_link._meta !== null && plan_two_link._meta !== undefined ? <a className="secondary_cta_btn" href={`${plan_two_link._meta.uid}`}>{plan_two_custom_link_text !== null ? plan_two_custom_link_text[0].text : "Learn more."}</a> : <a className="secondary_cta_btn" href={`${plan_two_link.url}`}>{plan_two_custom_link_text !== null ? plan_two_custom_link_text[0].text : "Learn more."}</a> }</p>
                            </div> 
                            
                            : ''
                        }

                        { plan_two_perks !== null?
                            <div className="perks">
                                {RichText.render(plan_two_perks, linkResolver, htmlSerializer)}
                            </div>

                            : ''
                        }
                    </div>
                    
                    <div className="plan popular">
                        {/* {plan_three_icon_name !== null ? <FontAwesomeIcon icon={['fa', `fa-${plan_three_icon_name[0].text}`]} /> : ''} */}
                        {plan_three_name !== null ? <h3>{plan_three_name[0].text}</h3> : ""}
                        { plan_three_price[0].text !== null && plan_three_price[0].text ===  "Free" ? <span className="price">{plan_three_price[0].text}</span> : <p><span className="price">${plan_three_price[0].text}</span>/mo</p>}
                        
                        { plan_three_link !== null ?
                            <div className="cta_btn_cont">
                                <p>{ plan_three_link._meta !== null && plan_three_link._meta !== undefined ? <a className="primary_cta_btn p-2" href={`${plan_three_link._meta.uid}`}>{plan_three_custom_link_text !== null ? plan_three_custom_link_text[0].text : "Learn more."}</a> : <a className="primary_cta_btn p-2" href={`${plan_three_link.url}`}>{plan_three_custom_link_text !== null ? plan_three_custom_link_text[0].text : "Learn more."}</a> }</p>
                            </div> 
                            
                            : ''
                        }

                        { plan_three_perks !== null?
                            <div className="perks">
                                {RichText.render(plan_three_perks, linkResolver, htmlSerializer)}
                            </div>

                            : ''
                        }
                    </div>
                    
                    <div className="plan">
                        {/* {plan_four_icon_name !== null ? <FontAwesomeIcon icon={['fa', `fa-${plan_four_icon_name[0].text}`]} /> : ''} */}
                        {plan_four_name !== null ? <h3>{plan_four_name[0].text}</h3> : ""}
                        { plan_four_price[0].text !== null && plan_four_price[0].text ===  "Inquire" ? <span className="price">{plan_four_price[0].text}</span> : <p><span className="price">${plan_four_price[0].text}</span>/mo</p>}
                        
                        { plan_four_link !== null ?
                            <div className="cta_btn_cont">
                                <p>{ plan_four_link._meta !== null && plan_four_link._meta !== undefined ? <a className="secondary_cta_btn" href={`${plan_four_link._meta.uid}`}>{plan_four_custom_link_text !== null ? plan_four_custom_link_text[0].text : "Learn more."}</a> : <a className="secondary_cta_btn" href={`${plan_four_link.url}`}>{plan_four_custom_link_text !== null ? plan_four_custom_link_text[0].text : "Learn more."}</a> }</p>
                            </div> 
                            
                            : ''
                        }

                        { plan_four_perks !== null?
                            <div className="perks">
                                {RichText.render(plan_four_perks, linkResolver, htmlSerializer)}
                            </div>

                            : ''
                        }
                    </div>
                    
                    <div className="plan">
                        {/* {plan_five_icon_name !== null ? <FontAwesomeIcon icon={['fa', `fa-${plan_five_icon_name[0].text}`]} /> : ''} */}
                        {plan_five_name !== null ? <h3>{plan_five_name[0].text}</h3> : ""}
                        { plan_five_price[0].text !== null && plan_five_price[0].text ===  "Free" || plan_five_price[0].text === "" ? <span className="price">{plan_five_price[0].text}</span> : <p><span className="price">${plan_five_price[0].text}</span>/mo</p>}
                        
                        { plan_five_link !== null ?
                            <div className="cta_btn_cont">
                                { plan_five_link._meta !== null ? <a className="secondary_cta_btn" href={`${plan_five_link._meta.uid}`}>{plan_five_custom_link_text !== null ? plan_five_custom_link_text[0].text : "Learn more."}</a> : <a className="secondary_cta_btn" href={`${plan_five_link.url}`}>{plan_five_custom_link_text !== null ? plan_five_custom_link_text[0].text : "Learn more."}</a> }
                            </div> 
                            
                            : ''
                        }

                        { plan_five_perks !== null?
                            <div className="perks">
                                {RichText.render(plan_five_perks, linkResolver, htmlSerializer)}
                            </div>

                            : ''
                        }
                    </div>
                </div>
            </div>

            { slice.primary.section_divider_bottom === "diagonal" && slice.primary.section_divider_bottom_flipped === "false" ?  <div className={" diagonal_bottom " + slice.primary.section_divider_bottom_color}></div> : " "}
            { slice.primary.section_divider_bottom === "diagonal" && slice.primary.section_divider_bottom_flipped === "true" ? <div className={" diagonal_top " + slice.primary.section_divider_bottom_color}></div> : " "}
        </>
    )
}