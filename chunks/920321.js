n.d(t, { Z: () => u });
var r = n(192379),
    i = n(442837),
    o = n(131951),
    a = n(65154),
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
    let e = (0, i.e7)([o.Z], () => o.Z.getVideoDevices());
    return r.useMemo(() => {
        let t = c({}, e),
            n = t[a.w5];
        return null == n || (t[a.w5] = c({}, n, n.disabled && { name: s.NW.string(s.t.WKWARU) })), t;
    }, [e]);
}
