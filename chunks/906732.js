n.d(t, {
    Gt: () => u,
    LZ: () => c,
    ZP: () => f
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(348327),
    a = n.n(o),
    s = n(392711),
    l = n.n(s);
let c = i.createContext([]);
function u(e) {
    let { children: t, value: n } = e;
    return (0, r.jsx)(c.Provider, {
        value: n,
        children: t
    });
}
function d(e, t) {
    return 0 === t.length ? e : [...e, ...l().flatten(t)];
}
function f() {
    for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    let [o, s] = i.useState(n),
        l = i.useContext(c),
        u = i.useMemo(() => d(l, o), [o, l]),
        f = i.useMemo(() => d(l, o.slice(0, o.length - 1)), [o, l]);
    return (
        i.useEffect(() => {
            a()(n, o) || s(n);
        }, [n, o]),
        {
            analyticsLocations: u,
            sourceAnalyticsLocations: f,
            newestAnalyticsLocation: null !== (e = u[u.length - 1]) && void 0 !== e ? e : null
        }
    );
}
