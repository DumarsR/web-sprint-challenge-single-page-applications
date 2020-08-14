import React from "react"
import Confirmation from "./Confirmation";

export default function OrderList(props){

    return(
        <div>
            <h3>Your Order....test</h3>
            {props.order.map((order) => (
                <Confirmation order={order} />
            ))}
        </div>
    )
}