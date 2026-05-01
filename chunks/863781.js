"use strict";
var i = n(446474),
    r = n(339626),
    s = n(598349),
    a = TypeError;
e.exports = function (e, t) {
    var n, o;
    if (
        ("string" === t && r((n = e.toString)) && !s((o = i(n, e)))) ||
        (r((n = e.valueOf)) && !s((o = i(n, e)))) ||
        ("string" !== t && r((n = e.toString)) && !s((o = i(n, e))))
    )
        return o;
    throw new a("Can't convert object to primitive value");
};
