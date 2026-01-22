n.d(t, {
    c: () => c,
    w: () => o,
});
var r = n(311907),
    l = n(961350),
    i = n(383501),
    a = n(162605);
function s(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, r.bG)([a.A, l.default], () => {
        if (null == e) return !0;
        let t = a.A.getUserIds(e);
        return null == t || s(t, l.default.getId());
    });
}
function c() {
    return (0, r.bG)([i.A, l.default], () => {
        let e = i.A.getUserIds();
        return null == e || s(e, l.default.getId());
    });
}
