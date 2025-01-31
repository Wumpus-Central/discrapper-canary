n.d(t, {
    Gt: () => c,
    LZ: () => u,
    ZP: () => f
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(348327),
    s = n.n(a),
    o = n(392711),
    l = n.n(o);
let u = r.createContext([]);
function c(e) {
    let { children: t, value: n } = e;
    return (0, i.jsx)(u.Provider, {
        value: n,
        children: t
    });
}
function d(e, t) {
    return 0 === t.length ? e : [...e, ...l().flatten(t)];
}
function f() {
    for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
    let [a, o] = r.useState(n),
        l = r.useContext(u),
        c = r.useMemo(() => d(l, a), [a, l]),
        f = r.useMemo(() => d(l, a.slice(0, a.length - 1)), [a, l]);
    return (
        r.useEffect(() => {
            s()(n, a) || o(n);
        }, [n, a]),
        {
            analyticsLocations: c,
            sourceAnalyticsLocations: f,
            newestAnalyticsLocation: null !== (e = c[c.length - 1]) && void 0 !== e ? e : null
        }
    );
}
