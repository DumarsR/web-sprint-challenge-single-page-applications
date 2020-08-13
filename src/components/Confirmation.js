import React from "react";

export default function Confirmation(props){
    console.log(props)
    const { 
        name,
        size,
        red,
        ranch,
        bbq,
        spinach,
        pepperoni,
        sausage,
        onions,
        pineapple,
        info,
    } = props.order;

    return(
        <div>
            <h1>Congrats! Your Pizza is on its Way!!!</h1>
            <h3>Your Order</h3>
            <h3>Name: {name}</h3>
            <h3>Size:</h3>
            <p>{size}</p>
            <h3>Sauce:</h3>
            <p>{red && 'Original Red'}</p>
            <p>{ranch && 'Garlic Ranch'}</p>
            <p>{bbq && 'bbq'}</p>
            <p>{spinach && 'Spinach Alfredo'}</p>
            <h3>Toppings:</h3>
            <p>{pepperoni && 'pepperoni'}</p>
            <p>{sausage && 'sausage'}</p>
            <p>{onions && 'Onions'}</p>
            <p>{pineapple && 'Pineapple'}</p>
            <h3>Extra Information:</h3>
            <p>{info}</p>
        </div>
    )
}