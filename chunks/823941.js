(r.d(n, {
    Z: () => L,
    n: () => P
}),
    r(35282));
var l = r(255367),
    t = r(73800),
    o = r(120356),
    a = r.n(o),
    u = r(180650),
    i = r(399606),
    s = r(481060),
    c = r(607070),
    d = r(906732),
    g = r(70097),
    b = r(963249),
    v = r(594174),
    m = r(451478),
    O = r(754347),
    f = r(74538),
    p = r(884697),
    y = r(624377),
    j = r(141011),
    h = r(813083),
    B = r(372654),
    _ = r(794324),
    S = r(474936),
    T = r(388032),
    k = r(544348);
let P = (0, p.IC)(90),
    A = (e) => {
        let { category: n } = e,
            { analyticsLocations: r } = (0, d.ZP)(),
            o = t.useRef(null),
            a = (0, i.e7)([v.default], () => v.default.getCurrentUser());
        return f.ZP.canUseCollectibles(a)
            ? n.summary
            : T.intl.format(T.t['9hafRk'], {
                  getPremium: (e) =>
                      (0, l.jsx)(s.P3F, {
                          innerRef: o,
                          className: k.getPremiumHook,
                          onClick: () => {
                              (0, b.Z)({
                                  subscriptionTier: S.Si.TIER_2,
                                  analyticsLocations: r,
                                  returnRef: o
                              });
                          },
                          tag: 'span',
                          children: (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              color: 'always-white',
                              tag: 'span',
                              children: e
                          })
                      })
              });
    },
    E = (e) => {
        let { src: n } = e;
        return /.*\.png/i.test(n)
            ? (0, l.jsx)('img', {
                  src: n,
                  alt: '',
                  className: k.animationAsset
              })
            : (0, l.jsx)(g.Z, {
                  src: n,
                  className: k.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function L(e) {
    let { category: n, className: r, hideLimitedTimeBadge: t = !1 } = e,
        { backgroundColors: o } = (0, y.Z)(n.styles),
        d = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        g = (0, i.e7)([m.Z], () => m.Z.isFocused()),
        { bannerOverrides: b, shopAllBannerStatic: v, shopAllBannerAnimated: f } = (0, _.t0)(n),
        S = !!(null == b ? void 0 : b.showDarkBannerText);
    return (0, l.jsxs)(j.Z, {
        asset: v,
        className: a()(k.shopBanner, r),
        style:
            null != o
                ? {
                      background: ''.concat((0, B.nH)(o), ' border-box border-box'),
                      outlineColor: o.border.toHslString()
                  }
                : void 0,
        children: [
            !d && null != f && g && (0, l.jsx)(E, { src: f }),
            (null == b ? void 0 : b.addAttributionLogo)
                ? (0, l.jsxs)('div', {
                      className: k.discordLogo,
                      children: [
                          (0, l.jsx)(s.gw7, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: k.discordIcon
                          }),
                          (0, l.jsx)(O.Z, { className: k.discordWordmark })
                      ]
                  })
                : (0, l.jsx)(s.LZC, { size: 28 }),
            (null == b ? void 0 : b.addLogo)
                ? (0, l.jsx)('img', {
                      className: k.categoryLogo,
                      src: (0, p.uV)(n.logo, { size: P }),
                      alt: n.name,
                      style: { maxWidth: null == b ? void 0 : b.logoMaxWidth }
                  })
                : (0, l.jsx)(s.LZC, { size: 90 }),
            '' !== n.summary &&
                (0, l.jsx)(s.Text, {
                    className: a()(k.summary, { [k.blackSummary]: S }),
                    style: null != n.bannerTextColor ? { color: n.bannerTextColor } : void 0,
                    variant: 'text-md/normal',
                    children: n.skuId === u.T.DISXCORE ? (0, l.jsx)(A, { category: n }) : n.summary
                }),
            !t &&
                (0, l.jsx)(h.Z, {
                    category: n,
                    className: k.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
