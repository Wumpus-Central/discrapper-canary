n.d(t, {
    A: () => _,
    Z: () => g,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(829968),
    c = n(565138),
    u = n(474936),
    d = n(388032),
    f = n(575452);
let _ = {
    XXSMALL: f.xxsmall,
    XSMALL: f.xsmall,
    SMALL: f.small,
    MEDIUM: f.medium,
    MEDIUM_LARGE: f.mediumLarge,
    LARGE: f.large,
    XLARGE: f.xlarge,
};
function p(e) {
    switch (e) {
        case _.XXSMALL:
            return 16;
        case _.XSMALL:
            return 24;
        case _.SMALL:
            return 30;
        case _.MEDIUM:
            return 40;
        case _.MEDIUM_LARGE:
            return 48;
        case _.LARGE:
            return 60;
        default:
            return 80;
    }
}
function h(e) {
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
function m(e) {
    switch (e) {
        case _.XSMALL:
            return c.Z.Sizes.SMALLER;
        case _.SMALL:
            return c.Z.Sizes.SMALL;
        case _.LARGE:
            return c.Z.Sizes.LARGE;
        default:
        case _.MEDIUM:
            return c.Z.Sizes.MEDIUM;
    }
}
let g = i.forwardRef(function (e, t) {
    let n,
        {
            game: i,
            guild: a,
            skuId: u,
            pid: g,
            className: E,
            guildClassName: b,
            size: y = _.MEDIUM,
            allowUnknownGameIcon: O = !0,
        } = e;
    if (
        (null != u && (n = h(u)),
        null != i && null == n && (n = i.getIconURL(p(y))),
        void 0 === (n = (0, l.Z)(g, n)) && null != a)
    ) {
        let e = m(y);
        return (0, r.jsx)(c.Z, {
            className: o()(f.gameIcon, b, E),
            guild: a,
            size: e,
        });
    }
    if (void 0 === n || "" === n)
        return O
            ? (0, r.jsx)(s.IMN, {
                  size: "md",
                  color: "currentColor",
                  className: o()(f.gameIcon, y, E),
              })
            : null;
    let v = null == i ? void 0 : i.name,
        I =
            null != v && "" !== v
                ? d.intl.formatToPlainString(d.t.tiKyYg, { applicationName: v })
                : d.intl.string(d.t["2B/phM"]);
    return (0, r.jsx)("img", {
        ref: t,
        alt: I,
        src: n,
        className: o()(f.gameIcon, y, E),
    });
});
