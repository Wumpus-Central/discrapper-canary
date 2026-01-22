n.d(t, {
    A: () => a,
});
var r = n(627968),
    l = n(64700),
    i = n(397927);

function a(e, t) {
    return l.useCallback(() => {
        (0, i.mMO)(async () => {
            let { default: l } = await Promise.all([n.e("74488"), n.e("99089")]).then(n.bind(n, 285899));
            return (n) =>
                (0, r.jsx)(
                    l,
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
