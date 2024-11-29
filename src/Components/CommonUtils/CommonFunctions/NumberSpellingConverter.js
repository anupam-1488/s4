import React from 'react';
import * as numberToWords from 'number-to-words';
import moment from 'moment';

export const NumberSpellingConverter = ({ value }) => {
    const number = parseInt(value, 10);
    if (isNaN(number)) {
        return '';
    } else {

        return numberToWords.toWords(number)
    }
};
export const NumberOfDaysBtToday = ({ value }) => {
    const startDateObject = moment(value);
    const endDateObject = moment();
    return endDateObject.diff(startDateObject, 'days')

};