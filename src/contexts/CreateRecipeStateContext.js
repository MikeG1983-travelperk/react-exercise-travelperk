import React, {createContext, useState} from "react"

export const CreateRecipeStateContext = createContext("")
export const CreateRecipeActionsContext = createContext()

export function CreateRecipeStateProvider(props) {

    const nameInitialState = ""
    const descriptionInitialState = ""
    const ingredientsInitialState = []

    const [name, setName] = useState(nameInitialState)
    const [description, setDescription] = useState(descriptionInitialState)
    const [ingredients, setIngredients] = useState(ingredientsInitialState)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const addIngredient = () => {
        console.log("addIngredient")
        let theIngredients = ingredients
        console.log("theIngredients= ", theIngredients)
        theIngredients.push("")
        setIngredients(theIngredients)
    }

    const removeIngredient = (ingredientIndex) => {
        let theIngredients = ingredients
        theIngredients.splice(ingredientIndex, 1)
        setIngredients(theIngredients)
    }

    const editIngredient = (ingredientIndex, e) => {
        let theIngredients = ingredients
        theIngredients[ingredientIndex] = e.target.value;
        setIngredients(theIngredients)
    }

    const resetRecipeState = () => {
        setName(nameInitialState)
        setDescription(descriptionInitialState)
        setIngredients(ingredientsInitialState)
    }


    return (
        <CreateRecipeStateContext.Provider value={{
            ingredients,
            name,
            description
        }}>
            <CreateRecipeActionsContext.Provider value={{
                updateName, updateDescription, addIngredient,
                removeIngredient, editIngredient, resetRecipeState
            }}>
                {props.children}
            </CreateRecipeActionsContext.Provider>
        </CreateRecipeStateContext.Provider>
    );
}