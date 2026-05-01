n.d(t, { c: () => d, w: () => o });
var i = n(17928),
    l = n(495544),
    a = n(763827),
    r = n(116956);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.bG)([r.A, l.default], () => {
        if (null == e) return !0;
        let t = r.A.getUserIds(e);
        return null == t || s(t, l.default.getId());
    });
}
function d() {
    return (0, i.bG)([a.A, l.default], () => {
        let e = a.A.getUserIds();
        return null == e || s(e, l.default.getId());
    });
}
