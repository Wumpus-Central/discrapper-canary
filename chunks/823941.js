(n.d(t, {
    Z: () => D,
    n: () => R
}),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(180650),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(906732),
    _ = n(70097),
    f = n(963249),
    p = n(594174),
    h = n(451478),
    m = n(754347),
    g = n(74538),
    E = n(884697),
    b = n(624377),
    y = n(141011),
    O = n(813083),
    v = n(372654),
    I = n(794324),
    T = n(474936),
    S = n(388032),
    A = n(544348);
let N = 90,
    C = 28,
    R = (0, E.IC)(N),
    P = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            a = i.useRef(null),
            o = (0, l.e7)([p.default], () => p.default.getCurrentUser());
        return g.ZP.canUseCollectibles(o)
            ? t.summary
            : S.intl.format(S.t['9hafRk'], {
                  getPremium: (e) =>
                      (0, r.jsx)(c.P3F, {
                          innerRef: a,
                          className: A.getPremiumHook,
                          onClick: () => {
                              (0, f.Z)({
                                  subscriptionTier: T.Si.TIER_2,
                                  analyticsLocations: n,
                                  returnRef: a
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
    w = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: A.animationAsset
              })
            : (0, r.jsx)(_.Z, {
                  src: t,
                  className: A.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function D(e) {
    let { category: t, className: n, hideLimitedTimeBadge: i = !1 } = e,
        { backgroundColors: a } = (0, b.Z)(t.styles),
        d = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        _ = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        { bannerOverrides: f, shopAllBannerStatic: p, shopAllBannerAnimated: g } = (0, I.t0)(t),
        T = !!(null == f ? void 0 : f.showDarkBannerText);
    return (0, r.jsxs)(y.Z, {
        asset: p,
        className: o()(A.shopBanner, n),
        style:
            null != a
                ? {
                      background: ''.concat((0, v.nH)(a), ' border-box border-box'),
                      outlineColor: a.border.toHslString()
                  }
                : void 0,
        children: [
            !d && null != g && _ && (0, r.jsx)(w, { src: g }),
            (null == f ? void 0 : f.addAttributionLogo)
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
                : (0, r.jsx)(c.LZC, { size: C }),
            (null == f ? void 0 : f.addLogo)
                ? (0, r.jsx)('img', {
                      className: A.categoryLogo,
                      src: (0, E.uV)(t.logo, { size: R }),
                      alt: t.name,
                      style: { maxWidth: null == f ? void 0 : f.logoMaxWidth }
                  })
                : (0, r.jsx)(c.LZC, { size: N }),
            '' !== t.summary &&
                (0, r.jsx)(c.Text, {
                    className: o()(A.summary, { [A.blackSummary]: T }),
                    style: null != t.bannerTextColor ? { color: t.bannerTextColor } : void 0,
                    variant: 'text-md/normal',
                    children: t.skuId === s.T.DISXCORE ? (0, r.jsx)(P, { category: t }) : t.summary
                }),
            !i &&
                (0, r.jsx)(O.Z, {
                    category: t,
                    className: A.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
