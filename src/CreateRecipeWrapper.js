import React from "react";

import {CreateRecipeStateProvider} from "./contexts/CreateRecipeStateContext";
import CreateRecipe from "./CreateRecipe";

export default function CreateRecipeWrapper() {
    return (
        <div>
            Is it working?
            <CreateRecipeStateProvider>
                <CreateRecipe/>
            </CreateRecipeStateProvider>
        </div>
    )
}