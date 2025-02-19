n.d(t, { n: () => h });
var r = n(200651),
    i = n(442837),
    l = n(481060),
    o = n(384275),
    a = n(468026),
    s = n(317381),
    c = n(513202),
    u = n(626135),
    d = n(981631),
    p = n(388032);
let h = (e) => {
    let { className: t, channel: n, user: h, application: f, oauth2Token: m } = e,
        g = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities());
    if (!h.bot || null == f) return null;
    function b() {
        o.Z.delete(m.id);
        let e = g.get(f.id);
        null != e &&
            c.Z.leaveActivity({
                location: e.location,
                applicationId: f.id
            });
    }
    return (0, r.jsx)(l.zxk, {
        className: t,
        size: l.PhG.SMALL,
        color: l.zxk.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n) {
                let i = p.NW.formatToPlainString(p.t.QWGvxM, { applicationName: e.name });
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        a.default,
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
                                title: p.NW.string(p.t.DT39Aw),
                                body: i,
                                confirmText: p.NW.string(p.t.xUqheH),
                                confirmColor: l.Ttl.RED,
                                cancelText: p.NW.string(p.t['ETE/oK']),
                                onConfirm: t
                            },
                            e
                        )
                    )
                ),
                    u.default.track(d.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: n.id,
                        channel_type: n.type
                    });
            })(f, b, n),
        children: p.NW.string(p.t['5S3sQE'])
    });
};
