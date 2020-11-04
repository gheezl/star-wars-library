import React, { Fragment } from "react";

import "./header.css"


const Header = () => {
    return (
        <Fragment>
            <div className="header-border">
                <h1 className="header-title">Star Wars Library</h1>
                <span className="header-about" >About</span>
            </div>
        </Fragment>
    )
}

export default Header;