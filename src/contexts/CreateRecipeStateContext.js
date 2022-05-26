import React, {createContext, useState} from "react"

export const CreateRecipeStateContext = createContext("")
export const CreateRecipeActionsContext = createContext()

export function CreateRecipeStateProvider(props) {

    const nameInitialState = ""
    const descriptionInitialState = ""
    const ingredientsInitialState = []
    const createSuccessInitialState = false
    const createApiErrorInitialState = ""

    const [name, setName] = useState(nameInitialState)
    const [description, setDescription] = useState(descriptionInitialState)
    const [ingredients, setIngredients] = useState(ingredientsInitialState)
    const [createApiResponse, setCreateApiResponse] = useState(createApiErrorInitialState)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const addIngredient = () => {
        let theIngredients = [...ingredients]
        theIngredients.push("")
        setIngredients(theIngredients)
    }

    const removeIngredient = (ingredientIndex) => {
        let theIngredients = [...ingredients]
        theIngredients.splice(ingredientIndex, 1)
        setIngredients(theIngredients)
    }

    const editIngredient = (ingredientIndex, e) => {
        let theIngredients = [...ingredients]
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
            description,
            createApiResponse,
        }}>
            <CreateRecipeActionsContext.Provider value={{
                updateName, updateDescription, addIngredient,
                removeIngredient, editIngredient, resetRecipeState,
                setCreateApiResponse,
            }}>
                {props.children}
            </CreateRecipeActionsContext.Provider>
        </CreateRecipeStateContext.Provider>
    );
}