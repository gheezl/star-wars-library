import React, { Fragment } from "react"

import "./card.css"


const Card = ({ individualData }) => {
    return (
        <Fragment>
            {
                individualData.map(data => {
                    return (
                        <h2>{data.name}</h2>
                    )
                })}
        </Fragment>
    )
}

export default Card;