import React, {useContext} from "react";
import {CreateRecipeStateContext} from "./contexts/CreateRecipeStateContext";

export default function CreateRecipe() {
    const [ingredients, addIngredient, removeIngredient, name, updateName, description, updateDescription] = useContext(CreateRecipeStateContext);
    return (
        <div>
            <p>App is rendering</p>
            <label htmlFor='name'>Name: </label><br/>
            <input type='text' value={name} onChange={updateName} id='name'/>
            <h1>Name: {name}</h1>
            <br/>
            <br/>
            <label htmlFor='description'>Description: </label><br/>
            <input type='text' value={description} onChange={updateDescription} id='description'/>
        </div>
)
}