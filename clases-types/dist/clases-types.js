var Car = /** @class */ (function () {
    /**
     *
     */
    function Car(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Car.prototype.getInfo = function () {
        return this.brand + " - " + this.price;
    };
    return Car;
}());
var e = new Car('BMW', 20000).getInfo();
console.log(e);
