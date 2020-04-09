
import React from 'react';
import Layout from '../components/layouts';
import ShortPost from './general/ShortPost';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

function GetFirstPost (data) {
    return (
        <a className="post_link" href={"/blogs/" + data._meta.uid}>
            <div className="featured_post" style={{backgroundImage: ("url(" + data.featured_image.url + ")"), backgroundSize: "cover"}}>
                <div className="content">
                    <h1>{data.title[0].text}</h1>
                    <p>{data.short_description[0].text}</p>
                    <div className="post_author_container">
                        <h3>{data.post_author}</h3>
                    </div>
                </div>
            </div>
        </a>
    )
}

const PlaceholderPost = () => {
    return (
        <div className="blank_post">
            <span>Enjoying our posts!? read more like this on our blog.</span>
        </div>
    )
}

export default class Blog extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            width: '1200px',
            activeTab: 'All',
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

    filteredPosts = (postData, activeTab) => {
        return this.Posts(postData, activeTab)
    }

    Posts = (data, filter) => {
        let formattedPosts = [];
        
        data.map((post, index) => {
            let { featured_image, title, post_author, _meta, tags } = post.node;
    
            if(filter === "All"){
                return formattedPosts.push(
                    <>
                        <ShortPost data={{
                            featured_image: featured_image,
                            post_author: post_author,
                            title: title,
                            _meta: _meta,
                            index: index,
                            date: Date.now()
                        }}></ShortPost>
                    </>
                )  
            }

            tags.map((data, index) => {
                if (!!data.tag && data.tag == filter) {
                    return formattedPosts.push(
                        <>
                            <ShortPost data={{
                                featured_image: featured_image,
                                post_author: post_author,
                                title: title,
                                _meta: _meta,
                                index: index,
                                date: Date.now()
                            }}></ShortPost>
                        </>
                    )  
                }
            })
        })
        
        return formattedPosts;
    }

    render(){
        let postData = this.props.data.allPosts.edges;
        let blogHomeData = this.props.data.allBlog_homes.edges;

        const { activeTab } = this.state;

        return(
            <Layout metaTitle={postData[0].node.meta_title[0].text} metaDescription={postData[0].node.meta_description[0].text}>
                <div className="blog_home_container">
                    {GetFirstPost(postData[1].node)}
                    
                    <div style={{padding: 50}}>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === 'All' })}
                                    onClick={() => { this.setActive('All'); }}
                                >
                                    All
                                </NavLink>
                            </NavItem>
                            { blogHomeData.map((data) => {
                                let { filterby } = data.node;
                                let tagNavItem = [];

                                filterby.map((data, index) => {
                                    tagNavItem.push(
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === data.tag })}
                                                onClick={() => { this.setActive(data.tag); }}
                                            >
                                               {data.tag}
                                            </NavLink>
                                        </NavItem>
                                    )
                                }) 
                                return tagNavItem;
                            })}
                        </Nav>
                    </div>
                    <div className="blog_home-posts_container">
                        {this.filteredPosts(postData, this.state.activeTab)}
                        <PlaceholderPost></PlaceholderPost>
                    </div>
                </div>
            </Layout>
        )
    }
}
