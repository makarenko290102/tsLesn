function getCar(brand, price) {
    return price ? "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: " + brand + ". \u0426\u0435\u043D\u0430: " + price + "." : "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: " + brand;
}
var carOne = getCar('bmw');
var carTwo = getCar('bms', 10000);
//const carThree = getCar('bmw', 20000, 1000)
