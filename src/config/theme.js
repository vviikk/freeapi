/* eslint sort-keys: ["error", "asc", {natural: false, caseSensitive: false}] */
import colors from './colors';

export const ZERO = '0px';
export const baseUnit = 5;

/**
 * gets the value in pixels as a multiple of the grid(5px)
 * @method
 * @param {number} multiplier is the grid unit
 * @return {String} returns multiplier multiplied by the baseUnit (set to 5px)
*/
export const getGridMultiple = (multiplier = 1) => `${baseUnit * multiplier}px`;

const grid = {
    $g1: getGridMultiple(1), // 5px
    $g10: getGridMultiple(10), // 50px
    $g2: getGridMultiple(2), // 10px
    $g20: getGridMultiple(20), // 100px
    $g3: getGridMultiple(3), // 15px
    $g4: getGridMultiple(4), // 20px
    $g5: getGridMultiple(5), // 25px
    $g6: getGridMultiple(6), // 30px
    $g7: getGridMultiple(7), // 35px
    $g8: getGridMultiple(8), // 40px
    $g9: getGridMultiple(9), // 45px
};

const theme = {
    ...grid,
    ...colors,
};

export default theme;
