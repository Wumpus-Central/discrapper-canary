t.d(n, { Z: () => u });
var r = t(54381);
t(473749);
var l = t(120356),
    i = t.n(l),
    a = t(481060),
    o = t(884697),
    s = t(388032),
    c = t(910842);
let u = (e) => {
    let { category: n, daysRemainingText: t = s.t.Io7ozn, className: l } = e;
    if (null == n.unpublishedAt) return null;
    let u = (0, o.OT)(n.unpublishedAt),
        d = u > 1 ? s.intl.formatToPlainString(t, { days: u }) : s.intl.string(s.t.Bc13HF);
    return (0, r.jsx)(a.IGR, {
        disableColor: !0,
        text: d,
        className: i()(c.badge, l),
    });
};
