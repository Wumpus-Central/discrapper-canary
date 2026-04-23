"use strict";
r.d(t, { A: () => l });
var n = r(5264),
    o = r(688525),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    i = /^\w*$/;
let l = function (e, t) {
    if ((0, n.A)(e)) return !1;
    var r = typeof e;
    return (
        !!("number" == r || "symbol" == r || "boolean" == r || null == e || (0, o.A)(e)) ||
        i.test(e) ||
        !a.test(e) ||
        (null != t && e in Object(t))
    );
};
