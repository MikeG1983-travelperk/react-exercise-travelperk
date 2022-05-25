import React, {useContext} from "react";
import {CreateRecipeActionsContext, CreateRecipeStateContext} from "./contexts/CreateRecipeStateContext";

export default function CreateRecipe() {
    const {
        ingredients,
        name,
        description,
    } = useContext(CreateRecipeStateContext);

    const {
        updateName, updateDescription, addIngredient,
        removeIngredient, editIngredient, resetRecipeState
    } = useContext(CreateRecipeActionsContext)

    /* Render an input for each ingredient */
   const ingredientInputs = []
    for (let i = 0; i < ingredients.length; i++) {
        ingredientInputs.push(
            <label htmlFor={"ingredient" + i}>Ingredient {i}:</label>, <br/>,
            <input type='text' value={ingredients[i]} id={"ingredient" + i} ingredientindex={i} key="{i}"
                   onChange={( e)=>{
                       console.log("change detected")
                       editIngredient(i, e)

                   }}/>,
            <br/>
        )
    }

    return (
        <div>
            <label htmlFor='name'>Name: </label><br/>
            <input type='text' value={name} onChange={updateName} id='name'/>
            <br/>
            <br/>
            <label htmlFor='description'>Description: </label><br/>
            <input type='text' value={description} onChange={updateDescription} id='description'/>
            <br/>
            <br/>
            <h1>Name: {name}</h1>
            <h1>Description: {description}</h1>
            <h1>Ingredients: {JSON.stringify(ingredients)}</h1>
            {ingredientInputs}
            <br/>
            <button onClick={addIngredient}>Add Ingredient</button>
        </div>
    )
}