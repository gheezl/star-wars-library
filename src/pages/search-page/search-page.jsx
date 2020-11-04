import React, { Fragment } from "react";

import "./search-page.css"

import CardDisplay from "../card-display/card-display.jsx"


const SearchPage = () => {



    return (
        <Fragment>
            <div className="input-border">
                {/* <div className="question-mark-border">
                    <h2>❓</h2>
                </div> */}
                <div className="search-border">
                    <input placeholder="Search Star Wars Information" className="input-form" />
                    <button className="search-button" >Search</button>
                </div>
            </div>
            <CardDisplay />
        </Fragment>
    )
}

export default SearchPage;