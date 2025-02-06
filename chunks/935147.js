n.d(t, { Z: () => U }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(809206),
    o = n(634894),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(597688),
    h = n(1870),
    g = n(884697),
    _ = n(175756),
    x = n(104494),
    p = n(639119),
    E = n(211712),
    C = n(629654),
    f = n(53691),
    T = n(165583),
    N = n(267717),
    I = n(350327),
    S = n(996073),
    b = n(25990),
    v = n(626135),
    j = n(74538),
    A = n(296810),
    O = n(433411),
    R = n(532432),
    P = n(504983),
    D = n(134795),
    Z = n(513901),
    y = n(451392),
    k = n(490220),
    L = n(981631),
    B = n(474936),
    M = n(526761),
    w = n(388032),
    V = n(195657);
function U(e) {
    var t, n;
    let { user: U, isVisible: G, shouldShow: F } = e,
        H = j.ZP.isPremium(U),
        {
            pendingAvatar: z,
            pendingThemeColors: Y,
            tryItOutThemeColors: W,
            tryItOutAvatar: K,
            tryItOutBanner: X,
            tryItOutProfileEffectId: q,
            tryItOutAvatarDecoration: J
        } = (0, r.cj)([b.Z], () => {
            let e = b.Z.getAllPending(),
                t = b.Z.getErrors(),
                n = b.Z.getAllTryItOut();
            return {
                ...e,
                ...n,
                errors: t
            };
        }),
        Q = (0, _.Z)(q),
        $ = s.useRef(null);
    (0, S.Z)($, M.Y_.TRY_IT_OUT);
    let { analyticsLocations: ee, sourceAnalyticsLocations: et } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [en, ei] = s.useState(Math.floor(Math.random() * E.J2.length)),
        es = (e) => {
            if (e) {
                if (((0, a.I5)(K), (0, I.z5)(W), (0, I.ho)(X), null != J)) {
                    let e = m.Z.getProduct(J.skuId);
                    null != e && (0, g.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, a.cV)(J)) : null != h.Z.getPurchase(J.skuId) && (0, a.cV)(J);
                }
                v.default.track(L.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: E.J2[en].presetName });
            }
        };
    s.useEffect(() => {
        G &&
            v.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                type: B.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: L.ZY5.USER_SETTINGS },
                location_stack: et
            });
    }, [et, U, G]);
    let er = (null === (n = (0, p.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === B.Si.TIER_2,
        el = (0, x.Ng)(),
        ea = (0, x.Wp)(el, B.Si.TIER_2),
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
              children: (0, i.jsxs)(P.Z, {
                  ref: $,
                  className: V.tryItOutSection,
                  type: P.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(A.Z, {
                          layoutClassName: V.tryItOutLayout,
                          previewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(l.SrA, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: V.premiumIcon
                                  }),
                                  w.intl.string(w.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(C.Z, {
                                      selectedIndex: en,
                                      setSelectedIndex: ei
                                  }),
                                  (0, i.jsx)(k.Z, { user: U })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: V.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(l.X6q, {
                                              variant: 'heading-xl/extrabold',
                                              children: w.intl.string(w.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              className: V.description,
                                              variant: 'text-sm/normal',
                                              children: w.intl.string(w.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(y.Z, {
                                      className: V.customizationSection,
                                      user: U,
                                      pendingAvatar: null != K ? K : z,
                                      pendingColors: null != W ? W : Y,
                                      onThemeColorsChange: I.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(D.Z, {
                                      className: V.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != X,
                                      onBannerChange: I.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(R.Z, {
                                      className: V.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: I.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: w.intl.string(w.t['7z0D1d']),
                                      sectionTitle: w.intl.string(w.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      O.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: V.customizationSection,
                                          user: U,
                                          sectionTitle: w.intl.string(w.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      Z.Z,
                                      {
                                          className: V.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: Q,
                                          user: U,
                                          sectionTitle: w.intl.string(w.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !er &&
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-sm/normal',
                                          children: w.intl.string(w.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !er &&
                          (0, i.jsx)(f.p, {
                              onSubscribeModalClose: es,
                              className: V.floatingUpsell,
                              showUpsell: !0,
                              text: w.intl.format(w.t.TmfgIy, { onClick: () => (0, N.y)(es) }),
                              button: H ? w.intl.string(w.t.AfRWIy) : ea ? w.intl.formatToPlainString(w.t.bkQ4bG, { percent: null == el ? void 0 : el.discount.amount }) : w.intl.string(w.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      er &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: V.premiumTier2Divider }),
                                  (0, i.jsx)(T.ZP, {
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
