n.d(t, { c: () => c, w: () => u });
var l = n(17928),
    r = n(495544),
    s = n(763827),
    i = n(116956);
function a(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function u(e) {
    return (0, l.bG)([i.A, r.default], () => {
        if (null == e) return !0;
        let t = i.A.getUserIds(e);
        return null == t || a(t, r.default.getId());
    });
}
function c() {
    return (0, l.bG)([s.A, r.default], () => {
        let e = s.A.getUserIds();
        return null == e || a(e, r.default.getId());
    });
}
