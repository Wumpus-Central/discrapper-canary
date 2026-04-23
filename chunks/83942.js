n.d(t, { c: () => d, w: () => o });
var i = n(311907),
    l = n(961350),
    s = n(383501),
    a = n(162605);
function r(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.bG)([a.A, l.default], () => {
        if (null == e) return !0;
        let t = a.A.getUserIds(e);
        return null == t || r(t, l.default.getId());
    });
}
function d() {
    return (0, i.bG)([s.A, l.default], () => {
        let e = s.A.getUserIds();
        return null == e || r(e, l.default.getId());
    });
}
