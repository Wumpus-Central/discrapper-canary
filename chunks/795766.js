n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(58736),
    r = n(181079),
    o = n(422258),
    d = n(93055),
    c = n(616075),
    u = n(515610),
    h = n(985018);
function A(e) {
    let { channel: t } = e,
        { isFavoritesPerk: n } = (0, c.l)("ChannelFavoritesHeaderButton"),
        A = (0, u.A)(),
        { notifyFavoriteAdded: g } = (0, d.CJ)(),
        m = (0, l.bG)([r.A], () => r.A.isFavorite(t.id));
    if (!n || A) return null;
    let p = m ? s.Gg5 : s.yA2,
        _ = m ? h.intl.string(h.t.Bou7lT) : h.intl.string(h.t["4wcdE/"]);
    return (0, i.jsx)(a.Ay.Icon, {
        icon: p,
        tooltip: _,
        "aria-label": _,
        onClick: () => {
            m ? (0, o.i_)(t.id) : (g(), (0, o.Jz)(t.id));
        },
    });
}
