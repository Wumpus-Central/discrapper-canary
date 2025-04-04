n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(829968),
    l = n(565138),
    c = n(474936),
    u = n(388032),
    d = n(235831);
let f = {
    XXSMALL: d.xxsmall,
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large,
    XLARGE: d.xlarge
};
function _(e) {
    switch (e) {
        case f.XXSMALL:
            return 16;
        case f.XSMALL:
            return 24;
        case f.SMALL:
            return 30;
        case f.MEDIUM:
            return 40;
        case f.LARGE:
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
        case f.XSMALL:
            return l.Z.Sizes.SMALLER;
        case f.SMALL:
            return l.Z.Sizes.SMALL;
        case f.LARGE:
            return l.Z.Sizes.LARGE;
        default:
        case f.MEDIUM:
            return l.Z.Sizes.MEDIUM;
    }
}
let m = (e) => {
    let t,
        { game: n, guild: i, skuId: c, pid: m, className: g, guildClassName: E, size: b = f.MEDIUM, allowUnknownGameIcon: y = !0 } = e;
    if ((null != c && (t = p(c)), null != n && null == t && (t = n.getIconURL(_(b))), null == (t = (0, s.Z)(m, t)) && null != i)) {
        let e = h(b);
        return (0, r.jsx)(l.Z, {
            className: o()(d.gameIcon, E, g),
            guild: i,
            size: e
        });
    }
    if (null == t)
        return y
            ? (0, r.jsx)(a.IMN, {
                  size: 'md',
                  color: 'currentColor',
                  className: o()(d.gameIcon, b, g)
              })
            : null;
    let v = null == n ? void 0 : n.name,
        O = null != v && '' !== v ? u.NW.formatToPlainString(u.t.tiKyYm, { applicationName: v }) : u.NW.string(u.t['2B/phI']);
    return (0, r.jsx)('img', {
        alt: O,
        src: t,
        className: o()(d.gameIcon, b, g)
    });
};
m.Sizes = f;
let g = m;
