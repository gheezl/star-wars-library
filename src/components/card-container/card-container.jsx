import React, { Fragment, useState } from "react"

import "./card.css"

import Card from "../card/card.jsx"


const Card = ({ individualData }) => {
    console.log(individualData)

    return (
        <Fragment>
            {
                individualData.map(data => {
                    if (data.name) {
                        return (
                            <Card data={data} />
                        )
                    }
                    else {
                        return (
                            <span classname="instructions" >hi</span>
                        )
                    }
                })
            }
        </Fragment>
    )
}

export default Card;