import React, {createContext, useState} from "react"

export const CreateRecipeStateContext = createContext("")

export function CreateRecipeStateProvider(props) {

    const nameInitialState = ""
    const descriptionInitialState = ""
    const ingredientsInitialState = [""]

    const [name, setName] = useState(nameInitialState);
    const [description, setDescription] = useState(descriptionInitialState);
    const [ingredients, setIngredients] = useState(ingredientsInitialState);

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const addIngredient = (e) => {
        let theIngredients = ingredients
        theIngredients.push(e.target.value)
        setIngredients(theIngredients)
    }

    const removeIngredient = (ingredientIndex) => {
        let theIngredients = ingredients
        theIngredients.splice(ingredientIndex, 1)
        setIngredients(theIngredients)
    }

    const resetRecipeState = () => {
        setName(nameInitialState)
        setDescription(descriptionInitialState)
        setIngredients(ingredientsInitialState)
    }

    return (
        <CreateRecipeStateContext.Provider value={{
            ingredients, addIngredient, removeIngredient,
            name, updateName,
            description, updateDescription,
            resetRecipeState
        }}>
                {props.children}
        </CreateRecipeStateContext.Provider>)
}