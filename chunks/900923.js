"use strict";
var i = n(374316),
    r = TypeError;
e.exports = function (e) {
    var t = i(e, "number");
    if ("number" == typeof t) throw new r("Can't convert number to bigint");
    return BigInt(t);
};
