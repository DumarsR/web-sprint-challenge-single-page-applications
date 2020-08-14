import React from "react";
import logo from "../Pizza.jpg";

export default function Form(props){
    const {form, handleChange, handleSubmit, inputChange, disabled, error} = props;
    console.log(props);

    console.log(error);

    const onInputChange = e => {
        const {name, value} = e.target
        inputChange(name, value)
    }

    return(
    <form onSubmit={handleSubmit}>
        <img src={logo} alt="Pizza.jpg"/>
        <h3>Build Your Own Pizza</h3>
        <label>
            <input id="name" name="name" value={form.name} onChange={onInputChange} placeholder="Your Name Please" />
        </label>
        <h3>Choice of Size</h3>
            <h4>Required:</h4>    
                <select id="select" name="size" value={form.size} onChange={handleChange}>
                    <option disabled value="">-Select-</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="Xlarge">Extra large</option>
                </select>
        <h3>Choice of Sauce</h3>
            <h4>Required:</h4>       
                <input id="Red" type="checkbox" onChange={handleChange} checked={form.red} name="red" />Original Red
                <input id="Garlic" type="checkbox" onChange={handleChange} checked={form.ranch} name="ranch" />Garlic Ranch
                <input id="BBQ" type="checkbox" onChange={handleChange} checked={form.bbq} name="bbq" />BBQ Sauce
                <input id="Spinach" type="checkbox" onChange={handleChange} checked={form.spinach} name="spinach" />Spinach Alfredo   
        <h3>Add Toppings</h3>
            <h4>Choose up to 4:</h4>    
                <input id="Pepperoni" type="checkbox" onChange={handleChange} checked={form.pepperoni} name="pepperoni" />Pepperoni
                <input id="Sausage" type="checkbox" onChange={handleChange} checked={form.sausage} name="sausage" />Sausage
                <input id="Onions" type="checkbox" onChange={handleChange} checked={form.onions} name="onions" />Onions
                <input id="Pineapple" type="checkbox" onChange={handleChange} checked={form.pineapple} name="pineapple" />Pineapple
        <h3>Special Instructions</h3>
            <label>
                <input id="extraInfo" type="textarea" onChange={handleChange} value={form.info} name="info" placeholder="Extra Information" />
            </label>
            <br />
            <button type='submit' onClick={(e) => handleSubmit(e)} disabled={disabled}>Submit</button>
        <div className="errors">
            <div>{error.name}</div>
        </div>
    </form>
    )
}