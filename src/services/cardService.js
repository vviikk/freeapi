import { serviceBuilder } from '~utils/';
import { API } from '~config';

export const getCards = serviceBuilder('getCards', async (state, cardId) => {
    return (await fetch(API.CARDS)).json();
});

export const
    cardsReducer = getCards.reducer,
    getCardsAction = getCards.action;
