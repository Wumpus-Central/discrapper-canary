n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    i = n(481060),
    o = n(884697),
    s = n(388032),
    c = n(60779);
let u = (e) => {
    let { category: t, daysRemainingText: n = s.t.Io7ozn, className: l } = e;
    if (null == t.unpublishedAt) return null;
    let u = (0, o.OT)(t.unpublishedAt),
        d = u > 1 ? s.intl.formatToPlainString(n, { days: u }) : s.intl.string(s.t.Bc13HF);
    return (0, r.jsx)(i.IGR, {
        disableColor: !0,
        text: d,
        className: a()(c.badge, l),
    });
};
