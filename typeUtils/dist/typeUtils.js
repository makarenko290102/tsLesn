//возвращает только типы, не относящиеся к null и undefined
var car = {
    name: 'BMW',
    price: 50000,
    yearBuild: 1967
};
var carTwo = {
    id: 1
};
var carOptional = {
    name: 'MB',
    yearBuild: 1976
};
/*const CarReadonly: IReadonlyCar = {
    name: 'dsf'
}*/
var carThree = {
    //price: '21', - верно
    //name: 231 - верно
    name: 'MB',
    price: '30000' // тоже верно
};
/*const carFour: IRequiredCar = {

}*/ 
