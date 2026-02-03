n.d(t, {
    p: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(92674),
    a = n(844222),
    o = n(384494);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "respect-motion-settings",
        s = arguments.length > 3 ? arguments[3] : void 0,
        c = r.useContext(a.C).reducedMotion.enabled,
        u = t;
    "animate-always" !== n && ("respect-motion-settings" !== n || c) && (u = l({}, t, o.W));
    let [d, f, p] = (0, i.useTransition)(e, u, s);
    return 4 == arguments.length ? [d, f, p] : d;
}
