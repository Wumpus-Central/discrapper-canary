n.d(t, { P: () => s });
var r = n(54381),
    i = n(377108),
    a = n(29909),
    o = n(636428);
let s = (e, t, n) => () => {
    let s = null != t ? t : n;
    if (null == s) return null;
    let { url: l, proxyURL: c, width: u, height: d } = s;
    return (0, r.jsx)(a.Z, {
        width: u,
        height: d,
        src: null != c && "" !== c ? c : l,
        url: null != e && "" !== e ? e : null != c && "" !== c ? c : l,
        format: null != n ? i.EO.VIDEO : i.EO.IMAGE,
        className: o.gifFavoriteButton,
    });
};
