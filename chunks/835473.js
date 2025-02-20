n.d(t, {
    Z: () => d,
    q: () => f
});
var r = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(902704),
    l = n(823379),
    c = n(728345),
    u = n(812206);
function d(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = r.useRef([]);
    return (
        r.useEffect(() => {
            t && !(0, s.E)(e, n.current) && (c.ZP.fetchApplications(o()(e).filter(l.lm).uniq().value(), !1), (n.current = e));
        }, [e, t]),
        (0, a.Wu)([u.Z], () => e.map((e) => (null != e ? u.Z.getApplication(e) : void 0)))
    );
}
function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return d(null != e ? [e] : [], t)[0];
}
