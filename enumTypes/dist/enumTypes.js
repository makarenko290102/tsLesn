var EnumRoles;
(function (EnumRoles) {
    EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
    EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
    EnumRoles[EnumRoles["USER"] = 2] = "USER";
})(EnumRoles || (EnumRoles = {}));
var user = {
    name: 'Bob',
    role: EnumRoles.ADMIN,
    color: 0 /* black */
};
//console.log(EnumRoles[EnumRoles.ADMIN])
