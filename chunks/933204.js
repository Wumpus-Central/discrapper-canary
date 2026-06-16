"use strict";
n.d(t, { I: () => u, T: () => l });
var i = n(64700),
    r = n(702841),
    s = n(71393),
    a = n(209932);
function o(e, t) {
    return e.filter((e) => null == t.get(e));
}
function l() {
    let e = (0, r.yK)([s.A], () => s.A.getGuildIds()),
        t = (0, r.bG)([a.A], () => a.A.getSounds());
    return (0, i.useMemo)(() => o(e, t), [e, t]);
}
function u() {
    return o(s.A.getGuildIds(), a.A.getSounds());
}
