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
    for (var e, t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    let [s, l] = i.useState(r),
        u = i.useContext(c),
        f = i.useMemo(() => d(u, s), [s, u]),
        _ = i.useMemo(() => d(u, s.slice(0, s.length - 1)), [s, u]);
    return (
        i.useEffect(() => {
            a()(r, s) || l(r);
        }, [r, s]),
        {
            analyticsLocations: f,
            sourceAnalyticsLocations: _,
            parentAnalyticsLocation: null !== (e = _[_.length - 1]) && void 0 !== e ? e : null,
            newestAnalyticsLocation: null !== (t = f[f.length - 1]) && void 0 !== t ? t : null
        }
    );
}
