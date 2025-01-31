n.d(c, { default: () => f });
var e = n(200651);
n(192379);
var a = n(98278),
    o = n(790527),
    i = n(474936),
    s = n(981631),
    d = n(388032),
    p = n(102525);
function f(t) {
    let { onClose: c, source: n, ...f } = t,
        r = d.intl.format(d.t.WMO9pq, {
            onAndMore: function () {
                c(), (0, a.z)(!0);
            }
        });
    return (0, e.jsx)(o.Z, {
        artURL: p.Z,
        type: i.cd.PREMIUM_GUILD_IDENTITY_MODAL,
        title: d.intl.string(d.t.kOEBKC),
        body: r,
        glowUp: r,
        analyticsSource: n,
        analyticsLocation: {
            section: s.jXE.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
            object: s.qAy.BUTTON_CTA
        },
        onClose: c,
        ...f
    });
}
