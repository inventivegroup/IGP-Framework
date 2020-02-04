import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse 
} from 'reactstrap';

import { Link } from 'gatsby';

function getSubItems(data){
    let items = [];
    let counter = 0;

    for(let item of data){
        items.push(
            <DropdownItem key={counter} href={'/blog/' + item.sub_nav_link_label[0].text + '/'}>
                {item.sub_nav_link_label[0].text}
            </DropdownItem>
        )
        counter++;
    }

    return items
}

export default class Navigation extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false,
            collapsed: true,
            navbarDropdownBackgroundColor: 'transparent',
            mobileClass: '',
            logoColor: this.props.logoColor || "Navbar Light"
        };
    }

    toggleNavbar() {
        let {  navbarDropdownBackgroundColor } = this.state;

        if( navbarDropdownBackgroundColor === 'transparent'){
            this.setState({
                collapsed: !this.state.collapsed,
                navbarDropdownBackgroundColor: '#62c6ff',
                mobileClass: 'mobileNavigationMenu'
            });
            
        } else if (navbarDropdownBackgroundColor === '#62c6ff') {
            this.setState({
                collapsed: !this.state.collapsed,
                navbarDropdownBackgroundColor: 'transparent',
                mobileClass: ' '
            });
        } else {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }
    }

    render(){
        let { data } = this.props;
        let { navbarDropdownBackgroundColor, mobileClass, logoColor } = this.state;
        return (
            <NavItem className="Navigation">
                <Navbar className='Navigation' expand="md" dark>
                    { data.edges.map(edge => {
                            return (
                                <NavbarBrand>
                                    <Link to="/">
                                        {logoColor === 'Navbar Light' ? <img alt="Inventive Logo" className="logo" src={edge.node.logo_white.url}/> : <img alt="Inventive Logo" className="logo" src={edge.node.logo_black.url}/>}
                                    </Link>
                                </NavbarBrand>
                            )
                        })
                    }

                    <NavbarToggler style={{zIndex: '900'}} onClick={() => this.toggleNavbar()} className="mr-2" />

                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className={"ml-auto " + mobileClass} style={{backgroundColor: navbarDropdownBackgroundColor}} navbar>
                            { data.edges.map(edge => {
                                let navItems = [];
                                {

                                    edge.node.nav.forEach((navItem, index, arr) => {
                                            navItems.push(
                                                <>
                                                    { !!navItem.fields[0] && navItem.fields[0].sub_nav_link_label !== null ? (
                                                        <>
                                                            <DropdownToggle>
                                                                {navItem.primary.label[0].text}
                                                            </DropdownToggle>
                                                            <Dropdown isOpen={this.state.isOpen} nav>
                                                                <DropdownMenu right>
                                                                    {getSubItems(navItem.fields)}
                                                                </DropdownMenu>
                                                            </Dropdown> 
                                                        </> ) : (
                                                        <NavItem className="navItem">
                                                            { navItem.primary.link.__typeName === "PRISMIC_Post" ?
                                                                <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + index === arr.length - 1 ? ' lastInList' : ''} href={'/blog/' + navItem.primary.link._meta.uid}>{ navItem.primary.label[0].text }</NavLink>
                                                                : false
                                                            }
                                                            
                                                            { navItem.primary.link.__typename === "PRISMIC__FileLink" ?
                                                                <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + (index === arr.length - 1 ? ' lastInList' : '')} href={navItem.primary.link.url}>{ navItem.primary.label[0].text }</NavLink>
                                                                : false
                                                            }
                                                            
                                                            { navItem.primary.link.__typename === "PRISMIC__ExternalLink" ?
                                                                <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + (index === arr.length - 1 ? ' lastInList' : '')} href={navItem.primary.link.url}>{ navItem.primary.label[0].text }</NavLink>
                                                                : false
                                                            }
                                                            
                                                            { navItem.primary.link.__typename === "PRISMIC_Page" ?
                                                                <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + (index === arr.length - 1 ? ' lastInList' : '')} href={navItem.primary.link._meta.uid}>{ navItem.primary.label[0].text }</NavLink>
                                                                : false
                                                            }
                                                        </NavItem>)
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    return navItems;
                                })
                            }
                        </Nav>
                    </Collapse>

                </Navbar>
            </NavItem>
        )
    }
}
    