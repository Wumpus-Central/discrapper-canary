n.d(t, { n: () => p });
var i = n(200651),
    l = n(442837),
    a = n(481060),
    r = n(384275),
    s = n(468026),
    o = n(317381),
    c = n(513202),
    d = n(626135),
    u = n(981631),
    h = n(388032);
let p = (e) => {
    let { className: t, channel: n, user: p, application: m, oauth2Token: f } = e,
        g = (0, l.e7)([o.ZP], () => o.ZP.getSelfEmbeddedActivities());
    if (!p.bot || null == m) return null;
    function _() {
        r.Z.delete(f.id);
        let e = g.get(m.id);
        null != e &&
            c.Z.leaveActivity({
                location: e.location,
                applicationId: m.id
            });
    }
    return (0, i.jsx)(a.zxk, {
        className: t,
        size: a.PhG.SMALL,
        color: a.zxk.Colors.PRIMARY,
        onClick: () =>
            (function (e, t, n) {
                let l = h.intl.formatToPlainString(h.t.QWGvxM, { applicationName: e.name });
                (0, a.h7j)((e) =>
                    (0, i.jsx)(s.default, {
                        title: h.intl.string(h.t.DT39Aw),
                        body: l,
                        confirmText: h.intl.string(h.t.xUqheH),
                        cancelText: h.intl.string(h.t['ETE/oK']),
                        onConfirm: t,
                        ...e
                    })
                ),
                    d.default.track(u.rMx.APP_MANAGE_CTA_CLICKED, {
                        application_id: e.id,
                        channel_id: n.id,
                        channel_type: n.type
                    });
            })(m, _, n),
        children: h.intl.string(h.t['5S3sQE'])
    });
};
