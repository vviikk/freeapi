import React from 'react';
import { useService, useAppState } from 'redux-peasy';
import cardService from 'services/cardService';
import { useTranslation } from 'react-i18next';
import LoadingSVG from '../../loading.svg';

export default () => {
    const [t] = useTranslation();
    const [getCardsAction, clearCardsAction] = useService(cardService);
    const { data: cardsList, isLoading } = useAppState('cards');

    return isLoading
        ? <LoadingSVG/>
        : <div>
            <h1>{t('CARD_HEADING')}</h1>
            <button onClick={getCardsAction}>get cards</button>
            <button onClick={clearCardsAction}>clear</button>
            {cardsList && cardsList.map(({name, number}) => <div key={name+number}>{name}</div>)}
        </div>
}
