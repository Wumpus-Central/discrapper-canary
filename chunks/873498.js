n.d(t, { A: () => o });
var l = n(205327),
    a = n(261020),
    r = n(424994),
    s = n(272984),
    i = n(985018);
function o(e) {
    let t,
        { entry: n, baseEntryData: o } = e,
        { provider: d, image_url: c } = n.extra.media,
        u = n.extra.artist.name,
        m = {
            onClick: () => (0, a.n)(s.M0.ALBUM, n.extra.media.external_parent_id),
            ariaDescription: i.intl.formatToPlainString(i.t.xTsar2, { itemName: n.extra.media.parent_title }),
        },
        p = {
            onClick: () => (0, a.n)(s.M0.ARTIST, n.extra.artist.external_id),
            ariaDescription: i.intl.formatToPlainString(i.t.xTsar2, { itemName: u }),
        };
    return (
        d === l.X.SPOTIFY && (t = { type: r.a4.SPOTIFY }),
        {
            ...o,
            title: u,
            thumbnailUrl: c,
            titleClickable: p,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: i.t.CcVI1T,
            providerIconProps: t,
        }
    );
}
