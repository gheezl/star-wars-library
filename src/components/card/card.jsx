import React, { Fragment, useState } from "react"

import "./card.css"


const Card = ({ individualData }) => {
    let [toggle, setToggle] = useState(null)

    return (
        <Fragment>
            {
                individualData.map(data => {
                    if (data.name) {
                        return (
                            <Fragment>
                                <div className="name-border">
                                    <span>{data.name}</span>
                                </div>
                            </Fragment>
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