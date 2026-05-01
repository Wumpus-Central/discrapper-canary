"use strict";
n.d(t, { c: () => u, w: () => l });
var i = n(17928),
    r = n(495544),
    s = n(763827),
    a = n(116956);
function o(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function l(e) {
    return (0, i.bG)([a.A, r.default], () => {
        if (null == e) return !0;
        let t = a.A.getUserIds(e);
        return null == t || o(t, r.default.getId());
    });
}
function u() {
    return (0, i.bG)([s.A, r.default], () => {
        let e = s.A.getUserIds();
        return null == e || o(e, r.default.getId());
    });
}
