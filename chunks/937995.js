n.d(t, {
    ZP: () => l,
    h9: () => o,
    nM: () => s
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(846519);
let s = r.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null
    }),
    o = r.createContext(!1);
function l(e) {
    let { children: t, timeout: n } = e,
        [l, u] = r.useState(!1),
        c = r.useRef(new Set()),
        d = r.useRef(null);
    r.useEffect(
        () => (
            (d.current = new a.sW(n, () => u(!0))),
            d.current.delay(),
            () => {
                var e;
                null === (e = d.current) || void 0 === e || e.cancel(), (d.current = null);
            }
        ),
        [n]
    );
    let f = r.useCallback(
            (e) => {
                var t;
                u(!1), c.current.add(e), null === (t = d.current) || void 0 === t || t.cancel();
            },
            [c, d, u]
        ),
        _ = r.useCallback(
            (e) => {
                if ((c.current.delete(e), 0 === c.current.size)) {
                    var t;
                    null === (t = d.current) || void 0 === t || t.delay();
                }
            },
            [c, d]
        ),
        p = r.useCallback(() => {
            if ((u(!1), 0 === c.current.size)) {
                var e;
                null === (e = d.current) || void 0 === e || e.delay();
            }
        }, [c, d, u]),
        h = r.useCallback(() => {
            var e;
            !(c.current.size > 0) && (null === (e = d.current) || void 0 === e || e.cancel(), u(!0));
        }, [d, u]),
        m = r.useMemo(
            () => ({
                onAllowIdle: _,
                onPreventIdle: f,
                onActive: p,
                onForceIdle: h
            }),
            [_, f, p, h]
        );
    return (0, i.jsx)(o.Provider, {
        value: l,
        children: (0, i.jsx)(s.Provider, {
            value: m,
            children: t({
                idle: l,
                ...m
            })
        })
    });
}
