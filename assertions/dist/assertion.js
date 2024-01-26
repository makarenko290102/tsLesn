var inputElement = document.querySelector('input');
//const valueOne = inputElement?.value 
var valueOne = inputElement.value; //более уточнённо. элемент является html элементом 
var ValueOne = inputElement.value; //идентично
//not null assrt-s
var getLength = function (text) {
    return text.length;
};
//getLength(null) // - 
//getLength('fdsfa') // -
// ! - не unknown | undefined
