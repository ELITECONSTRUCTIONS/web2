import React from 'react';
import NavbarItem from './NavbarItem'

function Navbar(props) {
    /*  {
    "id": 5,
    "title": "Blog",
    "link": "/blog-grid-right-sidebar",
    "megaMenu": false,
    "subMenu": [
      {
        "title": "Blog Grid Left Sidebar",
        "link": "/blog-grid-left-sidebar"
      },
      {
        "title": "Blog Grid Right Sidebar",
        "link": "/blog-grid-right-sidebar"
      },
      {
        "title": "Blog Grid Without Sidebar",
        "link": "/blog-grid-without-sidebar"
      },
      {
        "title": "Blog List Left Sidebar",
        "link": "/blog-list-left-sidebar"
      },
      {
        "title": "Blog List Right Sidebar",
        "link": "/blog-list-right-sidebar"
      },
      {
        "title": "Blog Details",
        "link": "/blog/wild-life-workshop?id=14"
      }
    ]
  }, */
    return (
        <ul className="main-menu nav">
            <NavbarItem />
        </ul>
    );
}

export default Navbar;