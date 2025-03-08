n.d(t, {
    Z: () => L,
    n: () => P
}),
    n(301563);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(180650),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(906732),
    f = n(70097),
    _ = n(963249),
    p = n(594174),
    h = n(451478),
    m = n(754347),
    g = n(74538),
    E = n(884697),
    v = n(624377),
    b = n(141011),
    y = n(813083),
    O = n(372654),
    I = n(794324),
    S = n(215023),
    T = n(474936),
    N = n(388032),
    A = n(134442);
let C = 90,
    R = 28,
    P = (0, E.IC)(C),
    w = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            o = i.useRef(null),
            a = (0, l.e7)([p.default], () => p.default.getCurrentUser());
        return g.ZP.canUseCollectibles(a)
            ? t.summary
            : N.NW.format(N.t['9hafRk'], {
                  getPremium: (e) =>
                      (0, r.jsx)(c.P3F, {
                          innerRef: o,
                          className: A.getPremiumHook,
                          onClick: () => {
                              (0, _.Z)({
                                  subscriptionTier: T.Si.TIER_2,
                                  analyticsLocations: n,
                                  returnRef: o
                              });
                          },
                          tag: 'span',
                          children: (0, r.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              tag: 'span',
                              children: e
                          })
                      })
              });
    },
    D = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: A.animationAsset
              })
            : (0, r.jsx)(f.Z, {
                  src: t,
                  className: A.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function L(e) {
    var t, n, i;
    let { category: o, className: d, hideLimitedTimeBadge: f = !1 } = e,
        { backgroundColors: _ } = (0, v.Z)(o.styles),
        p = (0, S.ZS)(o.skuId),
        g = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        T = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        { categoryBannerStatic: N, categoryBannerAnimated: L } = (0, I.tK)(o),
        x = !!(null == p ? void 0 : p.showDarkBannerText);
    return (0, r.jsxs)(b.Z, {
        asset: N,
        className: a()(A.shopBanner, d),
        style:
            null != _
                ? {
                      background: ''.concat((0, O.nH)(_), ' border-box border-box'),
                      outlineColor: _.border.toHslString()
                  }
                : void 0,
        children: [
            !g && null != L && T && (0, r.jsx)(D, { src: L }),
            (null === (t = S.Ve[o.skuId]) || void 0 === t ? void 0 : t.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: A.discordLogo,
                      children: [
                          (0, r.jsx)(c.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: A.discordIcon
                          }),
                          (0, r.jsx)(m.Z, { className: A.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.LZC, { size: R }),
            (null === (n = S.Ve[o.skuId]) || void 0 === n ? void 0 : n.addLogo)
                ? (0, r.jsx)('img', {
                      className: A.categoryLogo,
                      src: (0, E.uV)(o.logo, { size: P }),
                      alt: o.name,
                      style: { maxWidth: null === (i = S.Ve[o.skuId]) || void 0 === i ? void 0 : i.logoMaxWidth }
                  })
                : (0, r.jsx)(c.LZC, { size: C }),
            (0, r.jsx)(c.Text, {
                className: a()(A.summary, { [A.blackSummary]: x }),
                variant: 'text-md/normal',
                children: o.skuId === s.T.DISXCORE ? (0, r.jsx)(w, { category: o }) : o.summary
            }),
            !f &&
                (0, r.jsx)(y.Z, {
                    category: o,
                    className: A.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
