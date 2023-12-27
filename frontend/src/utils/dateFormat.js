// utils/dateFormat.js
import moment from 'moment';

export const dateFormat = (date) => {
    return moment(date).format('DD/MM/YYYY'); // Use 'YY' for the last two digits of the year
};

export const groupDataByMonth = (data) => {
    return data.reduce((result, item) => {
        const monthKey = moment(item.date).format('MMM/YY'); // Use 'YY' for the last two digits of the year
        if (!result[monthKey]) {
            result[monthKey] = 0;
        }
        result[monthKey] += item.amount;
        return result;
    }, {});
};
