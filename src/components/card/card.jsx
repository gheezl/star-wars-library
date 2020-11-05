import React, { Fragment } from "react"

import "./card.css"


const Card = ({ individualData }) => {

    return (
        <Fragment>
            {
                individualData.map(data => {
                    return (
                        <h2 key={Math.floor(Math.random())} >{data.name}</h2>
                    )
                })}
        </Fragment>
    )
}

export default Card;