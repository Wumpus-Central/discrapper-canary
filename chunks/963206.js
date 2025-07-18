t.d(l, { P: () => a });
var n = t(255367),
    r = t(377108),
    i = t(29909),
    s = t(813102);
let a = (e, l, t) => () => {
    let a = null != l ? l : t;
    if (null == a) return null;
    let { url: o, proxyURL: u, width: d, height: c } = a;
    return (0, n.jsx)(i.Z, {
        width: d,
        height: c,
        src: null != u && '' !== u ? u : o,
        url: null != e && '' !== e ? e : null != u && '' !== u ? u : o,
        format: null != t ? r.EO.VIDEO : r.EO.IMAGE,
        className: s.gifFavoriteButton
    });
};
