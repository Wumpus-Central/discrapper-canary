r.d(t, {
    Z: () => k,
    n: () => P,
}),
    r(35282);
var n = r(951288),
    l = r(647438),
    a = r(120356),
    i = r.n(a),
    o = r(180650),
    s = r(399606),
    c = r(481060),
    u = r(607070),
    d = r(906732),
    p = r(70097),
    g = r(963249),
    f = r(594174),
    b = r(451478),
    m = r(754347),
    h = r(74538),
    _ = r(884697),
    v = r(624377),
    O = r(141011),
    C = r(813083),
    E = r(372654),
    y = r(794324),
    S = r(474936),
    x = r(388032),
    j = r(923732);
let P = (0, _.IC)(90),
    T = (e) => {
        let { category: t } = e,
            { analyticsLocations: r } = (0, d.ZP)(),
            a = l.useRef(null),
            i = (0, s.e7)([f.default], () => f.default.getCurrentUser());
        return h.ZP.canUseCollectibles(i)
            ? t.summary
            : x.intl.format(x.t["9hafRk"], {
                  getPremium: (e) =>
                      (0, n.jsx)(c.P3F, {
                          innerRef: a,
                          className: j.getPremiumHook,
                          onClick: () => {
                              (0, g.Z)({
                                  subscriptionTier: S.Si.TIER_2,
                                  analyticsLocations: r,
                                  returnRef: a,
                              });
                          },
                          tag: "span",
                          children: (0, n.jsx)(c.Text, {
                              variant: "text-md/normal",
                              color: "always-white",
                              tag: "span",
                              children: e,
                          }),
                      }),
              });
    },
    L = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, n.jsx)("img", {
                  src: t,
                  alt: "",
                  className: j.animationAsset,
              })
            : (0, n.jsx)(p.Z, {
                  src: t,
                  className: j.animationAsset,
                  autoPlay: !0,
                  loop: !0,
              });
    };
function k(e) {
    let { category: t, className: r, hideLimitedTimeBadge: l = !1 } = e,
        { backgroundColors: a } = (0, v.Z)(t.styles),
        d = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        p = (0, s.e7)([b.Z], () => b.Z.isFocused()),
        { bannerOverrides: g, shopAllBannerStatic: f, shopAllBannerAnimated: h } = (0, y.t0)(t),
        S = !!(null == g ? void 0 : g.showDarkBannerText);
    return (0, n.jsxs)(O.Z, {
        asset: f,
        className: i()(j.shopBanner, r),
        style:
            null != a
                ? {
                      background: "".concat((0, E.nH)(a), " border-box border-box"),
                      outlineColor: a.border.toHslString(),
                  }
                : void 0,
        children: [
            !d && null != h && p && (0, n.jsx)(L, { src: h }),
            (null == g ? void 0 : g.addAttributionLogo)
                ? (0, n.jsxs)("div", {
                      className: j.discordLogo,
                      children: [
                          (0, n.jsx)(c.gw7, {
                              size: "custom",
                              width: 28,
                              height: 28,
                              color: "currentColor",
                              className: j.discordIcon,
                          }),
                          (0, n.jsx)(m.Z, { className: j.discordWordmark }),
                      ],
                  })
                : (0, n.jsx)(c.LZC, { size: 28 }),
            (null == g ? void 0 : g.addLogo)
                ? (0, n.jsx)("img", {
                      className: j.categoryLogo,
                      src: (0, _.uV)(t.logo, { size: P }),
                      alt: t.name,
                      style: { maxWidth: null == g ? void 0 : g.logoMaxWidth },
                  })
                : (0, n.jsx)(c.LZC, { size: 90 }),
            "" !== t.summary &&
                (0, n.jsx)(c.Text, {
                    className: i()(j.summary, { [j.blackSummary]: S }),
                    style: null != t.bannerTextColor ? { color: t.bannerTextColor } : void 0,
                    variant: "text-md/normal",
                    children: t.skuId === o.T.DISXCORE ? (0, n.jsx)(T, { category: t }) : t.summary,
                }),
            !l &&
                (0, n.jsx)(C.Z, {
                    category: t,
                    className: j.limitedTimeBadge,
                    display: "banner",
                }),
        ],
    });
}
