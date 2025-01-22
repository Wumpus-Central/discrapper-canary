n.d(t, {
    Z: function () {
        return Z;
    },
    n: function () {
        return B;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(180650),
    o = n(399606),
    c = n(481060),
    d = n(607070),
    u = n(906732),
    C = n(70097),
    h = n(963249),
    p = n(594174),
    f = n(451478),
    m = n(754347),
    g = n(74538),
    b = n(884697),
    x = n(624377),
    v = n(141011),
    _ = n(813083),
    k = n(67938),
    j = n(372654),
    E = n(215023),
    L = n(474936),
    I = n(388032),
    S = n(539181);
let B = (0, b.IC)(96),
    T = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            l = i.useRef(null),
            s = (0, o.e7)([p.default], () => p.default.getCurrentUser());
        return g.ZP.canUseCollectibles(s)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: I.intl.format(I.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
                              innerRef: l,
                              className: S.getPremiumHook,
                              onClick: () => {
                                  (0, h.Z)({
                                      subscriptionTier: L.Si.TIER_2,
                                      analyticsLocations: n,
                                      returnRef: l
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
                  })
              });
    },
    y = (e) => {
        let { src: t } = e;
        return /.*\.png/i.test(t)
            ? (0, r.jsx)('img', {
                  src: t,
                  alt: '',
                  className: S.animationAsset
              })
            : (0, r.jsx)(C.Z, {
                  src: t,
                  className: S.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function Z(e) {
    var t, n, i, l, u, C, h;
    let { category: p, className: g, hideLimitedTimeBadge: L = !1 } = e,
        { backgroundColors: I } = (0, x.Z)(p.styles),
        Z = (0, E.ZS)(p.skuId),
        N = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        F = (0, o.e7)([f.Z], () => f.Z.isFocused());
    if (p.skuId === a.T.CHANCE) return (0, r.jsx)(k.O, { category: p });
    let P = !!(null == Z ? void 0 : Z.showDarkBannerText),
        w = null !== (C = null == Z ? void 0 : Z.animatedBanner) && void 0 !== C ? C : null === (t = p.bannerAsset) || void 0 === t ? void 0 : t.animated;
    return (0, r.jsxs)(v.Z, {
        asset: null !== (h = null === (n = p.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== h ? h : p.banner,
        className: s()(S.shopBanner, g),
        style:
            null != I
                ? {
                      background: ''.concat((0, j.nH)(I), ' border-box border-box'),
                      outlineColor: I.border.toHslString()
                  }
                : void 0,
        children: [
            !N && void 0 !== w && F && (0, r.jsx)(y, { src: w }),
            (null === (i = E.Ve[p.skuId]) || void 0 === i ? void 0 : i.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: S.discordLogo,
                      children: [
                          (0, r.jsx)(c.ClydeIcon, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: S.discordIcon
                          }),
                          (0, r.jsx)(m.Z, { className: S.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.Spacer, { size: 28 }),
            (null === (l = E.Ve[p.skuId]) || void 0 === l ? void 0 : l.addLogo)
                ? (0, r.jsx)('img', {
                      className: S.categoryLogo,
                      src: (0, b.uV)(p.logo, { size: B }),
                      alt: p.name,
                      style: { maxWidth: null === (u = E.Ve[p.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth }
                  })
                : (0, r.jsx)(c.Spacer, { size: 96 }),
            (0, r.jsx)(c.Text, {
                className: s()(S.summary, { [S.blackSummary]: P }),
                variant: 'text-md/normal',
                children: p.skuId === a.T.DISXCORE ? (0, r.jsx)(T, { category: p }) : p.summary
            }),
            !L &&
                (0, r.jsx)(_.Z, {
                    category: p,
                    className: S.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
