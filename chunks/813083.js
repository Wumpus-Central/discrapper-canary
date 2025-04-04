n.d(t, { Z: () => _ }), n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(278074),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(884697),
    d = n(388032),
    f = n(148637);
let _ = (e) => {
    let { category: t, display: n, className: i } = e,
        _ = (0, c.ZP)();
    if (null == t.unpublishedAt) return null;
    let p = (0, u.OT)(t.unpublishedAt);
    function h(e) {
        return (0, r.jsx)(l.IGR, {
            disableColor: !0,
            text: e,
            className: o()((0, s.wj)(_) ? f.badgeDark : f.badgeLight, i)
        });
    }
    return (0, a.EQ)([n, p > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => h(d.NW.formatToPlainString(d.t['8gsP5O'], { days: p })))
        .with(['modal', !0], () => h(d.NW.formatToPlainString(d.t.Io7ozs, { days: p })))
        .otherwise(() => h(d.NW.string(d.t.Bc13HB)));
};
