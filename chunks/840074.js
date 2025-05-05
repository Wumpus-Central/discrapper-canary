n.d(t, { _: () => o });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(812206),
    a = n(531826);
function o(e) {
    let { applicationId: t, customId: o, linkId: s, message: c, onShare: u } = e,
        d = l.Z.getApplication(t);
    if (null == d) return void u(!1, !1);
    let p = null != (0, a.jA)({ applicationId: d.id }) ? i.u1M : i.z1l,
        h = !1;
    function f(e) {
        u(e, h);
    }
    function g() {
        h = !0;
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
                            customId: o,
                            linkId: s,
                            message: c,
                            onCopyLink: g,
                            onShare: f
                        },
                        n
                    )
                );
        },
        {
            modalKey: 'activity-share-moment-modal',
            contextKey: p,
            onCloseCallback: () => {
                u(!1, h);
            }
        }
    );
}
