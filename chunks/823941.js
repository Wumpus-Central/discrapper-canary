n.d(t, {
    Z: () => I,
    n: () => L,
}),
    n(35282);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(180650),
    o = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(906732),
    g = n(70097),
    p = n(963249),
    f = n(594174),
    m = n(451478),
    _ = n(754347),
    h = n(74538),
    b = n(884697),
    C = n(624377),
    E = n(141011),
    S = n(813083),
    O = n(372654),
    v = n(794324),
    x = n(474936),
    y = n(388032),
    T = n(923732);
let L = (0, b.IC)(90),
    j = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            a = l.useRef(null),
            s = (0, o.e7)([f.default], () => f.default.getCurrentUser());
        return h.ZP.canUseCollectibles(s)
            ? t.summary
            : y.intl.format(y.t["9hafRk"], {
                  getPremium: (e) =>
                      (0, r.jsx)(c.P3F, {
                          innerRef: a,
                          className: T.getPremiumHook,
                          onClick: () => {
                              (0, p.Z)({
                                  subscriptionTier: x.Si.TIER_2,
                                  analyticsLocations: n,
                                  returnRef: a,
                              });
                          },
                          tag: "span",
                          children: (0, r.jsx)(c.Text, {
                              variant: "text-md/normal",
                              color: "always-white",
                              tag: "span",
                              children: e,
                          }),
                      }),
              });
    },
    k = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)("img", {
                  src: t,
                  alt: "",
                  className: T.animationAsset,
              })
            : (0, r.jsx)(g.Z, {
                  src: t,
                  className: T.animationAsset,
                  autoPlay: !0,
                  loop: !0,
              });
    };
function I(e) {
    let { category: t, className: n, hideLimitedTimeBadge: l = !1 } = e,
        { backgroundColors: a } = (0, C.Z)(t.styles),
        d = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        g = (0, o.e7)([m.Z], () => m.Z.isFocused()),
        { bannerOverrides: p, shopAllBannerStatic: f, shopAllBannerAnimated: h } = (0, v.t0)(t),
        x = !!(null == p ? void 0 : p.showDarkBannerText);
    return (0, r.jsxs)(E.Z, {
        asset: f,
        className: s()(T.shopBanner, n),
        style:
            null != a
                ? {
                      background: "".concat((0, O.nH)(a), " border-box border-box"),
                      outlineColor: a.border.toHslString(),
                  }
                : void 0,
        children: [
            !d && null != h && g && (0, r.jsx)(k, { src: h }),
            (null == p ? void 0 : p.addAttributionLogo)
                ? (0, r.jsxs)("div", {
                      className: T.discordLogo,
                      children: [
                          (0, r.jsx)(c.gw7, {
                              size: "custom",
                              width: 28,
                              height: 28,
                              color: "currentColor",
                              className: T.discordIcon,
                          }),
                          (0, r.jsx)(_.Z, { className: T.discordWordmark }),
                      ],
                  })
                : (0, r.jsx)(c.LZC, { size: 28 }),
            (null == p ? void 0 : p.addLogo)
                ? (0, r.jsx)("img", {
                      className: T.categoryLogo,
                      src: (0, b.uV)(t.logo, { size: L }),
                      alt: t.name,
                      style: { maxWidth: null == p ? void 0 : p.logoMaxWidth },
                  })
                : (0, r.jsx)(c.LZC, { size: 90 }),
            "" !== t.summary &&
                (0, r.jsx)(c.Text, {
                    className: s()(T.summary, { [T.blackSummary]: x }),
                    style: null != t.bannerTextColor ? { color: t.bannerTextColor } : void 0,
                    variant: "text-md/normal",
                    children: t.skuId === i.T.DISXCORE ? (0, r.jsx)(j, { category: t }) : t.summary,
                }),
            !l &&
                (0, r.jsx)(S.Z, {
                    category: t,
                    className: T.limitedTimeBadge,
                    display: S.k.BANNER,
                }),
        ],
    });
}
