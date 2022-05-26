import React, {useCallback, useContext} from "react";
import MikeButton from "./MikeButton";

export default function IngredientInputList(props) {

    const { ingredients, updateIngredientFunction, removeIngredientFunction} = props

    /* Render an input for each ingredient */
    const ingredientInputs = []
    for (let i = 0; i < ingredients.length; i++) {
        ingredientInputs.push(
            <div key={"ingredientDiv" + i }>
                <label htmlFor={"ingredient" + i} key={'label' + i}>Ingredient {i + 1}:</label> <br/>
                <input type='text' value={ingredients[i]} id={"ingredient" + i} ingredientindex={i}
                       key={'ingredient' + i}
                       onChange={(e) => {
                           console.log("change detected")
                           updateIngredientFunction(i, e)

                       }}/><MikeButton onClick={(e) => {
                removeIngredientFunction(i)
            }}>remove ingredient</MikeButton>
                <br/>
            </div>
        )
    }

    return (
        <div>
            {ingredientInputs}
        </div>
    )
}