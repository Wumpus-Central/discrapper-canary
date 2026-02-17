"use strict";
n.d(t, { A: () => u, X: () => l });
var r = n(311907),
    i = n(696451),
    a = n(287809),
    s = n(474090),
    o = n(788868);
function l(e, t) {
    let n = (0, s.ki)(e, o.PremiumTypes.TIER_2),
        r = t?.premiumSince != null;
    return n || r;
}
function u(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = t?.id;
    return l(
        t,
        (0, r.bG)([i.Ay], () => (null != n ? i.Ay.getMember(e, n) : void 0), [n, e]),
    );
}
