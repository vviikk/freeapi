import serviceBuilder from 'redux-peasy';
import { API } from '~config';

const cardService = serviceBuilder('card', async (state) => {
    return (await fetch(API.CARDS)).json();
});

export const addNewCard = cardService.getNewAction(({cards}) => {
    return {
        cards: cards.data.push({
            "name": "Eight of Cups",
            "number": window.crypto.getRandomValues(new Uint32Array(1))[0],
            "suit": "Cups",
            "img": "c08.jpg"
        }),
    }
})

export default cardService;
