n.d(t, { c: () => c, w: () => l });
var i = n(17928),
    r = n(495544),
    a = n(763827),
    o = n(116956);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function l(e) {
    return (0, i.bG)([o.A, r.default], () => {
        if (null == e) return !0;
        let t = o.A.getUserIds(e);
        return null == t || s(t, r.default.getId());
    });
}
function c() {
    return (0, i.bG)([a.A, r.default], () => {
        let e = a.A.getUserIds();
        return null == e || s(e, r.default.getId());
    });
}
