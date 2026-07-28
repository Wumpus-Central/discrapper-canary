"use strict";
n.d(t, { I: () => d, T: () => o });
var i = n(582128),
    r = n(702841),
    a = n(71393),
    s = n(209932);
function l(e, t) {
    return e.filter((e) => null == t.get(e));
}
function o() {
    let e = (0, r.yK)([a.A], () => a.A.getGuildIds()),
        t = (0, r.bG)([s.A], () => s.A.getSounds());
    return (0, i.useMemo)(() => l(e, t), [e, t]);
}
function d() {
    return l(a.A.getGuildIds(), s.A.getSounds());
}
