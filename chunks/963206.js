n.d(t, { P: () => l });
var r = n(54381),
    i = n(377108),
    a = n(708406),
    o = n(29909),
    s = n(253108);
let l = (e, t, n, l, c) => () => {
    let u = null != t ? t : n;
    if (null == u) return null;
    let { url: d, proxyURL: f, width: p, height: _ } = u,
        m = null != f && "" !== f ? f : d,
        h = (0, a.Fo)({
            providerName: c,
            thumbnail: l,
        });
    return (0, r.jsx)(o.Z, {
        width: p,
        height: _,
        src: m,
        gifSrc: h,
        url: null != e && "" !== e ? e : null != f && "" !== f ? f : d,
        format: null != n ? i.EO.VIDEO : i.EO.IMAGE,
        className: s.gifFavoriteButton,
    });
};
