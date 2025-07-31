n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(829968),
    l = n(565138),
    c = n(474936),
    u = n(388032),
    d = n(235831);
let _ = {
    XXSMALL: d.xxsmall,
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large,
    XLARGE: d.xlarge
};
function f(e) {
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
            return n(632342);
        case c.Si.TIER_0:
            return n(467596);
        case c.Si.TIER_1:
            return n(670957);
        case c.Si.TIER_2:
        case c.Si.LEGACY:
            return n(480768);
        default:
            return null;
    }
}
function h(e) {
    switch (e) {
        case _.XSMALL:
            return l.Z.Sizes.SMALLER;
        case _.SMALL:
            return l.Z.Sizes.SMALL;
        case _.LARGE:
            return l.Z.Sizes.LARGE;
        default:
        case _.MEDIUM:
            return l.Z.Sizes.MEDIUM;
    }
}
let m = (e) => {
    let t,
        { game: n, guild: i, skuId: c, pid: m, className: g, guildClassName: E, size: b = _.MEDIUM, allowUnknownGameIcon: y = !0 } = e;
    if ((null != c && (t = p(c)), null != n && null == t && (t = n.getIconURL(f(b))), null == (t = (0, s.Z)(m, t)) && null != i)) {
        let e = h(b);
        return (0, r.jsx)(l.Z, {
            className: a()(d.gameIcon, E, g),
            guild: i,
            size: e
        });
    }
    if (null == t)
        return y
            ? (0, r.jsx)(o.IMN, {
                  size: 'md',
                  color: 'currentColor',
                  className: a()(d.gameIcon, b, g)
              })
            : null;
    let O = null == n ? void 0 : n.name,
        v = null != O && '' !== O ? u.intl.formatToPlainString(u.t.tiKyYm, { applicationName: O }) : u.intl.string(u.t['2B/phI']);
    return (0, r.jsx)('img', {
        alt: v,
        src: t,
        className: a()(d.gameIcon, b, g)
    });
};
m.Sizes = _;
let g = m;
