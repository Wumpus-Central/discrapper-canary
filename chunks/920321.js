n.d(t, { Z: () => u });
var r = n(192379),
    i = n(442837),
    a = n(131951),
    o = n(65154),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u() {
    let e = (0, i.e7)([a.Z], () => a.Z.getVideoDevices());
    return r.useMemo(() => {
        let t = c({}, e),
            n = t[o.w5];
        return null == n || (t[o.w5] = c({}, n, n.disabled && { name: s.intl.string(s.t.WKWARU) })), t;
    }, [e]);
}
