import cardService from '../../services/card.service';


export const SET_CATEGORY = '[category] SET_CATEGORY';
export function setCategory(categories) {
    return {
        type: SET_CATEGORY,
        payload: categories
    }
}
export function fechCategories() {
    return async (dispatch) => {
        const categories = await cardService.fetchCard();
        dispatch(setCategory(categories));
    }
}