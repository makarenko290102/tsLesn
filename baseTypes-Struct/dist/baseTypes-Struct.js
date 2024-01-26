"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var user = {
    age: 25,
    name: 'Bob'
};
var address = {
    city: 'MSC',
    country: 'RUS'
};
//const common = {
/*...adress, ...user*/
//...user, ...adress
//}
var common;
common = __assign(__assign({}, user), address);
console.log(common);
