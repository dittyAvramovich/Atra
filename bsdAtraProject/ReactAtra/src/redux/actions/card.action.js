import cardService from '../../services/card.service';

export const SHOW_CARDS = '[card] SHOW_CARDS';


export  function setCard(cards) {
    return {
        type: SHOW_CARDS,
        payload: cards
    }

}

// export  function fechIdCard() {

//     return async (dispatch) => {
//         const cards = await cardService.fetchCardById();
//         dispatch(setCard(cards));
        
//     }

// }

export  function fetchCards() {

    return async (dispatch) => {
        const cards = await cardService.fetchCards();
        dispatch(setCard(cards));
        
    }

}