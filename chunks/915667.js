n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(568065);
function a(e) {
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
}
function s(e, t) {
    (0, l.mMO)(
        async () => {
            switch (t.type) {
                case i.o9.LEVEL:
                    let { default: l } = await n.e("96914").then(n.bind(n, 391209));
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            a(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                case i.o9.PERK: {
                    let { default: l } = await Promise.all([n.e("63379"), n.e("34249")]).then(n.bind(n, 940481));
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            a(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                }
            }
        },
        { modalKey: i.Fq },
    );
}
