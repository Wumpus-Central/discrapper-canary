n.d(t, { Z: () => U }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(809206),
    o = n(634894),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    h = n(597688),
    m = n(1870),
    g = n(884697),
    x = n(175756),
    _ = n(104494),
    p = n(639119),
    E = n(211712),
    C = n(629654),
    N = n(53691),
    I = n(165583),
    f = n(267717),
    T = n(350327),
    S = n(996073),
    j = n(25990),
    v = n(626135),
    b = n(74538),
    A = n(296810),
    O = n(433411),
    R = n(532432),
    D = n(504983),
    P = n(134795),
    y = n(513901),
    Z = n(451392),
    L = n(490220),
    k = n(981631),
    B = n(474936),
    M = n(526761),
    V = n(388032),
    w = n(407849);
function U(e) {
    var t, n;
    let { user: U, isVisible: G, shouldShow: F } = e,
        z = b.ZP.isPremium(U),
        {
            pendingAvatar: Y,
            pendingThemeColors: H,
            tryItOutThemeColors: W,
            tryItOutAvatar: K,
            tryItOutBanner: X,
            tryItOutProfileEffectId: q,
            tryItOutAvatarDecoration: J
        } = (0, l.cj)([j.Z], () => {
            let e = j.Z.getAllPending(),
                t = j.Z.getErrors(),
                n = j.Z.getAllTryItOut();
            return {
                ...e,
                ...n,
                errors: t
            };
        }),
        Q = (0, x.Z)(q),
        $ = s.useRef(null);
    (0, S.Z)($, M.Y_.TRY_IT_OUT);
    let { analyticsLocations: ee, sourceAnalyticsLocations: et } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [en, ei] = s.useState(Math.floor(Math.random() * E.J2.length)),
        es = (e) => {
            if (e) {
                if (((0, a.I5)(K), (0, T.z5)(W), (0, T.ho)(X), null != J)) {
                    let e = h.Z.getProduct(J.skuId);
                    null != e && (0, g.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, a.cV)(J)) : null != m.Z.getPurchase(J.skuId) && (0, a.cV)(J);
                }
                v.default.track(k.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: E.J2[en].presetName });
            }
        };
    s.useEffect(() => {
        G &&
            v.default.track(k.rMx.PREMIUM_UPSELL_VIEWED, {
                type: B.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: k.ZY5.USER_SETTINGS },
                location_stack: et
            });
    }, [et, U, G]);
    let el = (null === (n = (0, p.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === B.Si.TIER_2,
        er = (0, _.Ng)(),
        ea = (0, _.Wp)(er, B.Si.TIER_2),
        eo = 'TryOutPremiumSection';
    return ((0, o.j)({
        location: eo + ' auto on',
        autoTrackExposure: !0
    }),
    (0, o.j)({
        location: eo + ' auto off',
        autoTrackExposure: !1
    }),
    F)
        ? (0, i.jsx)(d.Gt, {
              value: ee,
              children: (0, i.jsxs)(D.Z, {
                  ref: $,
                  className: w.tryItOutSection,
                  type: D.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(A.Z, {
                          layoutClassName: w.tryItOutLayout,
                          previewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: w.premiumIcon
                                  }),
                                  V.intl.string(V.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(C.Z, {
                                      selectedIndex: en,
                                      setSelectedIndex: ei
                                  }),
                                  (0, i.jsx)(L.Z, { user: U })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: w.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(r.X6q, {
                                              variant: 'heading-xl/extrabold',
                                              children: V.intl.string(V.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(r.Text, {
                                              className: w.description,
                                              variant: 'text-sm/normal',
                                              children: V.intl.string(V.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(Z.Z, {
                                      className: w.customizationSection,
                                      user: U,
                                      pendingAvatar: null != K ? K : Y,
                                      pendingColors: null != W ? W : H,
                                      onThemeColorsChange: T.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(P.Z, {
                                      className: w.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != X,
                                      onBannerChange: T.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(R.Z, {
                                      className: w.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: T.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: V.intl.string(V.t['7z0D1d']),
                                      sectionTitle: V.intl.string(V.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      O.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: w.customizationSection,
                                          user: U,
                                          sectionTitle: V.intl.string(V.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      y.Z,
                                      {
                                          className: w.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: Q,
                                          user: U,
                                          sectionTitle: V.intl.string(V.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !el &&
                                      (0, i.jsx)(r.Text, {
                                          variant: 'text-sm/normal',
                                          children: V.intl.string(V.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !el &&
                          (0, i.jsx)(N.p, {
                              onSubscribeModalClose: es,
                              className: w.floatingUpsell,
                              showUpsell: !0,
                              text: V.intl.format(V.t.TmfgIy, { onClick: () => (0, f.y)(es) }),
                              button: z ? V.intl.string(V.t.AfRWIy) : ea ? V.intl.formatToPlainString(V.t.bkQ4bG, { percent: null == er ? void 0 : er.discount.amount }) : V.intl.string(V.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      el &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: w.premiumTier2Divider }),
                                  (0, i.jsx)(I.ZP, {
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
