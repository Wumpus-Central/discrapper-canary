var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(829968),
    u = r(565138),
    c = r(474936),
    d = r(388032),
    f = r(613671);
let p = {
    XXSMALL: f.xxsmall,
    XSMALL: f.xsmall,
    SMALL: f.small,
    MEDIUM: f.medium,
    LARGE: f.large
};
function h(e) {
    switch (e) {
        case p.XXSMALL:
            return 16;
        case p.XSMALL:
            return 24;
        case p.SMALL:
            return 30;
        case p.MEDIUM:
            return 40;
        case p.LARGE:
            return 60;
        default:
            return 80;
    }
}
function _(e) {
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
        case p.XSMALL:
            return u.Z.Sizes.SMALLER;
        case p.SMALL:
            return u.Z.Sizes.SMALL;
        case p.LARGE:
            return u.Z.Sizes.LARGE;
        default:
        case p.MEDIUM:
            return u.Z.Sizes.MEDIUM;
    }
}
let g = (e) => {
    let n,
        { game: r, guild: a, skuId: c, pid: g, className: E, guildClassName: v, size: y = p.MEDIUM } = e;
    if ((null != c && (n = _(c)), null != r && null == n && (n = r.getIconURL(h(y))), null == (n = (0, l.Z)(g, n)) && null != a)) {
        let e = m(y);
        return (0, i.jsx)(u.Z, {
            className: o()(f.gameIcon, v, E),
            guild: a,
            size: e
        });
    }
    if (null == n)
        return (0, i.jsx)(s.UnknownGameIcon, {
            size: 'md',
            color: 'currentColor',
            className: o()(f.gameIcon, y, E)
        });
    let b = null == r ? void 0 : r.name,
        I = null != b && '' !== b ? d.intl.formatToPlainString(d.t.tiKyYm, { applicationName: b }) : d.intl.string(d.t['2B/phI']);
    return (0, i.jsx)('img', {
        alt: I,
        src: n,
        className: o()(f.gameIcon, y, E)
    });
};
(g.Sizes = p), (n.Z = g);
