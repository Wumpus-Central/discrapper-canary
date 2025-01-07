r.d(n, {
    Gt: function () {
        return f;
    },
    LZ: function () {
        return d;
    },
    ZP: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(348327),
    l = r.n(o),
    u = r(392711),
    c = r.n(u);
let d = s.createContext([]);
function f(e) {
    let { children: n, value: r } = e;
    return (0, a.jsx)(d.Provider, {
        value: r,
        children: n
    });
}
function _(e, n) {
    return 0 === n.length ? e : [...e, ...c().flatten(n)];
}
function h() {
    for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    let [a, o] = s.useState(r),
        u = s.useContext(d),
        c = s.useMemo(() => _(u, a), [a, u]),
        f = s.useMemo(() => _(u, a.slice(0, a.length - 1)), [a, u]);
    return (
        s.useEffect(() => {
            !l()(r, a) && o(r);
        }, [r, a]),
        {
            analyticsLocations: c,
            sourceAnalyticsLocations: f,
            newestAnalyticsLocation: null !== (e = c[c.length - 1]) && void 0 !== e ? e : null
        }
    );
}
