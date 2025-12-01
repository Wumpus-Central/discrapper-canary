n.d(t, { Z: () => u });
var r = n(499254),
    i = n(827498),
    a = n(835473),
    o = n(541716),
    s = n(561308),
    l = n(701488),
    c = n(388032);
function u(e) {
    let { entry: t } = e,
        n = (0, a.q)(t.extra.application_id),
        u = null == n ? void 0 : n.getIconURL(l.Si.LARGE),
        d = t.extra.activity_name,
        f = (0, s.Jg)(t) ? c.t.vPg1JT : c.t.rPqqts,
        p = {
            onClick: () => {
                r._(i._b.TEXT, o.Ie.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: c.intl.formatToPlainString(c.t.NTHttN, { title: d }),
        };
    return {
        thumbnailUrl: u,
        title: d,
        titleClickable: p,
        thumbnailClickable: p,
        userDescription: f,
    };
}
