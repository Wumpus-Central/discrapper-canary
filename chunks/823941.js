n.d(t, {
    Z: function () {
        return L;
    },
    n: function () {
        return B;
    }
});
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(399606),
    c = n(481060),
    d = n(607070),
    u = n(906732),
    m = n(70097),
    h = n(963249),
    g = n(594174),
    p = n(451478),
    f = n(754347),
    C = n(74538),
    b = n(884697),
    v = n(624377),
    x = n(141011),
    _ = n(813083),
    k = n(67938),
    I = n(372654),
    S = n(215023),
    E = n(474936),
    j = n(388032),
    T = n(539181);
let B = (0, b.IC)(96),
    N = (e) => {
        let { category: t } = e,
            { analyticsLocations: n } = (0, u.ZP)(),
            i = a.useRef(null),
            l = (0, o.e7)([g.default], () => g.default.getCurrentUser());
        return C.ZP.canUseCollectibles(l)
            ? (0, r.jsx)(r.Fragment, { children: t.summary })
            : (0, r.jsx)(r.Fragment, {
                  children: j.intl.format(j.t['9hafRk'], {
                      getPremium: (e) =>
                          (0, r.jsx)(c.Clickable, {
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
                  className: T.animationAsset
              })
            : (0, r.jsx)(m.Z, {
                  src: t,
                  className: T.animationAsset,
                  autoPlay: !0,
                  loop: !0
              });
    };
function L(e) {
    var t, n, a, i, u, m, h;
    let { category: g, className: C, hideLimitedTimeBadge: E = !1 } = e,
        { backgroundColors: j } = (0, v.Z)(g.styles),
        L = (0, S.ZS)(g.skuId),
        P = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, o.e7)([p.Z], () => p.Z.isFocused());
    if (g.skuId === s.T.CHANCE) return (0, r.jsx)(k.O, { category: g });
    let O = !!(null == L ? void 0 : L.showDarkBannerText),
        w = null !== (m = null == L ? void 0 : L.animatedBanner) && void 0 !== m ? m : null === (t = g.bannerAsset) || void 0 === t ? void 0 : t.animated;
    return (0, r.jsxs)(x.Z, {
        asset: null !== (h = null === (n = g.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== h ? h : g.banner,
        className: l()(T.shopBanner, C),
        style:
            null != j
                ? {
                      background: ''.concat((0, I.nH)(j), ' border-box border-box'),
                      outlineColor: j.border.toHslString()
                  }
                : void 0,
        children: [
            !P && void 0 !== w && Z && (0, r.jsx)(y, { src: w }),
            (null === (a = S.Ve[g.skuId]) || void 0 === a ? void 0 : a.addAttributionLogo)
                ? (0, r.jsxs)('div', {
                      className: T.discordLogo,
                      children: [
                          (0, r.jsx)(c.ClydeIcon, {
                              size: 'custom',
                              width: 28,
                              height: 28,
                              color: 'currentColor',
                              className: T.discordIcon
                          }),
                          (0, r.jsx)(f.Z, { className: T.discordWordmark })
                      ]
                  })
                : (0, r.jsx)(c.Spacer, { size: 28 }),
            (null === (i = S.Ve[g.skuId]) || void 0 === i ? void 0 : i.addLogo)
                ? (0, r.jsx)('img', {
                      className: T.categoryLogo,
                      src: (0, b.uV)(g.logo, { size: B }),
                      alt: g.name,
                      style: { maxWidth: null === (u = S.Ve[g.skuId]) || void 0 === u ? void 0 : u.logoMaxWidth }
                  })
                : (0, r.jsx)(c.Spacer, { size: 96 }),
            (0, r.jsx)(c.Text, {
                className: l()(T.summary, { [T.blackSummary]: O }),
                variant: 'text-md/normal',
                children: g.skuId === s.T.DISXCORE ? (0, r.jsx)(N, { category: g }) : g.summary
            }),
            !E &&
                (0, r.jsx)(_.Z, {
                    category: g,
                    className: T.limitedTimeBadge,
                    display: 'banner'
                })
        ]
    });
}
