"use strict";
r.d(t, { A: () => c });
var n = r(464117),
    o = r(463450),
    a = r(687669),
    i = Object.prototype,
    l = Function.prototype.toString,
    s = i.hasOwnProperty,
    u = l.call(Object);
let c = function (e) {
    if (!(0, a.A)(e) || "[object Object]" != (0, n.A)(e)) return !1;
    var t = (0, o.A)(e);
    if (null === t) return !0;
    var r = s.call(t, "constructor") && t.constructor;
    return "function" == typeof r && r instanceof r && l.call(r) == u;
};
