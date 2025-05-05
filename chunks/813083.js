n.d(t, { Z: () => _ }), n(314940);
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(278074),
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
            className: a()((0, s.wj)(_) ? f.badgeDark : f.badgeLight, i)
        });
    }
    return (0, o.EQ)([n, p > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => h(d.intl.formatToPlainString(d.t['8gsP5O'], { days: p })))
        .with(['modal', !0], () => h(d.intl.formatToPlainString(d.t.Io7ozs, { days: p })))
        .otherwise(() => h(d.intl.string(d.t.Bc13HB)));
};
