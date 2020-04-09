// eslinter no no-mixed-operators
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../utils/linkResolver';
import htmlSerializer from '../../utils/htmlSerializer';

import { Divider } from './index';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

library.add(fas)

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
        }
    })();

    return res;
}

export default class Plans extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            width: '1200px',
            activeTab: '1'
        }
    }

    componentWillMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleWindowSizeChange);
            this.setState({width: window.innerWidth})
            
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.handleWindowSizeChange);
            
        }
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    viewportWidth = () => {
        return window.innerWidth;
    }

    setActive = (tabNum) => {
        this.setState({activeTab: tabNum});
    }
    

    render(){
        let { slice } = this.props;

        let { 
            primary_section_color,
            secondary_section_color,
            gradient_angle1,
            divider_top,
            divider_top_color,
            divider_top_flipped,
            divider_bottom,
            divider_bottom_color,
            divider_bottom_flipped,
            popular_plan,
            display_as,
            section_title,
    
            plan_one_icon_name,
            plan_one_image,
            plan_one_name,
            show_plan_one,
            plan_one_price,
            plan_one_link,
            plan_one_custom_link_text,
            plan_one_perks,
            
            plan_two_icon_name,
            plan_two_image,
            plan_two_name,
            show_plan_two,
            plan_two_price,
            plan_two_link,
            plan_two_custom_link_text,
            plan_two_perks,
            
            plan_three_icon_name,
            plan_three_image,
            plan_three_name,
            show_plan_three,
            plan_three_price,
            plan_three_link,
            plan_three_custom_link_text,
            plan_three_perks,
            
            plan_four_icon_name,
            plan_four_image,
            plan_four_name,
            show_plan_four,
            plan_four_price,
            plan_four_link,
            plan_four_custom_link_text,
            plan_four_perks,
            
            plan_five_icon_name,
            plan_five_image,
            plan_five_name,
            show_plan_five,
            plan_five_price,
            plan_five_link,
            plan_five_custom_link_text,
            plan_five_perks 
        } = slice.primary;

        const { width, activeTab } = this.state;

        const isMobile = width <= 1400;

        return (
            <>
                <Divider type={divider_top} backgroundColor={divider_top_color} side="top" flipped={divider_top_flipped} />
            
                { isMobile ? 

                    <div className="tabs" id="mobile-plans-container" style={{background: 'linear-gradient(' + ((!!gradient_angle1 && gradient_angle1) > 360 ? 0 : gradient_angle1) + 'deg ,' + getGradient(primary_section_color) + "," + getGradient(secondary_section_color) + ')'}}>
                        <div className="tab-container">
                            <Nav tabs>
                                {!!show_plan_one && show_plan_one !== 'false' ?
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { this.setActive('1'); }}
                                    >
                                        { RichText.asText(plan_one_name)}
                                    </NavLink>
                                    </NavItem>
                                : false}

                                {!!show_plan_two && show_plan_two !== 'false' ?
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { this.setActive('2'); }}
                                    >
                                        { RichText.asText(plan_two_name) }
                                    </NavLink>
                                    </NavItem>
                                : false}

                                {!!show_plan_three && show_plan_three !== 'false' ?
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { this.setActive('3'); }}
                                    >
                                        { RichText.asText(plan_three_name)}
                                    </NavLink>
                                    </NavItem>
                                : false}
                                
                                {!!show_plan_four && show_plan_four !== 'false' ?
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { this.setActive('4'); }}
                                    >
                                        { RichText.asText(plan_four_name)}
                                    </NavLink>
                                    </NavItem>
                                : false}
                                
                                {!!show_plan_five && show_plan_five !== 'false' ? 
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => { this.setActive('5'); }}
                                        >
                                            {RichText.asText(plan_five_name)}
                                        </NavLink>
                                    </NavItem>
                                : false}
                            </Nav>
                            
                            <TabContent className="tab" activeTab={activeTab}>
                                { !!show_plan_one && show_plan_one !== 'false' ?
                                    <TabPane tabId="1">
                                        <div className="d-flex flex-wrap">
                                            { !!plan_one_image ? <div className="plan_image" style={{backgroundImage:'url("' + plan_one_image.url + '")'}}></div> : false}

                                            <div className='content'>
                                                { !!plan_one_icon_name ? <FontAwesomeIcon icon={plan_one_icon_name[0].text} /> : false}
                        
                                                { display_as === 'pricing' ? <> { !!plan_one_name ? <h3>{RichText.render(plan_one_name, linkResolver, htmlSerializer )}</h3> : false} </> : <> { !!plan_one_name ? <span className="image_shadow"><h3>{RichText.render(plan_one_name, linkResolver, htmlSerializer)}</h3></span> : false} </>  }
                                                
                                                { display_as === 'pricing' ?
                                                    <>
                                                        { !!plan_one_price && plan_one_price[0].text ===  "Free" ? <span className="pricingText">{RichText.render(plan_one_price, linkResolver, htmlSerializer)}</span> : <span><span className="price">${RichText.render(plan_one_price, linkResolver, htmlSerializer)}</span>/mo</span>} 
                                                        { !!plan_one_link ?
                                                            <div className="cta_btn_cont center">
                                                                { !!plan_one_link._meta && !!plan_one_link._meta ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_one_link._meta.uid}`}>{!!plan_one_custom_link_text ? plan_one_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_one_link.url}`}>{!!plan_one_custom_link_text ? plan_one_custom_link_text[0].text : "Learn more."}</a> }
                                                            </div> : false
                                                        } 
                                                    </>
                                                : false }

                                                { !!plan_one_perks ?
                                                    <div className="perks">
                                                        {RichText.render(plan_one_perks, linkResolver, htmlSerializer)}
                                                    </div>
                                                    : false
                                                }
                                            </div>
                                        </div>
                                    </TabPane>
                                : false }
                                
                                { !!show_plan_two && show_plan_two !== 'false' ? 
                                    <TabPane tabId="2">
                                        <div className="d-flex flex-wrap">
                                            { !!plan_two_image ?  <div className="plan_image" style={{backgroundImage:'url("' + plan_two_image.url + '")'}}></div> : false}
                                            
                                            <div className="content">
                                                { !!plan_two_icon_name ? <FontAwesomeIcon icon={plan_two_icon_name[0].text} /> : false}
                        
                                                { display_as === 'pricing' ? <> { !!plan_two_name ? <h3>{plan_two_name[0].text}</h3> : false} </> : <> { !!plan_two_name ? <span className="image_shadow"><h3>{plan_two_name[0].text}</h3></span> : false} </>  }
                                                
                                                { display_as === 'pricing' ?  
                                                
                                                <> 
                                                    { !!plan_two_price && plan_two_price[0].text ===  "Free" ? <span className="pricingText">{plan_two_price[0].text}</span> : <span><span className="price">${plan_two_price[0].text}</span>/mo</span>}
                                                    { !!plan_two_link ?
                                                        <div className="cta_btn_cont center">
                                                            { !!plan_two_link._meta && plan_two_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_two_link._meta.uid}`}>{!!plan_two_custom_link_text ? plan_two_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_two_link.url}`}>{!!plan_two_custom_link_text ? plan_two_custom_link_text[0].text : "Learn more."}</a> }
                                                        </div> : false
                                                    } 
                                                </>

                                                : false }

                                                { !!plan_two_perks ?
                                                    <div className="perks">
                                                        {RichText.render(plan_two_perks, linkResolver, htmlSerializer)}
                                                    </div>

                                                    : ''
                                                }
                                            </div>
                                        </div>
                                    </TabPane>
                                : false }

                                { !!show_plan_three && show_plan_three !== 'false' ? 
                                    <TabPane tabId="3">
                                        <div className="d-flex flex-wrap">
                                            { !!plan_three_image ? <div className="plan_image" style={{backgroundImage:'url("' + plan_three_image.url + '")'}}></div> : false }
                                            <div className="content">
                                                { !!plan_three_icon_name ? <FontAwesomeIcon icon={plan_three_icon_name[0].text} /> : false}
                        
                                                { display_as === 'pricing' ? <> { !!plan_three_name ? <h3>{plan_three_name[0].text}</h3> : false} </> : <> { !!plan_three_name ? <span className="image_shadow"><h3>{plan_three_name[0].text}</h3></span> : false} </>  }
                                                
                                                { display_as === 'pricing' ?  
                                                
                                                <> 
                                                    { !!plan_three_price && plan_three_price[0].text ===  "Free" ? <span className="pricingText">{plan_three_price[0].text}</span> : <span><span className="price">${plan_three_price[0].text}</span>/mo</span>} 
                                                    { !!plan_three_link ?
                                                        <div className="cta_btn_cont center">
                                                            { !!plan_three_link._meta && plan_three_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_three_link._meta.uid}`}>{!!plan_three_custom_link_text ? plan_three_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_three_link.url}`}>{!!plan_three_custom_link_text ? plan_three_custom_link_text[0].text : "Learn more."}</a> }
                                                        </div> : false
                                                    } 
                                                </>

                                                : false }

                                                { !!plan_three_perks ?
                                                    <div className="perks">
                                                        {RichText.render(plan_three_perks, linkResolver, htmlSerializer)}
                                                    </div>

                                                    : ''
                                                }
                                            </div>
                                        </div>
                                    </TabPane>
                                : false }

                                 { !!show_plan_four && show_plan_four !== 'false' ? 
                                    <TabPane tabId="4">
                                        <div className="d-flex flex-wrap">
                                            { !!plan_four_image ? <div className="plan_image" style={{backgroundImage:'url("' + plan_four_image.url + '")'}}></div> : false }
                                            <div className="content">

                                                { !!plan_four_icon_name ? <FontAwesomeIcon icon={plan_four_icon_name[0].text} /> : false}
                        
                                                { display_as === 'pricing' ? <> { !!plan_four_name ? <h3>{plan_four_name[0].text}</h3> : false} </> : <> { !!plan_four_name ? <span className="image_shadow"><h3>{plan_four_name[0].text}</h3></span> : false} </> }
                                                
                                                { display_as === 'pricing' ?  
                                                
                                                <> 
                                                    { !!plan_four_price && plan_four_price[0].text ===  "Free" || plan_four_price[0].text ===  "Inquire"  ? <span  className="pricingText">{plan_four_price[0].text}</span> : <span><span className="price">${plan_four_price[0].text}</span>/mo</span>} 
                                                    { !!plan_four_link ?
                                                        <div className="cta_btn_cont center">
                                                            { !!plan_four_link._meta && plan_four_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_four_link._meta.uid}`}>{!!plan_four_custom_link_text ? plan_four_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_four_link.url}`}>{!!plan_four_custom_link_text ? plan_four_custom_link_text[0].text : "Learn more."}</a> }
                                                        </div> : false
                                                    } 
                                                </>

                                                : false }

                                                { !!plan_four_perks ?
                                                    <div className="perks">
                                                        {RichText.render(plan_four_perks, linkResolver, htmlSerializer)}
                                                    </div>

                                                    : ''
                                                }
                                            </div>
                                        </div>
                                    </TabPane>
                                : false }

                                { !!show_plan_five && show_plan_five !== 'false' ?
                                    <TabPane tabId="5">
                                        <div classNam="d-flex flex-wrap">
                                            { !!plan_five_image ? <div className="plan_image" style={{backgroundImage:'url("' + plan_five_image.url + '")'}}></div> : false }

                                            <div className="content">
                                                { !!plan_five_icon_name ? <FontAwesomeIcon icon={plan_five_icon_name[0].text} /> : false}
                        
                                                { display_as === 'pricing' ? <> { !!plan_five_name ? <h3>{plan_five_name[0].text}</h3> : false} </> : <> { !!plan_five_image && !!plan_five_name ? <span className="image_shadow"><h3>{plan_five_name[0].text}</h3></span> : false} </>  }
                                                
                                                { display_as === 'pricing' ?  
                                                    <> 
                                                        { !!plan_five_price && plan_five_price[0].text ===  "Free" || plan_five_price[0].text ===  "Inquire"  ? <span  className="pricingText">{plan_five_price[0].text}</span> : <span><span className="price">${plan_five_price[0].text}</span>/mo</span>} 
                                                        { !!plan_five_link ?
                                                            <div className="cta_btn_cont center">
                                                                { !!plan_five_link && !!plan_five_link._meta ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_five_link._meta.uid}`}>{!!plan_five_custom_link_text ? plan_five_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_five_link.url}`}>{!!plan_five_custom_link_text ? plan_five_custom_link_text[0].text : "Learn more."}</a> }
                                                            </div> : false
                                                        } 
                                                    </>
                                                : false }

                                                { !!plan_five_perks ?
                                                    <div className="perks">
                                                        {RichText.render(plan_five_perks, linkResolver, htmlSerializer)}
                                                    </div>
                                                    : false
                                                }
                                            </div>
                                        </div>
                                    </TabPane>
                                : false}

                            </TabContent>
                        
                        </div>
                    </div>
                
                :

                <div id="plans-container" className={"cardView"} style={{background: 'linear-gradient(' + ((!!gradient_angle1 && gradient_angle1) > 360 ? 0 : gradient_angle1) + 'deg ,' + getGradient(primary_section_color) + "," + getGradient(secondary_section_color) + ')'}}>
                    <div>
                        { !!section_title ? <h2 className="big_title uppercase smoke p-lg">{RichText.asText(section_title, linkResolver, htmlSerializer)}</h2> : false }
                    </div>
                    
                    <div className={"plans " + display_as}>
                        { show_plan_one === 'true' ? 
                            <div className={display_as + " " + (popular_plan === "plan_one" ? "popular" : "") }>

                                { !!plan_one_icon_name ? <FontAwesomeIcon icon={plan_one_icon_name[0].text} /> : ''}
        
                                { display_as === 'pricing' ? <> { !!plan_one_name ? <h3>{plan_one_name[0].text}</h3> : false} </> : <> { !!plan_one_name ? <div className="plan_image" style={{backgroundImage:'url("' + plan_one_image.url + '")'}}><span className="image_shadow"><h3 className="uppercase">{plan_one_name[0].text}</h3></span></div> : false} </>  }
                                
                                { display_as === 'pricing' ?
                                
                                <> 
                                    { !!plan_one_price && plan_one_price[0].text ===  "Free" ? <span className="pricingText">{plan_one_price[0].text}</span> : <span><span className="price">${plan_one_price[0].text}</span>/mo</span>} 
                                    { !!plan_one_link ?
                                        <div className="cta_btn_cont center">
                                            { !!plan_one_link._meta && plan_one_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_one_link._meta.uid}`}>{!!plan_one_custom_link_text ? plan_one_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_one_link.url}`}>{!!plan_one_custom_link_text ? plan_one_custom_link_text[0].text : "Learn more."}</a> }
                                        </div> : false
                                    } 
                                </>

                                : false }

                                { !!plan_one_perks ?
                                    <div className="perks">
                                        {RichText.render(plan_one_perks, linkResolver, htmlSerializer)}
                                    </div>

                                    : ''
                                }
                            </div>
                        : false }
                        
                        { show_plan_two === 'true' ? 
                            <div className={display_as + " " + (popular_plan === "plan_two" ? "popular" : "") }>

                                { !!plan_two_icon_name ? <FontAwesomeIcon icon={plan_two_icon_name[0].text} /> : ''}
        
                                { display_as === 'pricing' ? <> { !!plan_two_name ? <h3>{plan_two_name[0].text}</h3> : false} </> : <> { !!plan_two_name ? <div className="plan_image" style={{backgroundImage:'url("' + plan_two_image.url + '")'}}><span className="image_shadow"><h3 className="uppercase">{plan_two_name[0].text}</h3></span></div> : false} </>  }
                                
                                { display_as === 'pricing' ?  
                                
                                <> 
                                    { !!plan_two_price && plan_two_price[0].text ===  "Free" ? <span className="pricingText">{plan_two_price[0].text}</span> : <span><span className="price">${plan_two_price[0].text}</span>/mo</span>}
                                    { !!plan_two_link ?
                                        <div className="cta_btn_cont center">
                                            { !!plan_two_link._meta && plan_two_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_two_link._meta.uid}`}>{!!plan_two_custom_link_text ? plan_two_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_two_link.url}`}>{!!plan_two_custom_link_text ? plan_two_custom_link_text[0].text : "Learn more."}</a> }
                                        </div> : false
                                    } 
                                </>

                                : false }

                                { !!plan_two_perks ?
                                    <div className="perks">
                                        {RichText.render(plan_two_perks, linkResolver, htmlSerializer)}
                                    </div>

                                    : ''
                                }
                            </div>
                        : false }
                        
                        { show_plan_three === 'true' ? 
                            <div className={display_as + " " + (popular_plan === "plan_three" ? "popular" : "") }>

                                { !!plan_three_icon_name ? <FontAwesomeIcon icon={plan_three_icon_name[0].text} /> : ''}
        
                                { display_as === 'pricing' ? <> { !!plan_three_name ? <h3>{plan_three_name[0].text}</h3> : false} </> : <> { !!plan_three_name ? <div className="plan_image" style={{backgroundImage:'url("' + plan_three_image.url + '")'}}><span className="image_shadow"><h3 className="uppercase">{plan_three_name[0].text}</h3></span></div>: false} </>  }
                                
                                { display_as === 'pricing' ?  
                                
                                <> 
                                    { !!plan_three_price && plan_three_price[0].text ===  "Free" ? <span className="pricingText">{plan_three_price[0].text}</span> : <span><span className="price">${plan_three_price[0].text}</span>/mo</span>} 
                                    { !!plan_three_link ?
                                        <div className="cta_btn_cont center">
                                            { !!plan_three_link._meta && plan_three_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_three_link._meta.uid}`}>{!!plan_three_custom_link_text ? plan_three_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_three_link.url}`}>{!!plan_three_custom_link_text ? plan_three_custom_link_text[0].text : "Learn more."}</a> }
                                        </div> : false
                                    } 
                                </>

                                : false }

                                { !!plan_three_perks ?
                                    <div className="perks">
                                        {RichText.render(plan_three_perks, linkResolver, htmlSerializer)}
                                    </div>

                                    : ''
                                }
                            </div>
                        : false }
                        
                        { show_plan_four === 'true' ? 
                            <div className={display_as + " " + (popular_plan === "plan_four" ? "popular" : "") }>

                                { !!plan_four_icon_name ? <FontAwesomeIcon icon={plan_four_icon_name[0].text} /> : ''}
        
                                { display_as === 'pricing' ? <> { !!plan_four_name ? <h3>{plan_four_name[0].text}</h3> : false} </> : <> { !!plan_four_name ? <div className="plan_image" style={{backgroundImage:'url("' + plan_four_image.url + '")'}}><span className="image_shadow"><h3 className="uppercase">{plan_four_name[0].text}</h3></span></div> : false} </> }
                                
                                { display_as === 'pricing' ?  
                                
                                <> 
                                    { !!plan_four_price[0].text && plan_four_price[0].text ===  "Free" || plan_four_price[0].text ===  "Inquire"  ? <span  className="pricingText">{plan_four_price[0].text}</span> : <span><span className="price">${plan_four_price[0].text}</span>/mo</span>} 
                                    { !!plan_four_link ?
                                        <div className="cta_btn_cont center">
                                            { !!plan_four_link._meta && plan_four_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_four_link._meta.uid}`}>{!!plan_four_custom_link_text ? plan_four_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_four_link.url}`}>{!!plan_four_custom_link_text ? plan_four_custom_link_text[0].text : "Learn more."}</a> }
                                        </div> : false
                                    } 
                                </>

                                : false }

                                { !!plan_four_perks ?
                                    <div className="perks">
                                        {RichText.render(plan_four_perks, linkResolver, htmlSerializer)}
                                    </div>

                                    : ''
                                }
                            </div>
                        : false }
                        
                        { show_plan_five === 'true' ? 
                            <div className={display_as + " " + (popular_plan === "plan_five" ? "popular" : "") }>

                                { !!plan_five_icon_name ? <FontAwesomeIcon icon={plan_five_icon_name[0].text} /> : ''}
        
                                { display_as === 'pricing' ? <> { !!plan_five_name ? <h3>{plan_five_name[0].text}</h3> : false} </> : <> { !!plan_five_name ? <div className="plan_image" style={{backgroundImage:'url("' + plan_five_image.url + '")'}}><span className="image_shadow"><h3 className="uppercase">{plan_five_name[0].text}</h3></span></div> : false} </>  }
                                
                                { display_as === 'pricing' ?  
                                
                                <> 
                                    { !!plan_five_price[0].text && plan_five_price[0].text ===  "Free" || plan_five_price[0].text ===  "Inquire"  ? <span  className="pricingText">{plan_five_price[0].text}</span> : <span><span className="price">${plan_five_price[0].text}</span>/mo</span>} 
                                    { !!plan_five_link ?
                                        <div className="cta_btn_cont center">
                                            { !!plan_five_link._meta && plan_five_link._meta !== undefined ? <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_five_link._meta.uid}`}>{!!plan_five_custom_link_text ? plan_five_custom_link_text[0].text : "Learn more."}</a> : <a target="_blank" rel="noopener noreferrer"  className="border_cta_btn" href={`${plan_five_link.url}`}>{!!plan_five_custom_link_text ? plan_five_custom_link_text[0].text : "Learn more."}</a> }
                                        </div> : false
                                    } 
                                </>

                                : false }

                                { plan_five_perks !== null?
                                    <div className="perks">
                                        {RichText.render(plan_five_perks, linkResolver, htmlSerializer)}
                                    </div>

                                    : ''
                                }
                            </div>
                        : false}
                    </div>
                </div>
                }


                <Divider type={divider_bottom} backgroundColor={divider_bottom_color} side="bottom" flipped={divider_bottom_flipped} />
            </>
        )
    }
}
