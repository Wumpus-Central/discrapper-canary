t.d(l, { P: () => a });
var r = t(255367),
    n = t(377108),
    i = t(29909),
    s = t(813102);
let a = (e, l, t) => () => {
    let a = null != l ? l : t;
    if (null == a) return null;
    let { url: o, proxyURL: d, width: u, height: c } = a;
    return (0, r.jsx)(i.Z, {
        width: u,
        height: c,
        src: null != d && '' !== d ? d : o,
        url: null != e && '' !== e ? e : null != d && '' !== d ? d : o,
        format: null != t ? n.EO.VIDEO : n.EO.IMAGE,
        className: s.gifFavoriteButton
    });
};
