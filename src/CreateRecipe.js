import React, {useCallback, useContext} from "react";
import {CreateRecipeActionsContext, CreateRecipeStateContext} from "./contexts/CreateRecipeStateContext";
import IngredientInputList from "./IngredientInputList";
import MikeButton from "./MikeButton";
import styled from 'styled-components';
import axios from "axios";
import RecipeCard from "./common/RecipeCard";

const CreateRecipeDiv = styled.div`
  padding: 30px;
  display: flex;
  gap: 40px;
  border: 1px solid royalblue;
  width: 700px;
`

const CreateRecipeResponseTextArea = styled.textarea`
  width: 700px;
  padding: 30px;
  resize: none;
  height: 150px;
`

export default function CreateRecipe(props) {
    const {
        ingredients,
        name,
        description,
        createApiResponse,
    } = useContext(CreateRecipeStateContext);

    const {
        updateName, updateDescription, addIngredient,
        removeIngredient, editIngredient, resetRecipeState,
        setCreateApiResponse,
    } = useContext(CreateRecipeActionsContext)

    const sendCreateRequest = useCallback(async () => {
        let ingredientsList = ingredients.map((ingredient) => {
            return {'name': ingredient}
        })
        let payload = {
            name,
            description,
            ingredients: ingredientsList
        }
        console.log("payload= ", payload)
        try {
            const instance = axios.create({
                baseURL: 'http://localhost:8000/api',

            })
            const res = await instance.post('/recipe/', payload)
            const newLine = "\r\n"
            const successString = "Recipe created successfully: " + newLine
            if (res.status === 201) {
                setCreateApiResponse(successString + JSON.stringify(res.data, null, 2))
            } else {
                setCreateApiResponse(JSON.stringify(res))
            }


        } catch (error) {
            console.log(error)
        }
    }, [name, description, ingredients])


    return (
        <div>
            <RecipeCard name={name}
                        description={description}
                        ingredients={ingredients}
                        updateNameFunction={updateName}
                        updateDescriptionFunction={updateDescription}
                        addIngredientFunction={addIngredient}
                        updateIngredientFunction={editIngredient}
                        removeIngredientFunction={removeIngredient}
                        saveFunction={sendCreateRequest} />
            <div>
                <CreateRecipeResponseTextArea readOnly value={createApiResponse}/>
            </div>
        </div>
    )
}