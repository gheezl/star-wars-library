import React, { Fragment } from "react"

import "./card-display.css"

import Card from "../../components/card/card.jsx"


const CardDisplay = ({ individualData }) => {
    console.log(individualData, "1")
    return (
        <Fragment>
            <div>
                {individualData.map(data => {
                    <Card data={data} />
                })}
            </div>
        </Fragment>
    )
}

export default CardDisplay;