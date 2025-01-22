r.d(n, {
    Z: function () {
        return f;
    },
    g: function () {
        return d;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(146282),
    l = r(327220),
    u = r(959580),
    c = r(371177);
function d(e, n) {
    let { types: r } = e;
    return !!(null == r || r.has(n.content_type)) || !1;
}
function f(e) {
    let { feed: n, filters: r } = (0, o.cj)([s.Z], () => ({
            feed: s.Z.getFeed(e),
            filters: s.Z.getFilters()
        })),
        i = a.useMemo(() => {
            let e = null == n ? void 0 : n.entries.map((e) => e.content);
            return null != r ? (null == e ? void 0 : e.filter((e) => d(r, e))) : e;
        }, [n, r]);
    return (i = (0, l.Z)(i)), (i = (0, u.Z)(i)), (i = (0, c.Z)(i));
}
