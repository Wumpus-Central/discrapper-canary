n.d(t, { Z: () => U }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(809206),
    o = n(634894),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(597688),
    g = n(1870),
    p = n(884697),
    h = n(175756),
    f = n(104494),
    b = n(639119),
    N = n(211712),
    x = n(629654),
    _ = n(53691),
    E = n(165583),
    j = n(267717),
    C = n(350327),
    O = n(996073),
    v = n(25990),
    S = n(626135),
    T = n(74538),
    I = n(296810),
    y = n(433411),
    A = n(532432),
    P = n(504983),
    R = n(134795),
    D = n(513901),
    Z = n(451392),
    w = n(490220),
    k = n(981631),
    W = n(474936),
    L = n(526761),
    B = n(388032),
    M = n(140799);
function U(e) {
    var t, n;
    let { user: U, isVisible: V, shouldShow: G } = e,
        F = T.ZP.isPremium(U),
        {
            pendingAvatar: H,
            pendingThemeColors: z,
            tryItOutThemeColors: Y,
            tryItOutAvatar: K,
            tryItOutBanner: q,
            tryItOutProfileEffectId: X,
            tryItOutAvatarDecoration: J
        } = (0, s.cj)([v.Z], () => {
            var e, t;
            let n = v.Z.getAllPending(),
                r = v.Z.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n, v.Z.getAllTryItOut())),
                (t = t = { errors: r }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e
            );
        }),
        Q = (0, h.Z)(X),
        $ = i.useRef(null);
    (0, O.Z)($, L.Y_.TRY_IT_OUT);
    let { analyticsLocations: ee, sourceAnalyticsLocations: et } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [en, er] = i.useState(Math.floor(Math.random() * N.J2.length)),
        ei = (e) => {
            if (e) {
                if (((0, l.I5)(K), (0, C.z5)(Y), (0, C.ho)(q), null != J)) {
                    let e = m.Z.getProduct(J.skuId);
                    null != e && (0, p.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, l.cV)(J)) : null != g.Z.getPurchase(J.skuId) && (0, l.cV)(J);
                }
                S.default.track(k.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: N.J2[en].presetName });
            }
        };
    i.useEffect(() => {
        V &&
            S.default.track(k.rMx.PREMIUM_UPSELL_VIEWED, {
                type: W.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: k.ZY5.USER_SETTINGS },
                location_stack: et
            });
    }, [et, U, V]);
    let es = (null === (n = (0, b.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === W.Si.TIER_2,
        ea = (0, f.Ng)(),
        el = (0, f.Wp)(ea, W.Si.TIER_2),
        eo = 'TryOutPremiumSection';
    return ((0, o.j)({
        location: eo + ' auto on',
        autoTrackExposure: !0
    }),
    (0, o.j)({
        location: eo + ' auto off',
        autoTrackExposure: !1
    }),
    G)
        ? (0, r.jsx)(d.Gt, {
              value: ee,
              children: (0, r.jsxs)(P.Z, {
                  ref: $,
                  className: M.tryItOutSection,
                  type: P.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(I.Z, {
                          layoutClassName: M.tryItOutLayout,
                          previewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: M.premiumIcon
                                  }),
                                  B.NW.string(B.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(x.Z, {
                                      selectedIndex: en,
                                      setSelectedIndex: er
                                  }),
                                  (0, r.jsx)(w.Z, { user: U })
                              ]
                          }),
                          children: (0, r.jsxs)('div', {
                              className: M.editor,
                              children: [
                                  (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(a.X6q, {
                                              variant: 'heading-xl/extrabold',
                                              children: B.NW.string(B.t['2zGdAQ'])
                                          }),
                                          (0, r.jsx)(a.Text, {
                                              className: M.description,
                                              variant: 'text-sm/normal',
                                              children: B.NW.string(B.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(Z.Z, {
                                      className: M.customizationSection,
                                      user: U,
                                      pendingAvatar: null != K ? K : H,
                                      pendingColors: null != Y ? Y : z,
                                      onThemeColorsChange: C.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, r.jsx)(R.Z, {
                                      className: M.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != q,
                                      onBannerChange: C.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, r.jsx)(A.Z, {
                                      className: M.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: C.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: B.NW.string(B.t['7z0D1d']),
                                      sectionTitle: B.NW.string(B.t.vtFfPT)
                                  }),
                                  (0, r.jsx)(
                                      y.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: M.customizationSection,
                                          user: U,
                                          sectionTitle: B.NW.string(B.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, r.jsx)(
                                      D.Z,
                                      {
                                          className: M.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: Q,
                                          user: U,
                                          sectionTitle: B.NW.string(B.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !es &&
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-sm/normal',
                                          children: B.NW.string(B.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !es &&
                          (0, r.jsx)(_.p, {
                              onSubscribeModalClose: ei,
                              className: M.floatingUpsell,
                              showUpsell: !0,
                              text: B.NW.format(B.t.TmfgIy, { onClick: () => (0, j.y)(ei) }),
                              button: F ? B.NW.string(B.t.AfRWIy) : el ? B.NW.formatToPlainString(B.t.bkQ4bG, { percent: null == ea ? void 0 : ea.discount.amount }) : B.NW.string(B.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      es &&
                          (0, r.jsxs)('div', {
                              children: [
                                  (0, r.jsx)('div', { className: M.premiumTier2Divider }),
                                  (0, r.jsx)(E.ZP, {
                                      type: W.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: W.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
