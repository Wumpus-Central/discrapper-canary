n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    o = n(481060),
    i = n(884697),
    s = n(388032),
    c = n(60779);
let u = (e) => {
    let { category: t, daysRemainingText: n = s.t.Io7ozn, className: l } = e;
    if (null == t.unpublishedAt) return null;
    let u = (0, i.OT)(t.unpublishedAt),
        d = u > 1 ? s.intl.formatToPlainString(n, { days: u }) : s.intl.string(s.t.Bc13HF);
    return (0, r.jsx)(o.IGR, {
        disableColor: !0,
        text: d,
        className: a()(c.badge, l),
    });
};
