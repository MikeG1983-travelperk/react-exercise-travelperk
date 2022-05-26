import React from "react"
import styled from "styled-components";
import IngredientInputList from "../IngredientInputList";
import MikeButton from "../MikeButton";


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

export default function RecipeCard(props) {
    const {
        name,
        description,
        ingredients,
        mode,
        updateNameFunction,
        updateDescriptionFunction,
        addIngredientFunction,
        updateIngredientFunction,
        removeIngredientFunction,
        saveFunction,
    } = props

    return (
        <div>
            <h1>Create Recipe:</h1>
            <CreateRecipeDiv>
                <div>
                    <label htmlFor='name'>Recipe name: </label><br/>
                    <input type='text' value={name} onChange={updateNameFunction} id='name'/>
                    <br/>
                    <br/>
                    <label htmlFor='description'>Description: </label><br/>
                    <input type='text' value={description} onChange={updateDescriptionFunction} id='description'/>
                </div>
                <div>

                    <IngredientInputList ingredients={ingredients}
                                         updateIngredientFunction={updateIngredientFunction}
                                         removeIngredientFunction={removeIngredientFunction}/>
                    <br/>
                    <MikeButton onClick={addIngredientFunction}>Add Ingredient</MikeButton><br/><br/>
                    <MikeButton onClick={saveFunction}> Save Recipe</MikeButton>
                </div>

                <br/>
                <br/>
                <br/>
            </CreateRecipeDiv>
        </div>
    )

}