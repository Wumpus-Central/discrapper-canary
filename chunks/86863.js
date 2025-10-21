n.d(t, { n: () => f });
var i = n(951288),
    r = n(442837),
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
        b = (0, r.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivities());
    if (!f.bot || null == m) return null;
    function C() {
        o.Z.delete(g.id);
        let e = b.get(m.id);
        null != e &&
            u.Z.leaveActivity({
                location: e.location,
                applicationId: m.id,
            });
    }
    return (0, i.jsx)(l.zx, {
        className: t,
        size: l.Ph.SMALL,
        color: l.zx.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n) {
                let r = h.intl.formatToPlainString(h.t.QWGvxA, { applicationName: e.name });
                (0, a.h7j)((e) =>
                    (0, i.jsx)(
                        s.default,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })(
                            {
                                title: h.intl.string(h.t["DT39A+"]),
                                body: r,
                                confirmText: h.intl.string(h.t.xUqheM),
                                confirmColor: l.Tt.RED,
                                cancelText: h.intl.string(h.t["ETE/oC"]),
                                onConfirm: t,
                            },
                            e,
                        ),
                    ),
                ),
                    d.default.track(p.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: n.id,
                        channel_type: n.type,
                    });
            })(m, C, n),
        children: h.intl.string(h.t["5S3sQF"]),
    });
};
