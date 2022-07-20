const _ = require("lodash");

const analyze = function (item) {

    // Sort
    let sorted = _.sortBy(item, 'income');

    // Calculate average of all incomes
    let average = _.meanBy(item, item => item.income);

    return {
        average: average,
        // Filter underperformers
        underperform: _.filter(sorted, item => item.income <= average),
        // Filter overperformers
        overperform: _.filter(sorted, item => item.income > average)
    };

};

module.exports = analyze;