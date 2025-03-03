r.d(t, {
    Z: () => I,
    n: () => E
}),
    r(301563);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(180650),
    s = r(399606),
    c = r(481060),
    u = r(607070),
    d = r(906732),
    p = r(70097),
    f = r(963249),
    b = r(594174),
    h = r(451478),
    m = r(754347),
    C = r(74538),
    g = r(884697),
    v = r(624377),
    x = r(141011),
    j = r(813083),
    _ = r(372654),
    y = r(794324),
    O = r(215023),
    k = r(474936),
    P = r(388032),
    S = r(134442);
let E = (0, g.IC)(90),
    w = (e) => {
        let { category: t } = e,
            { analyticsLocations: r } = (0, d.ZP)(),
            i = l.useRef(null),
            o = (0, s.e7)([b.default], () => b.default.getCurrentUser());
        return C.ZP.canUseCollectibles(o)
            ? t.summary
            : P.NW.format(P.t['9hafRk'], {
                  getPremium: (e) =>
                      (0, n.jsx)(c.P3F, {
                          innerRef: i,
                          className: S.getPremiumHook,
                          onClick: () => {
                              (0, f.Z)({
                                  subscriptionTier: k.Si.TIER_2,
                                  analyticsLocations: r,
                                  returnRef: i
                              });
                          },
                          tag: 'span',
                          children: (0, n.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              tag: 'span',
                              children: e
                          })
                      })
              });
    },
    L = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, n.jsx)('img', {
                  src: t,
                  alt: '',
                  className: S.animationAsset
              })
            : (0, n.jsx)(p.Z, {
                  src: t,
                  className: S.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function I(e) {
    var t, r, l;
    let { category: i, className: d, hideLimitedTimeBadge: p = !1 } = e,
        { backgroundColors: f } = (0, v.Z)(i.styles),
        b = (0, O.ZS)(i.skuId),
        C = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        k = (0, s.e7)([h.Z], () => h.Z.isFocused()),
        { categoryBannerStatic: P, categoryBannerAnimated: I } = (0, y.tK)(i),
        N = !!(null == b ? void 0 : b.showDarkBannerText);
    return (0, n.jsxs)(x.Z, {
        asset: P,
        className: o()(S.shopBanner, d),
        style:
            null != f
                ? {
                      background: ''.concat((0, _.nH)(f), ' border-box border-box'),
                      outlineColor: f.border.toHslString()
                  }
                : void 0,
        children: [
            !C && null != I && k && (0, n.jsx)(L, { src: I }),
            (null === (t = O.Ve[i.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo)
                ? (0, n.jsxs)('div', {
                      className: S.discordLogo,
                      children: [
                          (0, n.jsx)(c.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: S.discordIcon
                          }),
                          (0, n.jsx)(m.Z, { className: S.discordWordmark })
                      ]
                  })
                : (0, n.jsx)(c.LZC, { size: 28 }),
            (null === (r = O.Ve[i.skuId]) || void 0 === r ? void 0 : r.addLogo)
                ? (0, n.jsx)('img', {
                      className: S.categoryLogo,
                      src: (0, g.uV)(i.logo, { size: E }),
                      alt: i.name,
                      style: { maxWidth: null === (l = O.Ve[i.skuId]) || void 0 === l ? void 0 : l.logoMaxWidth }
                  })
                : (0, n.jsx)(c.LZC, { size: 90 }),
            (0, n.jsx)(c.Text, {
                className: o()(S.summary, { [S.blackSummary]: N }),
                variant: 'text-md/normal',
                children: i.skuId === a.T.DISXCORE ? (0, n.jsx)(w, { category: i }) : i.summary
            }),
            !p &&
                (0, n.jsx)(j.Z, {
                    category: i,
                    className: S.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
