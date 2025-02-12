n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(829968),
    l = n(565138),
    u = n(474936),
    c = n(388032),
    d = n(421475);
let f = {
    XXSMALL: d.xxsmall,
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
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
        case u.Si.GUILD:
            return n(632342);
        case u.Si.TIER_0:
            return n(467596);
        case u.Si.TIER_1:
            return n(670957);
        case u.Si.TIER_2:
        case u.Si.LEGACY:
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
        { game: n, guild: r, skuId: u, pid: m, className: g, guildClassName: E, size: v = f.MEDIUM } = e;
    if ((null != u && (t = p(u)), null != n && null == t && (t = n.getIconURL(_(v))), null == (t = (0, o.Z)(m, t)) && null != r)) {
        let e = h(v);
        return (0, i.jsx)(l.Z, {
            className: a()(d.gameIcon, E, g),
            guild: r,
            size: e
        });
    }
    if (null == t)
        return (0, i.jsx)(s.IMN, {
            size: 'md',
            color: 'currentColor',
            className: a()(d.gameIcon, v, g)
        });
    let y = null == n ? void 0 : n.name,
        I = null != y && '' !== y ? c.intl.formatToPlainString(c.t.tiKyYm, { applicationName: y }) : c.intl.string(c.t['2B/phI']);
    return (0, i.jsx)('img', {
        alt: I,
        src: t,
        className: a()(d.gameIcon, v, g)
    });
};
m.Sizes = f;
let g = m;
