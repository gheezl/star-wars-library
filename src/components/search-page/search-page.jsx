import React, { Fragment } from "react";

import "./search-page.css"


const SearchPage = () => {
    return (
        <Fragment>
            <div className="input-border" >
                <input placeholder="Search Star Wars Information" className="input-form" />
                <button className="search-button" >Search</button>
            </div>
            <div className="question-mark-border">
                <h2>❓</h2>
            </div>
        </Fragment>
    )
}

export default SearchPage;