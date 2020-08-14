import React from "react";
import {useHistory} from "react-router-dom";

export default function Navigation(){
    const histroy = useHistory()

    return(
        <div>
            <button id="HomeButton" onClick={() => histroy.push('/')}>Home</button>
            <button id="PizzaButton" onClick={() => histroy.push('/pizza')}>Build Your Pizza</button>
        </div>
    )
}