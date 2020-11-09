import React, { Fragment, useState } from "react";

import "./search-page.css"

import Card from "../../components/card-container/card-container.jsx"


const SearchPage = () => {
    let [inputData, setInputData] = useState(null)
    let [starWarsData, setStarWarsData] = useState(["placeholder"])

    const onChangeFunction = (event) => {
        setInputData(event.target.value)
    }

    const onSearchFunction = () => {
        fetch(`https://swapi.dev/api/${inputData.toLowerCase().trim()}/`)
            .then(response => response.json())
            .then(result => setStarWarsData(result.results))
    }

    return (
        <Fragment>
            <div className="input-border">
                <div classname="instructions-border">
                    <span className="instructions" > Search Planets, Spaceships, Vehicles, People, Films and Species. </span>
                </div>
                <div className="search-border">
                    <input onChange={onChangeFunction} placeholder="Search Star Wars Information" className="input-form" />
                    <button onClick={onSearchFunction} className="search-button" >Search</button>
                </div>
            </div>
            <Card individualData={starWarsData} />
        </Fragment>
    )
}

export default SearchPage;