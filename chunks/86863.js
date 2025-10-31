n.d(t, { n: () => f });
var r = n(951288),
    i = n(442837),
    l = n(159691),
    a = n(481060),
    o = n(384275),
    s = n(317381),
    c = n(513202),
    u = n(626135),
    d = n(981631),
    p = n(388032);
let f = (e) => {
    let { channel: t, user: n, application: f, oauth2Token: h } = e,
        m = (0, i.e7)([s.ZP], () => s.ZP.getSelfEmbeddedActivities());
    if (!n.bot || null == f) return null;
    function g() {
        o.Z.delete(h.id);
        let e = m.get(f.id);
        null != e &&
            c.Z.leaveActivity({
                location: e.location,
                applicationId: f.id,
            });
    }
    return (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t["5S3sQF"]),
        onClick: () => {
            (0, a.h7j)((e) =>
                (0, r.jsx)(
                    l.u_l,
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
                            title: p.intl.string(p.t["DT39A+"]),
                            subtitle: p.intl.formatToPlainString(p.t.QWGvxA, { applicationName: f.name }),
                            actions: [
                                {
                                    text: p.intl.string(p.t["ETE/oC"]),
                                    variant: "secondary",
                                    onClick: e.onClose,
                                },
                                {
                                    text: p.intl.string(p.t.xUqheM),
                                    variant: "critical-primary",
                                    onClick: () => {
                                        g(), e.onClose();
                                    },
                                },
                            ],
                        },
                        e,
                    ),
                ),
            ),
                u.default.track(d.rMx.APP_MANAGE_CTA_CLICKED, {
                    application_id: f.id,
                    channel_id: t.id,
                    channel_type: t.type,
                });
        },
    });
};
