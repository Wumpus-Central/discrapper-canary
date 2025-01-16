n(627341);
var r,
    a,
    i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    o = n(278074),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(884697),
    h = n(388032),
    g = n(660370);
((a = r || (r = {})).BANNER = 'banner'), (a.MODAL = 'modal'), (a.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: n, className: r } = e,
        a = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let l = (0, m.OT)(t.unpublishedAt);
    function p(e) {
        return (0, i.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: s()((0, c.wj)(a) ? g.badgeDark : g.badgeLight, r)
        });
    }
    return (0, o.EQ)([n, l > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => p(h.intl.formatToPlainString(h.t['8gsP5O'], { days: l })))
        .with(['modal', !0], () => p(h.intl.formatToPlainString(h.t.Io7ozs, { days: l })))
        .otherwise(() => p(h.intl.string(h.t.Bc13HB)));
};
