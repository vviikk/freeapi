import React from 'react';
import useService from '~utils/useService';
import { getCards } from 'services/cardService';
import useAppState from '~utils/useAppState';

export default () => {
    const [getCardsAction, clearCardsAction] = useService(getCards);
    const cardsList = useAppState('cards.data', []);

    return <div>
        <button onClick={getCardsAction}>get cards</button>
        <button onClick={clearCardsAction}>clear</button>
        {cardsList.map(({name}) => <div>{name}</div>)}
    </div>
}