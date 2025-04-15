import React, { Fragment, useState } from 'react';
import PageWrapper from "../../components/PageWrapper";
import PageHeader from "../../components/PageHeader";
import BlogContent from "./BlogContent";
import SidebarForBlog from "../SidebarForBlog";
import projectImg from "../../assets/img/planningBoards.jpg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link, NavLink } from 'react-router-dom';
const style = {
    display:'flex',
    flexDirection:'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BlogPage = ({ sidebar_position, blog_type, sidebar, showContent = true }) => {
    const [type, setType] = useState("normal");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Fragment>
            {/* <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={'From Businex Latest'}
                content={'Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.'}
            /> */}

            <PageWrapper classes={'blog-page-content-area sp-y'}>
                {console.log("inside page")}
                {sidebar === true && sidebar_position === 'left' ? <SidebarForBlog classes={'order-1 order-lg-0'} /> : null}
                {showContent && <><BlogContent blog_type={blog_type} cols={sidebar ? 'col-lg-9' : 'col-12'} classes={sidebar_position === 'left' ? 'order-0 order-lg-1' : null} /></>}
                {!showContent && <><img src={projectImg} usemap="#gfg_map" onClick={(e) => {
                    handleOpen()
                }} /><map name="gfg_map" color='red'>
                        {/**660,580,910,780 */}
                        <area shape="rect" coords="462,15,748,200" alt="GFG1" onClick={() => { localStorage.setItem("page", "planning") }}
                            href={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar-planning"}`} style={{ color: "red" }} />
                        <area shape="rect" coords="0,280, 390,740" alt="GFG2"
                            href={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar-interior"}`} onClick={() => { localStorage.setItem("page", "interior") }} />
                        <area shape="rect" coords="950,280, 1500,740" alt="GFG3"
                            href={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar-elevation"}`} onClick={() => { localStorage.setItem("page", "elevation") }} />
                    </map>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Button
                            onClick={() => { localStorage.setItem("page", "planning")}}
                              >
                                                        <Link to={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar-planning"}`} >
                                Planning
                                </Link>

                            </Button>
                            <Button 
                            onClick={() => { localStorage.setItem("page", "interior") }}>
                            <Link to={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar-interior"}`} >
                                Interior
                            </Link>
                            </Button>


                            <Button
                            onClick={() => { localStorage.setItem("page", "elevation") }} >
                            <Link to={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar-elevation"}`} >
                                Elevation
                            </Link>
                            </Button>

                        </Box>
                    </Modal></>
                }
                {sidebar === true && sidebar_position === 'right' ? <SidebarForBlog /> : null}
            </PageWrapper>
        </Fragment>
    );
};

export default BlogPage;