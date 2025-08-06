n.d(t, { n: () => g });
var r = n(255367),
    i = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(384275),
    l = n(468026),
    c = n(317381),
    u = n(513202),
    d = n(626135),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t, n) {
    let i = _.intl.formatToPlainString(_.t.QWGvxM, { applicationName: e.name });
    ((0, a.h7j)((e) =>
        (0, r.jsx)(
            l.default,
            h(
                {
                    title: _.intl.string(_.t.DT39Aw),
                    body: i,
                    confirmText: _.intl.string(_.t.xUqheH),
                    confirmColor: o.Tt.RED,
                    cancelText: _.intl.string(_.t['ETE/oK']),
                    onConfirm: t
                },
                e
            )
        )
    ),
        d.default.track(f.rMx.APP_MANAGE_CTA_CLICKED, {
            application_id: e.id,
            channel_id: n.id,
            channel_type: n.type
        }));
}
let g = (e) => {
    let { className: t, channel: n, user: a, application: l, oauth2Token: d } = e,
        f = (0, i.e7)([c.ZP], () => c.ZP.getSelfEmbeddedActivities());
    if (!a.bot || null == l) return null;
    function p() {
        s.Z.delete(d.id);
        let e = f.get(l.id);
        null != e &&
            u.Z.leaveActivity({
                location: e.location,
                applicationId: l.id
            });
    }
    return (0, r.jsx)(o.zx, {
        className: t,
        size: o.Ph.SMALL,
        color: o.zx.Colors.PRIMARY,
        onClick: () => m(l, p, n),
        children: _.intl.string(_.t['5S3sQE'])
    });
};
