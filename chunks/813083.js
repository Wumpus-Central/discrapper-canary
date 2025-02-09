n.d(t, { Z: () => h }), n(627341);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    a = n(278074),
    s = n(780384),
    o = n(481060),
    d = n(410030),
    c = n(884697),
    u = n(388032),
    C = n(920037);
let h = (e) => {
    let { category: t, display: n, className: l } = e,
        h = (0, d.ZP)();
    if (null == t.unpublishedAt) return null;
    let p = (0, c.OT)(t.unpublishedAt);
    function m(e) {
        return (0, r.jsx)(o.IGR, {
            disableColor: !0,
            text: e,
            className: i()((0, s.wj)(h) ? C.badgeDark : C.badgeLight, l)
        });
    }
    return (0, a.EQ)([n, p > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => m(u.intl.formatToPlainString(u.t['8gsP5O'], { days: p })))
        .with(['modal', !0], () => m(u.intl.formatToPlainString(u.t.Io7ozs, { days: p })))
        .otherwise(() => m(u.intl.string(u.t.Bc13HB)));
};
