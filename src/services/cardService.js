import { serviceBuilder } from '~utils/';
import { API } from '~config';

const getCards = serviceBuilder('card', async (state, cardId) => {
    return (await fetch(API.CARDS)).json();
});

export default getCards;
