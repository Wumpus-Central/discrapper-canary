n.d(t, {
    bW: () => c,
    hN: () => u,
    vW: () => l
}),
    n(47120);
var r = n(200651),
    i = n(192379);
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
function a(e) {
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
let s = i.createContext({
    enabled: !0,
    highlight: !1
});
function l(e) {
    let { children: t, overwriteValue: n } = e,
        o = i.useMemo(
            () => ({
                enabled: !0,
                highlight: !1
            }),
            []
        );
    return (0, r.jsx)(s.Provider, {
        value: null != n ? n : o,
        children: t
    });
}
function c() {
    return i.useContext(s);
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { size: 24 };
    return function (o) {
        let { enabled: s, highlight: l } = c();
        if (!s) return (0, r.jsx)(e, a({}, o));
        {
            var u, d, f, _;
            let e = a({}, o);
            for (let [t, r] of Object.entries(
                (n = a(
                    {
                        foreground: 'colorClass',
                        color: 'color'
                    },
                    null != n ? n : {}
                ))
            )) {
                let n = o[t];
                if ((null == n && 'color' === t && (n = l ? 'yellow' : 'currentColor'), 'remove' === r)) {
                    delete e[t];
                    continue;
                }
                e[r] = n;
            }
            return (null !== (f = (u = e).width) && void 0 !== f) || (u.width = i.size), (null !== (_ = (d = e).height) && void 0 !== _) || (d.height = i.size), (0, r.jsx)(t, a({}, e));
        }
    };
}
