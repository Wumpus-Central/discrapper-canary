"use strict";
n.d(t, { c: () => d, w: () => o });
var r = n(17928),
    i = n(495544),
    a = n(763827),
    l = n(116956);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, r.bG)([l.A, i.default], () => {
        if (null == e) return !0;
        let t = l.A.getUserIds(e);
        return null == t || s(t, i.default.getId());
    });
}
function d() {
    return (0, r.bG)([a.A, i.default], () => {
        let e = a.A.getUserIds();
        return null == e || s(e, i.default.getId());
    });
}
