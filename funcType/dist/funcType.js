function getChannel(name) {
    return { name: name };
}
var getChannelName = function (name) {
    return { name: name };
};
var getNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers;
};
console.log(getChannel('TNT'));
