import cardService from '../../services/card.service';

export const SHOW_CARDS = '[card] SHOW_CARDS';


export  function setCard(card) {
    return {
        type: SHOW_CARDS,
        payload: card
    }

}
export  function fechIdCard() {

    return async (dispatch) => {
        const card = await cardService.fetchCardById();
        dispatch(setCard(card));
        
    }

}