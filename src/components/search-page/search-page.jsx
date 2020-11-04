import React, { Fragment } from "react";

import "./search-page.css"


const SearchPage = () => {
    return (
        <Fragment>
            <div className="input-border" >
                <input placeholder="Search Star Wars Information" className="input-form" />
            </div>
        </Fragment>
    )
}

export default SearchPage;