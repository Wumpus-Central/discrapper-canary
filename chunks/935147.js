n.d(t, { Z: () => G }), n(953529);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(809206),
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
    _ = n(402567),
    x = n(629654),
    E = n(53691),
    j = n(165583),
    C = n(267717),
    O = n(643879),
    S = n(350327),
    v = n(996073),
    T = n(25990),
    I = n(626135),
    N = n(74538),
    y = n(296810),
    A = n(433411),
    P = n(532432),
    R = n(504983),
    D = n(134795),
    Z = n(513901),
    w = n(451392),
    k = n(490220),
    L = n(981631),
    B = n(474936),
    M = n(526761),
    U = n(388032),
    V = n(23821);
function G(e) {
    var t, n;
    let { user: G, isVisible: F, shouldShow: H } = e,
        z = N.ZP.isPremium(G),
        {
            pendingAvatar: W,
            pendingThemeColors: Y,
            tryItOutThemeColors: K,
            tryItOutAvatar: q,
            tryItOutBanner: X,
            tryItOutProfileEffectId: Q,
            tryItOutAvatarDecoration: J
        } = (0, s.cj)([T.Z], () => {
            var e, t;
            let n = T.Z.getAllPending(),
                i = T.Z.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, n, T.Z.getAllTryItOut())),
                (t = t = { errors: i }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e
            );
        }),
        $ = (0, h.Z)(Q),
        { preset: ee, onShuffle: et } = (0, _.Z)(),
        en = r.useRef(null);
    (0, v.Z)(en, M.Y_.TRY_IT_OUT);
    let { analyticsLocations: ei, sourceAnalyticsLocations: er } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        es = (e) => {
            if (e) {
                if (((0, a.I5)(q), (0, S.z5)(K), (0, S.ho)(X), null != J)) {
                    let e = m.Z.getProduct(J.skuId);
                    null != e && (0, p.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, a.cV)(J)) : null != g.Z.getPurchase(J.skuId) && (0, a.cV)(J);
                }
                I.default.track(L.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: ee });
            }
        };
    r.useEffect(() => {
        F &&
            I.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                type: B.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: L.ZY5.USER_SETTINGS },
                location_stack: er
            });
    }, [er, G, F]);
    let el = (null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === B.Si.TIER_2,
        ea = (0, f.Ng)(),
        eo = (0, f.Wp)(ea, B.Si.TIER_2),
        ec = 'TryOutPremiumSection';
    return ((0, o.j)({
        location: ec + ' auto on',
        autoTrackExposure: !0
    }),
    (0, o.j)({
        location: ec + ' auto off',
        autoTrackExposure: !1
    }),
    H)
        ? (0, i.jsx)(d.Gt, {
              value: ei,
              children: (0, i.jsxs)(R.Z, {
                  ref: en,
                  className: V.tryItOutSection,
                  type: R.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(y.Z, {
                          layoutClassName: V.tryItOutLayout,
                          previewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: V.premiumIcon
                                  }),
                                  U.intl.string(U.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(x.Z, {
                                      preset: ee,
                                      onShuffle: et
                                  }),
                                  (0, i.jsx)(k.Z, { user: G })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: V.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(l.X6q, {
                                              variant: 'heading-xl/extrabold',
                                              children: U.intl.string(U.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              className: V.description,
                                              variant: 'text-sm/normal',
                                              children: U.intl.string(U.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(w.Z, {
                                      className: V.customizationSection,
                                      user: G,
                                      pendingAvatarSrc: (0, O.SD)({
                                          userId: G.id,
                                          image: null != q ? q : W
                                      }),
                                      pendingColors: null != K ? K : Y,
                                      onThemeColorsChange: S.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(D.Z, {
                                      className: V.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != X,
                                      onBannerChange: S.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(P.Z, {
                                      className: V.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: S.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: U.intl.string(U.t['7z0D1d']),
                                      sectionTitle: U.intl.string(U.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      A.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: V.customizationSection,
                                          user: G,
                                          sectionTitle: U.intl.string(U.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      Z.Z,
                                      {
                                          className: V.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: $,
                                          user: G,
                                          sectionTitle: U.intl.string(U.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !el &&
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-sm/normal',
                                          children: U.intl.string(U.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !el &&
                          (0, i.jsx)(E.p, {
                              onSubscribeModalClose: es,
                              className: V.floatingUpsell,
                              showUpsell: !0,
                              text: U.intl.format(U.t.TmfgIy, { onClick: () => (0, C.y)(es) }),
                              button: z ? U.intl.string(U.t.AfRWIy) : eo ? U.intl.formatToPlainString(U.t.bkQ4bG, { percent: null == ea ? void 0 : ea.discount.amount }) : U.intl.string(U.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      el &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: V.premiumTier2Divider }),
                                  (0, i.jsx)(j.ZP, {
                                      type: B.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: B.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
