import { GET_RECIPES_LOADING, GET_RECIPES_SUCCESS, GET_RECIPES_FAIL } from "../actionTypes/constantsRecipes"

const initialState = { loading: false, recipes: [], errors: null }
export const recipeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_RECIPES_LOADING:
            return { ...state, loading: true }
        case GET_RECIPES_SUCCESS:
            return { ...state, recipes: payload, loading: false }
        case GET_RECIPES_FAIL:
            return { ...state, errors: payload, loading: false }
        default:
            return state
    }
}