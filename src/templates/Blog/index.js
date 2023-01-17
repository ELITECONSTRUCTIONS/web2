import React, { Fragment } from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import BlogContent from "./BlogContent";
import SidebarForBlog from "../SidebarForBlog";
import projectImg from "../../assets/img/planningBoards.jpg"
const BlogPage = ({ sidebar_position, blog_type, sidebar }) => {
    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={'From Businex Latest'}
                content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
            />

            <PageWrapper classes={'blog-page-content-area sp-y'}>
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'} /> : null}
                {/*                  <BlogContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1':null}/>
 */}                 <img src={projectImg} usemap="#gfg_map" onClick={(e)=>{
                        console.log("coor",e,e.screenX,e.screenY)
 }} />
                <map name="gfg_map" color='red'>
                    {/**660,580,910,780 */}
                    <area shape="rect" coords="462,15,748,200" alt="GFG1"
                        target="_blank" href="" style={{color:"red"}} onClick={(e)=>console.log("curr",e)}/>
                    <area shape="rect" coords="0,280, 390,740" alt="GFG2"
                        href="https://www.geeksforgeeks.org" target="_blank" />
                    <area shape="rect" coords="950,280, 1500,740" alt="GFG3"
                        href="https://github.com" target="_blank" />
                </map>
                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog /> : null}
            </PageWrapper>
        </Fragment>
    );
};

export default BlogPage;