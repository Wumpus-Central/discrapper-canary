"use strict";
n.d(t, { q: () => c, r: () => u });
var r = n(136722),
    i = n(311907),
    a = n(71393),
    s = n(287809),
    o = n(488926),
    l = n(402655);
let u = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, s.default];
    if (null == e) return !1;
    let [n, i] = t,
        u = n.getGuild(e);
    if (null == u) return !1;
    let c = i.getCurrentUser();
    return r.X8(o.cc({ user: c, context: u, checkElevated: !1 }), l.M);
};
function c(e) {
    return (0, i.bG)([a.A, s.default], () => u(e, [a.A, s.default]), [e]);
}
