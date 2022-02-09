import { GET_RECIPES_LOADING, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from "../actionTypes/constantsRecipes"

import axios from "axios"

export const getAllRecipes = (query) => async dispatch => {
    dispatch({ type: GET_RECIPES_LOADING })
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=5ddd1284&app_key=4c4df23a3d90ef4d544f41c85c482e56&cuisineType=Middle%20Eastern`)
        dispatch({ type: GET_RECIPES_SUCCESS, payload: response.data.hits })
    } catch (error) {
        dispatch({ type: GET_RECIPES_FAIL, payload: error })
        console.log(error)
    }
}

