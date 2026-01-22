n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(58736),
    s = n(181079),
    o = n(422258),
    c = n(93055),
    u = n(616075),
    d = n(515610),
    f = n(985018);

function p(e) {
    let { channel: t } = e,
        { isFavoritesPerk: n } = (0, u.l)("ChannelFavoritesHeaderButton"),
        p = (0, d.A)(),
        { notifyFavoriteAdded: h } = (0, c.CJ)(),
        b = (0, l.bG)([s.A], () => s.A.isFavorite(t.id));
    if (!n || p) return null;
    let g = b ? i.Gg5 : i.yA2,
        m = b ? f.intl.string(f.t.Bou7lT) : f.intl.string(f.t["4wcdE/"]);
    return (0, r.jsx)(a.Ay.Icon, {
        icon: g,
        tooltip: m,
        "aria-label": m,
        onClick: () => {
            b ? (0, o.i_)(t.id) : (h(), (0, o.Jz)(t.id));
        },
    });
}
