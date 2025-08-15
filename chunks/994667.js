n.d(t, { dW: () => d });
var r = n(73800),
    i = n(442837),
    a = n(902704),
    o = n(104755),
    s = n(509003),
    l = n(543696);
function c(e) {
    let t = r.useRef([]);
    return (
        r.useEffect(() => {
            (0, a.E)(t.current, e) || ((0, o.v)(e), (t.current = e));
        }, [e]),
        (0, i.Wu)([l.Z], () => e.map((e) => (null != e ? l.Z.getSupplementalData(e) : void 0)))
    );
}
function u(e) {
    return c(null != e ? [e] : [])[0];
}
function d(e) {
    let t = u(e);
    return r.useMemo(
        () => async () => {
            null != e && (null != t && null != t.rootPlaceId ? await (0, s.yb)(t.rootPlaceId) : await (0, s.xr)(e));
        },
        [t, e],
    );
}
