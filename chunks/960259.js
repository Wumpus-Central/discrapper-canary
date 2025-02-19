n.d(t, {
    bW: () => d,
    hN: () => f,
    vW: () => u
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(679136),
    a = n(580747);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = i.createContext({
    enabled: !1,
    highlight: !1
});
function u(e) {
    let { children: t, overwriteValue: n } = e,
        { enabled: s } = o.Z.useExperiment({ location: 'web redesign icon context' }),
        l = (0, a.Z)('highlight_redesigned_icons'),
        u = i.useMemo(
            () => ({
                enabled: s,
                highlight: l
            }),
            [s, l]
        );
    return (0, r.jsx)(c.Provider, {
        value: null != n ? n : u,
        children: t
    });
}
function d() {
    return i.useContext(c);
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { size: 24 };
    return function (o) {
        let { enabled: a, highlight: s } = d();
        if (!a) return (0, r.jsx)(e, l({}, o));
        {
            var c, u, f, p;
            let e = l({}, o);
            for (let [t, r] of Object.entries(
                (n = l(
                    {
                        foreground: 'colorClass',
                        color: 'color'
                    },
                    null != n ? n : {}
                ))
            )) {
                let n = o[t];
                if ((null == n && 'color' === t && (n = s ? 'yellow' : 'currentColor'), 'remove' === r)) {
                    delete e[t];
                    continue;
                }
                e[r] = n;
            }
            return (null !== (f = (c = e).width) && void 0 !== f) || (c.width = i.size), (null !== (p = (u = e).height) && void 0 !== p) || (u.height = i.size), (0, r.jsx)(t, l({}, e));
        }
    };
}
