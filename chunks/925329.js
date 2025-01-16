var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(829968),
    u = r(565138),
    c = r(474936),
    d = r(388032),
    f = r(613671);
let _ = {
    XXSMALL: f.xxsmall,
    XSMALL: f.xsmall,
    SMALL: f.small,
    MEDIUM: f.medium,
    LARGE: f.large
};
function h(e) {
    switch (e) {
        case _.XXSMALL:
            return 16;
        case _.XSMALL:
            return 24;
        case _.SMALL:
            return 30;
        case _.MEDIUM:
            return 40;
        case _.LARGE:
            return 60;
        default:
            return 80;
    }
}
function p(e) {
    if (null == e) return null;
    switch (e) {
        case c.Si.GUILD:
            return r(632342);
        case c.Si.TIER_0:
            return r(467596);
        case c.Si.TIER_1:
            return r(670957);
        case c.Si.TIER_2:
        case c.Si.LEGACY:
            return r(480768);
        default:
            return null;
    }
}
function m(e) {
    switch (e) {
        case _.XSMALL:
            return u.Z.Sizes.SMALLER;
        case _.SMALL:
            return u.Z.Sizes.SMALL;
        case _.LARGE:
            return u.Z.Sizes.LARGE;
        default:
        case _.MEDIUM:
            return u.Z.Sizes.MEDIUM;
    }
}
let g = (e) => {
    let n,
        { game: r, guild: a, skuId: c, pid: g, className: E, guildClassName: v, size: I = _.MEDIUM } = e;
    if ((null != c && (n = p(c)), null != r && null == n && (n = r.getIconURL(h(I))), null == (n = (0, l.Z)(g, n)) && null != a)) {
        let e = m(I);
        return (0, i.jsx)(u.Z, {
            className: s()(f.gameIcon, v, E),
            guild: a,
            size: e
        });
    }
    if (null == n)
        return (0, i.jsx)(o.UnknownGameIcon, {
            size: 'md',
            color: 'currentColor',
            className: s()(f.gameIcon, I, E)
        });
    let T = null == r ? void 0 : r.name,
        b = null != T && '' !== T ? d.intl.formatToPlainString(d.t.tiKyYm, { applicationName: T }) : d.intl.string(d.t['2B/phI']);
    return (0, i.jsx)('img', {
        alt: b,
        src: n,
        className: s()(f.gameIcon, I, E)
    });
};
(g.Sizes = _), (n.Z = g);
