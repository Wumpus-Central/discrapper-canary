r.d(n, {
    ZP: function () {
        return c;
    },
    h9: function () {
        return u;
    },
    nM: function () {
        return l;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(846519);
let l = o.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null
    }),
    u = o.createContext(!1);
function c(e) {
    let { children: n, timeout: r } = e,
        [i, c] = o.useState(!1),
        d = o.useRef(new Set()),
        f = o.useRef(null);
    o.useEffect(
        () => (
            (f.current = new s.sW(r, () => c(!0))),
            f.current.delay(),
            () => {
                var e;
                null === (e = f.current) || void 0 === e || e.cancel(), (f.current = null);
            }
        ),
        [r]
    );
    let p = o.useCallback(
            (e) => {
                var n;
                c(!1), d.current.add(e), null === (n = f.current) || void 0 === n || n.cancel();
            },
            [d, f, c]
        ),
        h = o.useCallback(
            (e) => {
                if ((d.current.delete(e), 0 === d.current.size)) {
                    var n;
                    null === (n = f.current) || void 0 === n || n.delay();
                }
            },
            [d, f]
        ),
        _ = o.useCallback(() => {
            if ((c(!1), 0 === d.current.size)) {
                var e;
                null === (e = f.current) || void 0 === e || e.delay();
            }
        }, [d, f, c]),
        m = o.useCallback(() => {
            var e;
            if (!(d.current.size > 0)) null === (e = f.current) || void 0 === e || e.cancel(), c(!0);
        }, [f, c]),
        g = o.useMemo(
            () => ({
                onAllowIdle: h,
                onPreventIdle: p,
                onActive: _,
                onForceIdle: m
            }),
            [h, p, _, m]
        );
    return (0, a.jsx)(u.Provider, {
        value: i,
        children: (0, a.jsx)(l.Provider, {
            value: g,
            children: n({
                idle: i,
                ...g
            })
        })
    });
}
