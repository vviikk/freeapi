import React from 'react';
import { useService, useAppState } from 'redux-peasy';
import cardService, { addNewCard } from 'services/cardService';
import { useTranslation } from 'react-i18next';
import {ReactComponent as LoadingSVG} from '../../loading.svg';

export default () => {
    const [t] = useTranslation();
    const [getCardsAction, clearCardsAction] = useService(cardService);
    const [ addNewCardAction ] = useService(addNewCard);
    const { data: cardsList, isLoading } = useAppState('cards');

    return <div>
        <h1>{t('CARD_HEADING')}</h1>
        <button onClick={getCardsAction}>get cards</button>
        <button onClick={clearCardsAction}>clear</button>
        <button disabled={!cardsList} onClick={addNewCardAction}>add</button>
        {isLoading
            ? <LoadingSVG height={30} width={30}/>
            : (cardsList ||[]).map(({name}, index) => <div key={name+index}>{name}</div>)}
    </div>
}
