n.d(t, { Z: () => a });
var r = n(54381),
    i = n(473749),
    l = n(481060);
function a(e, t) {
    return i.useCallback(() => {
        (0, l.ZDy)(async () => {
            let { default: i } = await n.e("31924").then(n.bind(n, 625651));
            return (n) =>
                (0, r.jsx)(
                    i,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            guildId: e,
                            powerup: t,
                        },
                        n,
                    ),
                );
        });
    }, [e, t]);
}
