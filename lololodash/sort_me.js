const _ = require("lodash");

const sorting = function (collection) {
    return _.sortBy(collection, item => -item.quantity);
 };
console.log(sorting([1,2,3,4,5,6]));
module.exports = sorting;