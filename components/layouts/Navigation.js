import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Navbar,
    NavbarBrand,
    UncontrolledDropdown,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

import { Link } from 'gatsby';

function getSubItems(data) {
    let items = [];
    let counter = 0;

    for (let item of data) {
        items.push(
            <DropdownItem key={counter} href={'/blog/' + item.sub_nav_link_label[0].text + '/'}>
                {item.sub_nav_link_label[0].text}
            </DropdownItem>
        )
        counter++;
    }

    return items
}

function getMenuItems(nav, logoColor){
    let menuItems = [];

    nav.forEach((navItem, index, arr) => {
        menuItems.push(
            <>
                {!!navItem.fields[0] && navItem.fields[0].sub_nav_link_label !== null ? (
                    <>
                        <DropdownToggle>
                            {navItem.primary.label[0].text}
                        </DropdownToggle>
                        <Dropdown isOpen={this.state.isOpen} nav>
                            <DropdownMenu right>
                                {getSubItems(navItem.fields)}
                            </DropdownMenu>
                        </Dropdown>
                    </>) : (
                        <>
                            {navItem.primary.link.__typeName === "PRISMIC_Post" ?
                                <DropdownItem target="_blank" style={{fontWeight: '550', fontSize: '15px'}} className={"navbarBlack" + index === arr.length - 1 ? ' lastInList' : ' custom-menu-item text-center'} href={'/blog/' + navItem.primary.link._meta.uid}>{navItem.primary.label[0].text}</DropdownItem>
                                : false
                            }

                            {navItem.primary.link.__typename === "PRISMIC__FileLink" ?
                                <DropdownItem target="_blank" style={{fontWeight: '550', fontSize: '15px'}} className={"navbarBlack" + (index === arr.length - 1 ? ' lastInList' : ' custom-menu-item text-center')} href={navItem.primary.link.url}>{navItem.primary.label[0].text}</DropdownItem>
                                : false
                            }

                            {navItem.primary.link.__typename === "PRISMIC__ExternalLink" ?
                                <DropdownItem target="_blank" style={{fontWeight: '550', fontSize: '15px'}} className={"navbarBlack" + (index === arr.length - 1 ? ' lastInList' : ' custom-menu-item text-center')} href={navItem.primary.link.url}>{navItem.primary.label[0].text}</DropdownItem>
                                : false
                            }

                            {navItem.primary.link.__typename === "PRISMIC_Page" ?
                                <DropdownItem target="_blank" style={{fontWeight: '550', fontSize: '15px'}} className={"navbarBlack" + (index === arr.length - 1 ? ' lastInList' : ' custom-menu-item text-center')} href={navItem.primary.link._meta.uid}>{navItem.primary.label[0].text}</DropdownItem>
                                : false
                            }
                        </>)
                }
            </>
        )
    })
    return menuItems;
}

export default class Navigation extends React.Component {
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


    render() {
        let { navbarDropdownBackgroundColor, logoColor } = this.state;
        let { nav, logo_white, logo_black } = this.props.data;
        return (
                <Navbar className="Navigation">
                    <NavbarBrand>
                        <Link to="/">
                            {logoColor === 'Navbar Light' ? <img alt="Inventive Logo" className="logo" src={logo_white.url} /> : <img alt="Inventive Logo" className="logo" src={logo_black.url} />}
                        </Link>
                    </NavbarBrand>

                    <Nav className="ml-auto Navigation-items" style={{ backgroundColor: navbarDropdownBackgroundColor }} navbar>
                        {
                            nav.map((navItem, index, arr) => {
                                return (
                                    !!navItem.fields[0] && navItem.fields[0].sub_nav_link_label !== null ? (

                                        <UncontrolledDropdown>
                                            <DropdownToggle>
                                            {navItem.primary.label[0].text}
                                            </DropdownToggle>
                                            <Dropdown isOpen={this.state.isOpen} nav>
                                                <DropdownMenu right>
                                                    {getSubItems(navItem.fields)}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </UncontrolledDropdown>
                                    ) : (
                                            <NavItem className="d-none d-md-inline mx-3">
                                                {navItem.primary.link.__typeName === "PRISMIC_Post" ?
                                                    <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + index === arr.length - 1 ? ' lastInList' : ''} href={'/blog/' + navItem.primary.link._meta.uid}>{navItem.primary.label[0].text}</NavLink>
                                                    : false
                                                }

                                                {navItem.primary.link.__typename === "PRISMIC__FileLink" ?
                                                    <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + (index === arr.length - 1 ? ' lastInList' : '')} href={navItem.primary.link.url}>{navItem.primary.label[0].text}</NavLink>
                                                    : false
                                                }

                                                {navItem.primary.link.__typename === "PRISMIC__ExternalLink" ?
                                                    <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + (index === arr.length - 1 ? ' lastInList' : '')} href={navItem.primary.link.url}>{navItem.primary.label[0].text}</NavLink>
                                                    : false
                                                }

                                                {navItem.primary.link.__typename === "PRISMIC_Page" ?
                                                    <NavLink className={(logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack') + (index === arr.length - 1 ? ' lastInList' : '')} href={"/" + navItem.primary.link._meta.uid}> {navItem.primary.label[0].text}</NavLink>
                                                    : false
                                                }
                                            </NavItem>)
                                );
                            })
                        }
                        <UncontrolledDropdown className="d-inline d-md-none custom-menu">
                            <DropdownToggle className={"border-0 custom-menu-icon " + (logoColor === 'Navbar Light' ? 'navbarWhite' : 'navbarBlack')}>
                                <FontAwesomeIcon icon="bars" />
                            </DropdownToggle>
                            <DropdownMenu className="shadow-none" right>
                                {getMenuItems(nav, logoColor)}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
        )
    }
}