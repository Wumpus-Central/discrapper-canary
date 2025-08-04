(n.d(t, { Z: () => V }), n(953529));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(809206),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(597688),
    m = n(1870),
    p = n(884697),
    g = n(175756),
    h = n(104494),
    f = n(639119),
    b = n(402567),
    x = n(629654),
    _ = n(53691),
    j = n(165583),
    E = n(267717),
    C = n(643879),
    O = n(350327),
    v = n(996073),
    S = n(25990),
    T = n(626135),
    I = n(74538),
    N = n(296810),
    y = n(433411),
    A = n(532432),
    P = n(504983),
    R = n(134795),
    D = n(513901),
    Z = n(451392),
    w = n(490220),
    k = n(981631),
    L = n(474936),
    B = n(526761),
    M = n(388032),
    U = n(23821);
function V(e) {
    var t, n;
    let { user: V, isVisible: G, shouldShow: F } = e,
        H = I.ZP.isPremium(V),
        {
            pendingAvatar: W,
            pendingThemeColors: z,
            tryItOutThemeColors: Y,
            tryItOutAvatar: K,
            tryItOutBanner: q,
            tryItOutProfileEffectId: X,
            tryItOutAvatarDecoration: J
        } = (0, s.cj)([S.Z], () => {
            var e, t;
            let n = S.Z.getAllPending(),
                i = S.Z.getErrors();
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                ((i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i));
                            }));
                    }
                    return e;
                })({}, n, S.Z.getAllTryItOut())),
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
        Q = (0, g.Z)(X),
        { preset: $, onShuffle: ee } = (0, b.Z)(),
        et = r.useRef(null);
    (0, v.Z)(et, B.Y_.TRY_IT_OUT);
    let { analyticsLocations: en, newestAnalyticsLocation: ei, sourceAnalyticsLocations: er } = (0, c.ZP)(o.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        es = (e) => {
            if (e) {
                if (((0, l.I5)(K), (0, O.z5)(Y), (0, O.ho)(q), null != J)) {
                    let e = u.Z.getProduct(J.skuId);
                    null != e && (0, p.G1)(e) ? (0, d.fK)(e.skuId).then(() => (0, l.cV)(J)) : null != m.Z.getPurchase(J.skuId) && (0, l.cV)(J);
                }
                T.default.track(k.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: $ });
            }
        };
    r.useEffect(() => {
        G &&
            T.default.track(k.rMx.PREMIUM_UPSELL_VIEWED, {
                type: L.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: k.ZY5.USER_SETTINGS },
                location_stack: er
            });
    }, [er, V, G]);
    let ea = (null == (n = (0, f.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === L.Si.TIER_2,
        el = (0, h.Ng)(),
        eo = (0, h.Wp)(el, L.Si.TIER_2);
    return F
        ? (0, i.jsx)(c.Gt, {
              value: en,
              children: (0, i.jsxs)(P.Z, {
                  ref: et,
                  className: U.tryItOutSection,
                  type: P.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(N.Z, {
                          layoutClassName: U.tryItOutLayout,
                          profilePreviewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: U.premiumIcon
                                  }),
                                  M.intl.string(M.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(x.Z, {
                                      preset: $,
                                      onShuffle: ee
                                  }),
                                  (0, i.jsx)(w.Z, { user: V })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: U.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(a.X6q, {
                                              variant: 'heading-xl/extrabold',
                                              children: M.intl.string(M.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              className: U.description,
                                              variant: 'text-sm/normal',
                                              children: M.intl.string(M.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(Z.Z, {
                                      className: U.customizationSection,
                                      user: V,
                                      pendingAvatarSrc: (0, C.SD)({
                                          userId: V.id,
                                          image: null != K ? K : W
                                      }),
                                      pendingColors: null != Y ? Y : z,
                                      onThemeColorsChange: O.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(R.Z, {
                                      className: U.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != q,
                                      onBannerChange: O.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(A.Z, {
                                      className: U.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: O.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: M.intl.string(M.t['7z0D1d']),
                                      sectionTitle: M.intl.string(M.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      y.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: U.customizationSection,
                                          user: V,
                                          sectionTitle: M.intl.string(M.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      D.Z,
                                      {
                                          className: U.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: Q,
                                          user: V,
                                          sectionTitle: M.intl.string(M.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !ea &&
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-sm/normal',
                                          children: M.intl.string(M.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !ea &&
                          (0, i.jsx)(_.p, {
                              onSubscribeModalClose: es,
                              className: U.floatingUpsell,
                              showUpsell: !0,
                              text: M.intl.format(M.t.TmfgIy, {
                                  onClick: () => {
                                      (0, E.y)({
                                          analyticsSource: ei,
                                          onSubscribeFinish: es
                                      });
                                  }
                              }),
                              button: H ? M.intl.string(M.t.AfRWIy) : eo ? M.intl.formatToPlainString(M.t.bkQ4bG, { percent: null == el ? void 0 : el.discount.amount }) : M.intl.string(M.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      ea &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: U.premiumTier2Divider }),
                                  (0, i.jsx)(j.ZP, {
                                      type: L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: L.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
