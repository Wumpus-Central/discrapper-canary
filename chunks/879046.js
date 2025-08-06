n.d(t, { Z: () => u });
var r = n(499254),
    i = n(827498),
    o = n(835473),
    a = n(541716),
    s = n(561308),
    l = n(701488),
    c = n(388032);
function u(e) {
    let { entry: t } = e,
        n = (0, o.q)(t.extra.application_id),
        u = null == n ? void 0 : n.getIconURL(l.Si.LARGE),
        d = t.extra.activity_name,
        f = (0, s.Jg)(t) ? c.t.vPg1JS : c.t.rPqqtr,
        _ = {
            onClick: () => {
                r.__(i._b.TEXT, a.Ie.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: c.intl.formatToPlainString(c.t.NTHttL, { title: d })
        };
    return {
        thumbnailUrl: u,
        title: d,
        titleClickable: _,
        thumbnailClickable: _,
        userDescription: f
    };
}
