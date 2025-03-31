n.d(t, { _: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(812206),
    o = n(531826);
function a(e) {
    let { applicationId: t, customId: a, linkId: s, message: c, onShare: u, referrerId: d } = e,
        p = l.Z.getApplication(t);
    if (null == p) {
        u(!1, !1);
        return;
    }
    let h = null != (0, o.jA)({ applicationId: p.id }) ? i.u1M : i.z1l,
        f = !1;
    function g(e) {
        u(e, f);
    }
    function m() {
        f = !0;
    }
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e('83098').then(n.bind(n, 137021));
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
                            customId: a,
                            linkId: s,
                            message: c,
                            onCopyLink: m,
                            onShare: g,
                            referrerId: d
                        },
                        n
                    )
                );
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: h,
            onCloseCallback: () => {
                u(!1, f);
            }
        }
    );
}
