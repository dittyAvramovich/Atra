import { act } from "react-dom/test-utils";
import { SET_CATEGORY } from '../actions/category.action';



const initialState = {
    categories: {},
   
     
}

export default function CategoryReducer(state = initialState, action) {

    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, categories: action.payload }

        default: return state

    }

}