function NEGATEDcHARACTERcLASS(str){
    return /^[^0-9][^A-Z]/.test(str);
}
console.log(NEGATEDcHARACTERcLASS("aAd asd"));

module.exports = NEGATEDcHARACTERcLASS;