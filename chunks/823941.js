n.d(t, {
    Z: () => Z,
    n: () => I
});
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(180650),
    o = n(399606),
    d = n(481060),
    c = n(607070),
    u = n(906732),
    C = n(70097),
    h = n(963249),
    m = n(594174),
    p = n(451478),
    g = n(754347),
    f = n(74538),
    x = n(884697),
    b = n(624377),
    v = n(141011),
    _ = n(813083),
    j = n(67938),
    k = n(372654),
    E = n(215023),
    L = n(474936),
    S = n(388032),
    T = n(536258);
let I = (0, x.IC)(90),
    B = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = r.useRef(null),
            a = (0, o.e7)([m.default], () => m.default.getCurrentUser());
        return f.ZP.canUseCollectibles(a)
            ? (0, l.jsx)(l.Fragment, { children: t.summary })
            : (0, l.jsx)(l.Fragment, {
                  children: S.intl.format(S.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, l.jsx)(d.P3F, {
                              innerRef: i,
                              className: T.getPremiumHook,
                              onClick: () => {
                                  (0, h.Z)({
                                      subscriptionTier: L.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: i
                                  });
                              },
                              tag: 'span',
                              children: (0, l.jsx)(d.Text, {
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
            ? (0, l.jsx)('img', {
                  src: t,
                  alt: '',
                  className: T.animationAsset
              })
            : (0, l.jsx)(C.Z, {
                  src: t,
                  className: T.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function Z(e) {
    var t, n, r, i, u, C, h;
    let { category: m, className: f, hideLimitedTimeBadge: L = !1 } = e,
        { backgroundColors: S } = (0, b.Z)(m.styles),
        Z = (0, E.ZS)(m.skuId),
        N = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        w = (0, o.e7)([p.Z], () => p.Z.isFocused());
    if (m.skuId === s.T.CHANCE) return (0, l.jsx)(j.O, { category: m });
    let P = !!(null == Z ? void 0 : Z.showDarkBannerText),
        F = null !== (C = null == Z ? void 0 : Z.animatedBanner) && void 0 !== C ? C : null === (t = m.bannerAsset) || void 0 === t ? void 0 : t.animated;
    return (0, l.jsxs)(v.Z, {
        asset: null !== (h = null === (n = m.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== h ? h : m.banner,
        className: a()(T.shopBanner, f),
        style:
            null != S
                ? {
                      background: ''.concat((0, k.nH)(S), ' border-box border-box'),
                      outlineColor: S.border.toHslString()
                  }
                : void 0,
        children: [
            !N && void 0 !== F && w && (0, l.jsx)(y, { src: F }),
            (null === (r = E.Ve[m.skuId]) || void 0 === r ? void 0 : r.addAttributionLogo)
                ? (0, l.jsxs)('div', {
                      className: T.discordLogo,
                      children: [
                          (0, l.jsx)(d.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: T.discordIcon
                          }),
                          (0, l.jsx)(g.Z, { className: T.discordWordmark })
                      ]
                  })
                : (0, l.jsx)(d.LZC, { size: 28 }),
            (null === (i = E.Ve[m.skuId]) || void 0 === i ? void 0 : i.addLogo)
                ? (0, l.jsx)('img', {
                      className: T.categoryLogo,
                      src: (0, x.uV)(m.logo, { size: I }),
                      alt: m.name,
                      style: { maxWidth: null === (u = E.Ve[m.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth }
                  })
                : (0, l.jsx)(d.LZC, { size: 90 }),
            (0, l.jsx)(d.Text, {
                className: a()(T.summary, { [T.blackSummary]: P }),
                variant: 'text-md/normal',
                children: m.skuId === s.T.DISXCORE ? (0, l.jsx)(B, { category: m }) : m.summary
            }),
            !L &&
                (0, l.jsx)(_.Z, {
                    category: m,
                    className: T.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
