r.d(t, {
    Z: () => I,
    n: () => w
}),
    r(301563);
var n = r(200651),
    i = r(192379),
    l = r(120356),
    o = r.n(l),
    a = r(180650),
    s = r(399606),
    c = r(481060),
    d = r(607070),
    u = r(906732),
    p = r(70097),
    f = r(963249),
    h = r(594174),
    b = r(451478),
    C = r(754347),
    m = r(74538),
    g = r(884697),
    v = r(624377),
    x = r(141011),
    j = r(813083),
    _ = r(67938),
    y = r(372654),
    O = r(215023),
    k = r(474936),
    P = r(388032),
    S = r(697604);
let w = (0, g.IC)(90),
    E = (e) => {
        let { category: t } = e,
            { analyticsLocations: r } = (0, u.ZP)(),
            l = i.useRef(null),
            o = (0, s.e7)([h.default], () => h.default.getCurrentUser());
        return m.ZP.canUseCollectibles(o)
            ? t.summary
            : P.NW.format(P.t['9hafRk'], {
                  getPremium: (e) =>
                      (0, n.jsx)(c.P3F, {
                          innerRef: l,
                          className: S.getPremiumHook,
                          onClick: () => {
                              (0, f.Z)({
                                  subscriptionTier: k.Si.TIER_2,
                                  analyticsLocations: r,
                                  returnRef: l
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
    var t, r, i, l, u, p, f;
    let { category: h, className: m, hideLimitedTimeBadge: k = !1 } = e,
        { backgroundColors: P } = (0, v.Z)(h.styles),
        I = (0, O.ZS)(h.skuId),
        T = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        N = (0, s.e7)([b.Z], () => b.Z.isFocused());
    if (h.skuId === a.T.CHANCE) return (0, n.jsx)(_.O, { category: h });
    let B = !!(null == I ? void 0 : I.showDarkBannerText),
        Z = null !== (p = null == I ? void 0 : I.animatedBanner) && void 0 !== p ? p : null === (t = h.bannerAsset) || void 0 === t ? void 0 : t.animated;
    return (0, n.jsxs)(x.Z, {
        asset: null !== (f = null === (r = h.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== f ? f : h.banner,
        className: o()(S.shopBanner, m),
        style:
            null != P
                ? {
                      background: ''.concat((0, y.nH)(P), ' border-box border-box'),
                      outlineColor: P.border.toHslString()
                  }
                : void 0,
        children: [
            !T && void 0 !== Z && N && (0, n.jsx)(L, { src: Z }),
            (null === (i = O.Ve[h.skuId]) || void 0 === i ? void 0 : i.addAttributionLogo)
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
                          (0, n.jsx)(C.Z, { className: S.discordWordmark })
                      ]
                  })
                : (0, n.jsx)(c.LZC, { size: 28 }),
            (null === (l = O.Ve[h.skuId]) || void 0 === l ? void 0 : l.addLogo)
                ? (0, n.jsx)('img', {
                      className: S.categoryLogo,
                      src: (0, g.uV)(h.logo, { size: w }),
                      alt: h.name,
                      style: { maxWidth: null === (u = O.Ve[h.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth }
                  })
                : (0, n.jsx)(c.LZC, { size: 90 }),
            (0, n.jsx)(c.Text, {
                className: o()(S.summary, { [S.blackSummary]: B }),
                variant: 'text-md/normal',
                children: h.skuId === a.T.DISXCORE ? (0, n.jsx)(E, { category: h }) : h.summary
            }),
            !k &&
                (0, n.jsx)(j.Z, {
                    category: h,
                    className: S.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
