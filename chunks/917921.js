"use strict";
r.d(t, { A: () => c });
var n = r(477891),
    o = r(800225),
    a = r(5264),
    i = r(688525),
    l = 1 / 0,
    s = n.A ? n.A.prototype : void 0,
    u = s ? s.toString : void 0;
let c = function e(t) {
    if ("string" == typeof t) return t;
    if ((0, a.A)(t)) return (0, o.A)(t, e) + "";
    if ((0, i.A)(t)) return u ? u.call(t) : "";
    var r = t + "";
    return "0" == r && 1 / t == -l ? "-0" : r;
};
