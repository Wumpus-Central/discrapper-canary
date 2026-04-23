n.d(t, { c: () => d, w: () => o });
var i = n(17928),
    a = n(495544),
    l = n(763827),
    r = n(116956);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.bG)([r.A, a.default], () => {
        if (null == e) return !0;
        let t = r.A.getUserIds(e);
        return null == t || s(t, a.default.getId());
    });
}
function d() {
    return (0, i.bG)([l.A, a.default], () => {
        let e = l.A.getUserIds();
        return null == e || s(e, a.default.getId());
    });
}
