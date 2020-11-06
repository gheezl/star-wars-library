import React, { Fragment } from "react"

import "./card.css"

const Card = ({ data }) => {

    return (
        <Fragment>
            <span>{data.name}</span>
        </Fragment>
    )
}


export default Card;