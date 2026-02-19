"use strict";
n.d(t, { c: () => c, w: () => o });
var i = n(311907),
    s = n(961350),
    l = n(383501),
    r = n(162605);
function a(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.bG)([r.A, s.default], () => {
        if (null == e) return !0;
        let t = r.A.getUserIds(e);
        return null == t || a(t, s.default.getId());
    });
}
function c() {
    return (0, i.bG)([l.A, s.default], () => {
        let e = l.A.getUserIds();
        return null == e || a(e, s.default.getId());
    });
}
