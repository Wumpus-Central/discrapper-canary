n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    a = n(576125),
    o = n(465858),
    s = n(112843),
    l = n(524484);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e) {
    let { callTileRef: t, isFiring: n } = e,
        r = (0, s.Z)(),
        a = (0, o.Z)(t);
    return (
        i.useEffect(() => {
            n && null != a && null != t && r.fire(a.x + t.clientWidth / 2, a.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, r, n, a]),
        null
    );
}
function f(e) {
    return (0, r.jsx)(a.Z, {
        confettiLocation: l.Hn.CALL_TILE,
        children: (0, r.jsx)(d, u({}, e))
    });
}
