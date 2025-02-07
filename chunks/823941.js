n.d(t, {
    Z: () => Z,
    n: () => T
});
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(180650),
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
    b = n(141011),
    v = n(813083),
    k = n(67938),
    j = n(372654),
    E = n(215023),
    L = n(474936),
    S = n(388032),
    B = n(539181);
let T = (0, x.IC)(90),
    I = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = l.useRef(null),
            a = (0, o.e7)([p.default], () => p.default.getCurrentUser());
        return f.ZP.canUseCollectibles(a)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: S.intl.format(S.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(d.P3F, {
                              innerRef: i,
                              className: B.getPremiumHook,
                              onClick: () => {
                                  (0, h.Z)({
                                      subscriptionTier: L.Si.TIER_2,
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
                  className: B.animationAsset
              })
            : (0, r.jsx)(C.Z, {
                  src: t,
                  className: B.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function Z(e) {
    var t, n, l, i, u, C, h;
    let { category: p, className: f, hideLimitedTimeBadge: L = !1 } = e,
        { backgroundColors: S } = (0, _.Z)(p.styles),
        Z = (0, E.ZS)(p.skuId),
        F = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        N = (0, o.e7)([m.Z], () => m.Z.isFocused());
    if (p.skuId === s.T.CHANCE) return (0, r.jsx)(k.O, { category: p });
    let w = !!(null == Z ? void 0 : Z.showDarkBannerText),
        P = null !== (C = null == Z ? void 0 : Z.animatedBanner) && void 0 !== C ? C : null === (t = p.bannerAsset) || void 0 === t ? void 0 : t.animated;
    return (0, r.jsxs)(b.Z, {
        asset: null !== (h = null === (n = p.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== h ? h : p.banner,
        className: a()(B.shopBanner, f),
        style:
            null != S
                ? {
                      background: ''.concat((0, j.nH)(S), ' border-box border-box'),
                      outlineColor: S.border.toHslString()
                  }
                : void 0,
        children: [
            !F && void 0 !== P && N && (0, r.jsx)(y, { src: P }),
            (null === (l = E.Ve[p.skuId]) || void 0 === l ? void 0 : l.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: B.discordLogo,
                      children: [
                          (0, r.jsx)(d.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: B.discordIcon
                          }),
                          (0, r.jsx)(g.Z, { className: B.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(d.LZC, { size: 28 }),
            (null === (i = E.Ve[p.skuId]) || void 0 === i ? void 0 : i.addLogo)
                ? (0, r.jsx)('img', {
                      className: B.categoryLogo,
                      src: (0, x.uV)(p.logo, { size: T }),
                      alt: p.name,
                      style: { maxWidth: null === (u = E.Ve[p.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth }
                  })
                : (0, r.jsx)(d.LZC, { size: 90 }),
            (0, r.jsx)(d.Text, {
                className: a()(B.summary, { [B.blackSummary]: w }),
                variant: 'text-md/normal',
                children: p.skuId === s.T.DISXCORE ? (0, r.jsx)(I, { category: p }) : p.summary
            }),
            !L &&
                (0, r.jsx)(v.Z, {
                    category: p,
                    className: B.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
