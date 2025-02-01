n.d(t, {
    Z: () => B,
    n: () => I
});
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(180650),
    o = n(399606),
    d = n(481060),
    c = n(607070),
    u = n(906732),
    C = n(70097),
    h = n(963249),
    p = n(594174),
    m = n(451478),
    g = n(754347),
    f = n(74538),
    x = n(884697),
    _ = n(624377),
    v = n(141011),
    b = n(813083),
    k = n(67938),
    j = n(372654),
    L = n(215023),
    E = n(474936),
    S = n(388032),
    T = n(539181);
let I = (0, x.IC)(96),
    Z = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = l.useRef(null),
            s = (0, o.e7)([p.default], () => p.default.getCurrentUser());
        return f.ZP.canUseCollectibles(s)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: S.intl.format(S.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(d.P3F, {
                              innerRef: i,
                              className: T.getPremiumHook,
                              onClick: () => {
                                  (0, h.Z)({
                                      subscriptionTier: E.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: i
                                  });
                              },
                              tag: 'span',
                              children: (0, r.jsx)(d.Text, {
                                  variant: 'text-md/normal',
                                  color: 'always-white',
                                  tag: 'span',
                                  children: e
                              })
                          })
                  })
              });
    },
    y = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: T.animationAsset
              })
            : (0, r.jsx)(C.Z, {
                  src: t,
                  className: T.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function B(e) {
    var t, n, l, i, u, C, h;
    let { category: p, className: f, hideLimitedTimeBadge: E = !1 } = e,
        { backgroundColors: S } = (0, _.Z)(p.styles),
        B = (0, L.ZS)(p.skuId),
        F = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        N = (0, o.e7)([m.Z], () => m.Z.isFocused());
    if (p.skuId === a.T.CHANCE) return (0, r.jsx)(k.O, { category: p });
    let P = !!(null == B ? void 0 : B.showDarkBannerText),
        A = null !== (C = null == B ? void 0 : B.animatedBanner) && void 0 !== C ? C : null === (t = p.bannerAsset) || void 0 === t ? void 0 : t.animated;
    return (0, r.jsxs)(v.Z, {
        asset: null !== (h = null === (n = p.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== h ? h : p.banner,
        className: s()(T.shopBanner, f),
        style:
            null != S
                ? {
                      background: ''.concat((0, j.nH)(S), ' border-box border-box'),
                      outlineColor: S.border.toHslString()
                  }
                : void 0,
        children: [
            !F && void 0 !== A && N && (0, r.jsx)(y, { src: A }),
            (null === (l = L.Ve[p.skuId]) || void 0 === l ? void 0 : l.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: T.discordLogo,
                      children: [
                          (0, r.jsx)(d.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: T.discordIcon
                          }),
                          (0, r.jsx)(g.Z, { className: T.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(d.LZC, { size: 28 }),
            (null === (i = L.Ve[p.skuId]) || void 0 === i ? void 0 : i.addLogo)
                ? (0, r.jsx)('img', {
                      className: T.categoryLogo,
                      src: (0, x.uV)(p.logo, { size: I }),
                      alt: p.name,
                      style: { maxWidth: null === (u = L.Ve[p.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth }
                  })
                : (0, r.jsx)(d.LZC, { size: 96 }),
            (0, r.jsx)(d.Text, {
                className: s()(T.summary, { [T.blackSummary]: P }),
                variant: 'text-md/normal',
                children: p.skuId === a.T.DISXCORE ? (0, r.jsx)(Z, { category: p }) : p.summary
            }),
            !E &&
                (0, r.jsx)(b.Z, {
                    category: p,
                    className: T.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
