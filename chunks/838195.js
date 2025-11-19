n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(812206),
    a = n(531826);
function s(e) {
    let { applicationId: t, channelId: s, mediaUrl: o } = e,
        c = l.Z.getApplication(t),
        u =
            null !=
            (0, a.ZP)({
                application: c,
                channelId: s,
            })
                ? i.u1M
                : i.z1l;
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e("4530"), n.e("1408")]).then(n.bind(n, 899201));
            return (n) =>
                (0, r.jsx)(
                    e,
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
                            applicationId: t,
                            mediaUrl: o,
                        },
                        n,
                    ),
                );
        },
        {
            modalKey: "activity-share-moment-modal",
            contextKey: u,
        },
    );
}
