n.d(t, { A: () => o });
var a = n(205327),
    l = n(261020),
    r = n(424994),
    i = n(272984),
    s = n(985018);
function o(e) {
    let t,
        { entry: n, baseEntryData: o } = e,
        { provider: d, image_url: c } = n.extra.media,
        u = n.extra.artist.name,
        m = {
            onClick: () => (0, l.n)(i.M0.ALBUM, n.extra.media.external_parent_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: n.extra.media.parent_title }),
        },
        _ = {
            onClick: () => (0, l.n)(i.M0.ARTIST, n.extra.artist.external_id),
            ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, { itemName: u }),
        };
    return (
        d === a.X.SPOTIFY && (t = { type: r.a4.SPOTIFY }),
        {
            ...o,
            title: u,
            thumbnailUrl: c,
            titleClickable: _,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: s.t.CcVI1T,
            providerIconProps: t,
        }
    );
}
