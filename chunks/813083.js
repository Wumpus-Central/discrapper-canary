t.d(n, { Z: () => c });
var r = t(951288);
t(647438);
var l = t(120356),
    i = t.n(l),
    a = t(481060),
    o = t(884697),
    s = t(388032),
    u = t(478422);
let c = (e) => {
    let { category: n, daysRemainingText: t = s.t.Io7ozn, className: l } = e;
    if (null == n.unpublishedAt) return null;
    let c = (0, o.OT)(n.unpublishedAt),
        d = c > 1 ? s.intl.formatToPlainString(t, { days: c }) : s.intl.string(s.t.Bc13HF);
    return (0, r.jsx)(a.IGR, {
        disableColor: !0,
        text: d,
        className: i()(u.badge, l),
    });
};
