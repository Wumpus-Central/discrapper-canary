n.d(t, {
    Z: () => D,
    n: () => R
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
    b = n(624377),
    y = n(141011),
    v = n(813083),
    O = n(372654),
    I = n(794324),
    S = n(474936),
    T = n(388032),
    N = n(544348);
let A = 90,
    C = 28,
    R = (0, E.IC)(A),
    P = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, d.ZP)(),
            o = i.useRef(null),
            a = (0, l.e7)([p.default], () => p.default.getCurrentUser());
        return g.ZP.canUseCollectibles(a)
            ? t.summary
            : T.NW.format(T.t['9hafRk'], {
                  getPremium: (e) =>
                      (0, r.jsx)(c.P3F, {
                          innerRef: o,
                          className: N.getPremiumHook,
                          onClick: () => {
                              (0, _.Z)({
                                  subscriptionTier: S.Si.TIER_2,
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
    w = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: N.animationAsset
              })
            : (0, r.jsx)(f.Z, {
                  src: t,
                  className: N.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function D(e) {
    let { category: t, className: n, hideLimitedTimeBadge: i = !1 } = e,
        { backgroundColors: o } = (0, b.Z)(t.styles),
        d = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        f = (0, l.e7)([h.Z], () => h.Z.isFocused()),
        { bannerOverrides: _, categoryBannerStatic: p, categoryBannerAnimated: g } = (0, I.tK)(t),
        S = !!(null == _ ? void 0 : _.showDarkBannerText);
    return (0, r.jsxs)(y.Z, {
        asset: p,
        className: a()(N.shopBanner, n),
        style:
            null != o
                ? {
                      background: ''.concat((0, O.nH)(o), ' border-box border-box'),
                      outlineColor: o.border.toHslString()
                  }
                : void 0,
        children: [
            !d && null != g && f && (0, r.jsx)(w, { src: g }),
            (null == _ ? void 0 : _.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: N.discordLogo,
                      children: [
                          (0, r.jsx)(c.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: N.discordIcon
                          }),
                          (0, r.jsx)(m.Z, { className: N.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.LZC, { size: C }),
            (null == _ ? void 0 : _.addLogo)
                ? (0, r.jsx)('img', {
                      className: N.categoryLogo,
                      src: (0, E.uV)(t.logo, { size: R }),
                      alt: t.name,
                      style: { maxWidth: null == _ ? void 0 : _.logoMaxWidth }
                  })
                : (0, r.jsx)(c.LZC, { size: A }),
            (0, r.jsx)(c.Text, {
                className: a()(N.summary, { [N.blackSummary]: S }),
                style: null != t.bannerTextColor ? { color: t.bannerTextColor } : void 0,
                variant: 'text-md/normal',
                children: t.skuId === s.T.DISXCORE ? (0, r.jsx)(P, { category: t }) : t.summary
            }),
            !i &&
                (0, r.jsx)(v.Z, {
                    category: t,
                    className: N.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
