import { act } from "react-dom/test-utils";
import { SHOW_CARDS } from '../actions/card.action';



const initialState = {
    cardList: {},   
}


export default function CardReducer(state = initialState, action) {

    switch (action.type) {
        case SHOW_CARDS:
            return { ...state,  cardList: action.payload }

        default:return state

    }

}