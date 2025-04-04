n.d(t, {
    ZP: () => u,
    h9: () => c,
    nM: () => l
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(846519);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
let l = i.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null
    }),
    c = i.createContext(!1);
function u(e) {
    let { children: t, timeout: n } = e,
        [a, u] = i.useState(!1),
        d = i.useRef(new Set()),
        f = i.useRef(null);
    i.useEffect(
        () => (
            (f.current = new o.sW(n, () => u(!0))),
            f.current.delay(),
            () => {
                var e;
                null == (e = f.current) || e.cancel(), (f.current = null);
            }
        ),
        [n]
    );
    let _ = i.useCallback(
            (e) => {
                var t;
                u(!1), d.current.add(e), null == (t = f.current) || t.cancel();
            },
            [d, f, u]
        ),
        p = i.useCallback(
            (e) => {
                if ((d.current.delete(e), 0 === d.current.size)) {
                    var t;
                    null == (t = f.current) || t.delay();
                }
            },
            [d, f]
        ),
        h = i.useCallback(() => {
            if ((u(!1), 0 === d.current.size)) {
                var e;
                null == (e = f.current) || e.delay();
            }
        }, [d, f, u]),
        m = i.useCallback(() => {
            var e;
            d.current.size > 0 || (null == (e = f.current) || e.cancel(), u(!0));
        }, [f, u]),
        g = i.useMemo(
            () => ({
                onAllowIdle: p,
                onPreventIdle: _,
                onActive: h,
                onForceIdle: m
            }),
            [p, _, h, m]
        );
    return (0, r.jsx)(c.Provider, {
        value: a,
        children: (0, r.jsx)(l.Provider, {
            value: g,
            children: t(s({ idle: a }, g))
        })
    });
}
