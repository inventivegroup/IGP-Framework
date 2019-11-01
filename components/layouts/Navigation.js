import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){
        let { data } = this.props;
        return (
            <NavItem className="Navigation">
            <Navbar color="black" className='Navigation' expand="md">
                <NavbarBrand>
                    <Link to="/">
                        <img alt="Inventive Logo" className="logo" src={"https://inventivedev.wpengine.com/wp-content/uploads/2018/09/inventive-logo-white-transparent.png"}/>
                    </Link>
                </NavbarBrand>

                <Nav className="ml-auto container" navbar>
                    { data.edges.map(edge => {
                        let navItems = [];
                            {
                                edge.node.nav.forEach((navItem, index) => {

                                    navItems.push(
                                        <>
                                            { !!navItem.fields[0] && navItem.fields[0].sub_nav_link_label !== null ? (
                                                <>
                                                    <DropdownToggle onClick={() => this.toggle()} > 
                                                        {navItem.primary.label[0].text}
                                                    </DropdownToggle>
                                                    <Dropdown isOpen={this.state.isOpen} nav>
                                                        <DropdownMenu right>
                                                            {getSubItems(navItem.fields)}
                                                        </DropdownMenu>
                                                    </Dropdown> 
                                                </>) : (
                                                <NavItem className="effect effect-5 navItem">
                                                    <NavLink href={navItem.primary.link.__typename === "PRISMIC_Post" ? '/blog/' + navItem.primary.link._meta.uid : navItem.primary.link.url}>{ navItem.primary.label[0].text }</NavLink>
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
            </Navbar>
        </NavItem>
        )
    }
}
    