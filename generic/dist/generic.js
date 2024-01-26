function entity(args) {
    return args;
}
var EnumCol;
(function (EnumCol) {
    EnumCol[EnumCol["id"] = 1] = "id";
})(EnumCol || (EnumCol = {}));
entity(2);
entity('name');
entity(true);
entity(EnumCol.id);
entity('1');
var Car = /** @class */ (function () {
    /**
     *
     */
    function Car(name) {
        this.name = name;
    }
    Car.prototype.getName = function () {
        return this.name;
    };
    return Car;
}());
new Car('Geely');
new Car(1);
var pairOne = {
    key: '1',
    value: 1
};
var pairTwo = {
    key: '2',
    value: '2'
};
function getNameLEnght(entity) {
    return entity.length;
}
//getNameLEnght('nbvc')
