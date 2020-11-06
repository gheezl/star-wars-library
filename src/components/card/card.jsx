import React, { Fragment, useState } from "react"

import "./card.css"


const Card = ({ individualData }) => {
    let [toggle, setToggle] = useState(false)

    console.log(individualData)

    return (
        <Fragment>
            {
                individualData.map(data => {
                    if (data.name) {
                        return (
                            <Fragment>
                                <div className="name-border">
                                    <span onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)} >{data.name}</span>
                                </div>
                                {
                                    toggle
                                        ? (
                                            <div>
                                                <span>hi</span>
                                            </div>
                                        )
                                        : (
                                            null
                                        )
                                }
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