n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(884697),
    i = n(388032),
    c = n(60779);
let u = (e) => {
    let { category: t, daysRemainingText: n = i.t.Io7ozn, className: l } = e;
    if (!(0, o.L9)(t.unpublishedAt)) return null;
    let u = (0, o.OT)(t.unpublishedAt),
        d = u > 1 ? i.intl.formatToPlainString(n, { days: u }) : i.intl.string(i.t.Bc13HF);
    return (0, r.jsx)(s.IGR, {
        disableColor: !0,
        text: d,
        className: a()(c.badge, l),
    });
};
