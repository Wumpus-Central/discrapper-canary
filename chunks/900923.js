"use strict";
var r = n(374316),
    i = TypeError;
e.exports = function (e) {
    var t = r(e, "number");
    if ("number" == typeof t) throw new i("Can't convert number to bigint");
    return BigInt(t);
};
