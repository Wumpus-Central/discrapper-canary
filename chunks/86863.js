n.d(t, { n: () => f });
var r = n(255367),
    i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(384275),
    s = n(468026),
    c = n(317381),
    u = n(513202),
    d = n(626135),
    p = n(981631),
    h = n(388032);
let f = (e) => {
    let { className: t, channel: n, user: f, application: m, oauth2Token: g } = e,
        b = (0, i.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivities());
    if (!f.bot || null == m) return null;
    function _() {
        o.Z.delete(g.id);
        let e = b.get(m.id);
        null != e &&
            u.Z.leaveActivity({
                location: e.location,
                applicationId: m.id
            });
    }
    return (0, r.jsx)(l.zx, {
        className: t,
        size: l.Ph.SMALL,
        color: l.zx.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n) {
                let i = h.intl.formatToPlainString(h.t.QWGvxM, { applicationName: e.name });
                ((0, a.h7j)((e) =>
                    (0, r.jsx)(
                        s.default,
                        (function (e) {
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
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })(
                            {
                                title: h.intl.string(h.t.DT39Aw),
                                body: i,
                                confirmText: h.intl.string(h.t.xUqheH),
                                confirmColor: l.Tt.RED,
                                cancelText: h.intl.string(h.t['ETE/oK']),
                                onConfirm: t
                            },
                            e
                        )
                    )
                ),
                    d.default.track(p.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: n.id,
                        channel_type: n.type
                    }));
            })(m, _, n),
        children: h.intl.string(h.t['5S3sQE'])
    });
};
