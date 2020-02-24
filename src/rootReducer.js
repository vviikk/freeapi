/** WARNING.
 *  1. For trading reducers, please add to tradingServices.js - don't add to this file
 *  2. KEEP THIS FILE SORTED. */

/* This will encapsulate all reducers in the app, and is it's own file to help hot reloading */
import { combineReducers } from 'redux';
import { cardsReducer } from './services/cardService';


export default combineReducers({
    cards: cardsReducer,
});
