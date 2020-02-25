import serviceBuilder from 'redux-peasy';
import { API } from '~config';

const getCards = serviceBuilder('card', async (state) => {
    return (await fetch(API.CARDS)).json();
});

export default getCards;
