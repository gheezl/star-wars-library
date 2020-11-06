import React, { Fragment, useState } from "react"

import "./card.css"

const Card = ({ data }) => {
    let [toggle, setToggle] = useState(true)

    console.log(data)

    return (
        <Fragment>
            <div className="name-border" >
                <span className="name" onMouseEnter={() => setToggle(false)} onMouseLeave={() => setToggle(true)} >{data.name}</span>
                {
                    toggle
                        ? (
                            null
                        )
                        : (
                            <div>
                                <span>{data.birth_year}</span>
                            </div>
                        )
                }
            </div>
        </Fragment>
    )
}


export default Card;