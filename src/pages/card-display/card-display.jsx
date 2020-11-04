import React, { Fragment } from "react";

import "./card-display.css"


const CardDisplay = ({ data }) => {
    console.log(data)
    return (
        <Fragment>
            {
                data
                    ? (
                        <h2>
                            {data.count}
                        </h2>
                    )
                    : (
                        null
                    )
            }
        </Fragment>
    )
}

export default CardDisplay;