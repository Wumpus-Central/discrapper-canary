n.d(t, {
    ZP: () => u,
    h9: () => c,
    nM: () => l
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(846519);
function o(e, t, n) {
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
                o(e, t, n[t]);
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
        [o, u] = i.useState(!1),
        d = i.useRef(new Set()),
        _ = i.useRef(null);
    i.useEffect(
        () => (
            (_.current = new a.sW(n, () => u(!0))),
            _.current.delay(),
            () => {
                var e;
                null == (e = _.current) || e.cancel(), (_.current = null);
            }
        ),
        [n]
    );
    let f = i.useCallback(
            (e) => {
                var t;
                u(!1), d.current.add(e), null == (t = _.current) || t.cancel();
            },
            [d, _, u]
        ),
        p = i.useCallback(
            (e) => {
                if ((d.current.delete(e), 0 === d.current.size)) {
                    var t;
                    null == (t = _.current) || t.delay();
                }
            },
            [d, _]
        ),
        h = i.useCallback(() => {
            if ((u(!1), 0 === d.current.size)) {
                var e;
                null == (e = _.current) || e.delay();
            }
        }, [d, _, u]),
        m = i.useCallback(() => {
            var e;
            d.current.size > 0 || (null == (e = _.current) || e.cancel(), u(!0));
        }, [_, u]),
        g = i.useMemo(
            () => ({
                onAllowIdle: p,
                onPreventIdle: f,
                onActive: h,
                onForceIdle: m
            }),
            [p, f, h, m]
        );
    return (0, r.jsx)(c.Provider, {
        value: o,
        children: (0, r.jsx)(l.Provider, {
            value: g,
            children: t(s({ idle: o }, g))
        })
    });
}
