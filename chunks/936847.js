n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(576125),
    a = n(465858),
    o = n(112843),
    s = n(524484);
function c(e) {
    let { callTileRef: t, isFiring: n } = e,
        r = (0, o.Z)(),
        l = (0, a.Z)(t);
    return (
        i.useEffect(() => {
            n && null != l && null != t && r.fire(l.x + t.clientWidth / 2, l.y + t.clientHeight / 2, { countMultiplier: 4 });
        }, [t, r, n, l]),
        null
    );
}
function u(e) {
    return (0, r.jsx)(l.Z, {
        confettiLocation: s.Hn.CALL_TILE,
        children: (0, r.jsx)(
            c,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)
        )
    });
}
