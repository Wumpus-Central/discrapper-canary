n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(884697),
    a = n(388032),
    c = n(478422);
let u = (e) => {
    let { category: t, daysRemainingText: n = a.t.Io7ozn, className: l } = e;
    if (null == t.unpublishedAt) return null;
    let u = (0, s.OT)(t.unpublishedAt),
        d = u > 1 ? a.intl.formatToPlainString(n, { days: u }) : a.intl.string(a.t.Bc13HF);
    return (0, r.jsx)(o.IGR, {
        disableColor: !0,
        text: d,
        className: i()(c.badge, l),
    });
};
