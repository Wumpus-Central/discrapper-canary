n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(272812),
    a = n(200749),
    s = n(652215),
    o = n(985018),
    c = n(492955),
    u = n(828230);

function d(e) {
    let { channel: t, guild: d, width: f, inPopout: p } = e;
    return (0, r.jsx)(i.A, {
        className: c.zr,
        children: (0, r.jsx)(a.A, {
            artURL: u,
            size: (0, a.J)(f),
            header: o.intl.string(o.t.O4FiWi),
            onCTAClick: () =>
                (0, l.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(
                            n.bind(n, 234355),
                        );
                        return (n) => {
                            var l, i;
                            return (0, r.jsx)(
                                e,
                                ((l = (function (e) {
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
                                })({}, n)),
                                (i = i =
                                    {
                                        guild: d,
                                        channel: t,
                                        source: s.PE1.CHANNEL_CALL,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                l),
                            );
                        };
                    },
                    {
                        contextKey: p ? l.KX8 : l.SYi,
                    },
                ),
            callToAction: o.intl.string(o.t.VINpSK),
        }),
    });
}
