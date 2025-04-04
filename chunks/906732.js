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
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, o] = i.useState(t),
        s = i.useContext(c),
        l = i.useMemo(() => d(s, r), [r, s]),
        u = i.useMemo(() => d(s, r.slice(0, r.length - 1)), [r, s]);
    return (
        i.useEffect(() => {
            a()(t, r) || o(t);
        }, [t, r]),
        {
            analyticsLocations: l,
            sourceAnalyticsLocations: u,
            parentAnalyticsLocation: u[u.length - 1],
            newestAnalyticsLocation: l[l.length - 1]
        }
    );
}
