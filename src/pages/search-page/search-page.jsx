import React, { Fragment, useState } from "react";

import "./search-page.css"

import CardDisplay from "../card-display/card-display.jsx"


const SearchPage = () => {
    let [inputData, setInputData] = useState(null)
    let [starWarsData, setStarWarsData] = useState(null)

    const onChangeFunction = (event) => {
        console.log(event.target.value)
        setInputData(event.target.value)
    }

    const onSearchFunction = () => {
        fetch(`https://swapi.dev/api/${inputData}/`)
            .then(response => response.json())
            .then(result => setStarWarsData(result))
    }


    return (
        <Fragment>
            <div className="input-border">
                {/* <div className="question-mark-border">
                    <h2>❓</h2>
                </div> */}
                <div className="search-border">
                    <input onChange={onChangeFunction} placeholder="Search Star Wars Information" className="input-form" />
                    <button onClick={onSearchFunction} className="search-button" >Search</button>
                </div>
            </div>
            <CardDisplay data={starWarsData} />
        </Fragment>
    )
}

export default SearchPage;