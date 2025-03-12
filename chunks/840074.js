n.d(t, { _: () => s });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(812206),
    a = n(531826);
function s(e) {
    let { applicationId: t, channelId: s, launchParams: c, message: u, onShare: d } = e,
        p = o.Z.getApplication(t),
        h =
            null !=
            (0, a.ZP)({
                application: p,
                channelId: s
            })
                ? l.u1M
                : l.z1l,
        f = !1;
    (0, l.ZDy)(
        async () => {
            let { default: e } = await n.e('83098').then(n.bind(n, 137021)),
                l = i.useCallback((e) => {
                    d(e, f);
                }, []);
            return (n) =>
                (0, r.jsx)(
                    e,
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
                    })(
                        {
                            applicationId: t,
                            channelId: s,
                            launchParams: c,
                            message: u,
                            onCopyLink: () => {
                                f = !0;
                            },
                            onShare: l
                        },
                        n
                    )
                );
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: h,
            onCloseCallback: () => {
                d(!1, f);
            }
        }
    );
}
