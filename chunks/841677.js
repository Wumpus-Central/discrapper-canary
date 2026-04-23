"use strict";
r.d(t, { A: () => l });
var n = r(656855),
    o = r(468999),
    a = r(702318),
    i = r(842922);
let l = function (e, t, r) {
    if (!(0, i.A)(r)) return !1;
    var l = typeof t;
    return ("number" == l ? !!((0, o.A)(r) && (0, a.A)(t, r.length)) : "string" == l && t in r) && (0, n.A)(r[t], e);
};
