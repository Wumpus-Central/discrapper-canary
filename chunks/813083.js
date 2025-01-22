n(627341);
var r,
    i,
    l = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    o = n(278074),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    C = n(884697),
    h = n(388032),
    p = n(660370);
((i = r || (r = {})).BANNER = 'banner'), (i.MODAL = 'modal'), (i.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: n, className: r } = e,
        i = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let s = (0, C.OT)(t.unpublishedAt);
    function f(e) {
        return (0, l.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: a()((0, c.wj)(i) ? p.badgeDark : p.badgeLight, r)
        });
    }
    return (0, o.EQ)([n, s > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => f(h.intl.formatToPlainString(h.t['8gsP5O'], { days: s })))
        .with(['modal', !0], () => f(h.intl.formatToPlainString(h.t.Io7ozs, { days: s })))
        .otherwise(() => f(h.intl.string(h.t.Bc13HB)));
};
