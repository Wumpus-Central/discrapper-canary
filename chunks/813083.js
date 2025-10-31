n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(481060),
    o = n(884697),
    s = n(388032),
    c = n(478422);
let u = (e) => {
    let { category: t, daysRemainingText: n = s.t.Io7ozn, className: l } = e;
    if (null == t.unpublishedAt) return null;
    let u = (0, o.OT)(t.unpublishedAt),
        d = u > 1 ? s.intl.formatToPlainString(n, { days: u }) : s.intl.string(s.t.Bc13HF);
    return (0, r.jsx)(a.IGR, {
        disableColor: !0,
        text: d,
        className: i()(c.badge, l),
    });
};
