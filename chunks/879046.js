r.d(t, { Z: () => u });
var n = r(499254),
    l = r(827498),
    i = r(835473),
    o = r(541716),
    a = r(561308),
    c = r(701488),
    s = r(388032);
function u(e) {
    let { entry: t } = e,
        r = (0, i.q)(t.extra.application_id),
        u = null == r ? void 0 : r.getIconURL(c.Si.LARGE),
        p = t.extra.activity_name,
        d = (0, a.Jg)(t) ? s.t.vPg1JS : s.t.rPqqtr,
        f = {
            onClick: () => {
                n.__(l._b.TEXT, o.Ie.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: s.NW.formatToPlainString(s.t.NTHttL, { title: p })
        };
    return {
        thumbnailUrl: u,
        title: p,
        titleClickable: f,
        thumbnailClickable: f,
        userDescription: d
    };
}
