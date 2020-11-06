import React, { Fragment, useState } from "react"

import "./card-container.css"

import Card from "../card/card.jsx"


const CardContainer = ({ individualData }) => {
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
                            <span classname="instructions" >Search Planets, Spaceships, Vehicles, People, Films and Species. </span>
                        )
                    }
                })
            }
        </Fragment>
    )
}

export default CardContainer;