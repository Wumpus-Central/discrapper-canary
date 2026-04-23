"use strict";
var r = n(446474),
    i = n(339626),
    s = n(598349),
    a = TypeError;
e.exports = function (e, t) {
    var n, o;
    if (
        ("string" === t && i((n = e.toString)) && !s((o = r(n, e)))) ||
        (i((n = e.valueOf)) && !s((o = r(n, e)))) ||
        ("string" !== t && i((n = e.toString)) && !s((o = r(n, e))))
    )
        return o;
    throw new a("Can't convert object to primitive value");
};
