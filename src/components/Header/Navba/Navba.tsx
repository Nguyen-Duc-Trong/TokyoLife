import React from "react";

const Navba = (props:any) => {
    const {name} =props
    return(
        <ul className="flex">
            <li>{name}</li>
        </ul>
    )
}

export default Navba