n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(809206),
    o = n(634894),
    c = n(100527),
    d = n(906732),
    u = n(335131),
    m = n(597688),
    g = n(1870),
    h = n(884697),
    p = n(175756),
    x = n(104494),
    f = n(639119),
    _ = n(211712),
    E = n(629654),
    C = n(53691),
    T = n(165583),
    S = n(267717),
    b = n(350327),
    I = n(996073),
    N = n(25990),
    v = n(626135),
    A = n(74538),
    j = n(296810),
    R = n(433411),
    O = n(532432),
    P = n(504983),
    y = n(134795),
    D = n(513901),
    B = n(451392),
    Z = n(490220),
    L = n(981631),
    M = n(474936),
    k = n(526761),
    w = n(388032),
    F = n(195657);
function U(e) {
    var t, n;
    let { user: U, isVisible: V, shouldShow: G } = e,
        H = A.ZP.isPremium(U),
        {
            pendingAvatar: Y,
            pendingThemeColors: W,
            tryItOutThemeColors: z,
            tryItOutAvatar: K,
            tryItOutBanner: q,
            tryItOutProfileEffectId: Q,
            tryItOutAvatarDecoration: X
        } = (0, r.cj)([N.Z], () => {
            let e = N.Z.getAllPending(),
                t = N.Z.getErrors(),
                n = N.Z.getAllTryItOut();
            return {
                ...e,
                ...n,
                errors: t
            };
        }),
        J = (0, p.Z)(Q),
        $ = s.useRef(null);
    (0, I.Z)($, k.Y_.TRY_IT_OUT);
    let { analyticsLocations: ee, sourceAnalyticsLocations: et } = (0, d.ZP)(c.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        [en, ei] = s.useState(Math.floor(Math.random() * _.J2.length)),
        es = (e) => {
            if (e) {
                if (((0, l.I5)(K), (0, b.z5)(z), (0, b.ho)(q), null != X)) {
                    let e = m.Z.getProduct(X.skuId);
                    null != e && (0, h.G1)(e) ? (0, u.fK)(e.skuId).then(() => (0, l.cV)(X)) : null != g.Z.getPurchase(X.skuId) && (0, l.cV)(X);
                }
                v.default.track(L.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: _.J2[en].presetName });
            }
        };
    s.useEffect(() => {
        if (!!V)
            v.default.track(L.rMx.PREMIUM_UPSELL_VIEWED, {
                type: M.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: L.ZY5.USER_SETTINGS },
                location_stack: et
            });
    }, [et, U, V]);
    let er = (null === (n = (0, f.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === M.Si.TIER_2,
        ea = (0, x.Ng)(),
        el = (0, x.Wp)(ea, M.Si.TIER_2),
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
        ? (0, i.jsx)(d.Gt, {
              value: ee,
              children: (0, i.jsxs)(P.Z, {
                  ref: $,
                  className: F.tryItOutSection,
                  type: P.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, i.jsx)(j.Z, {
                          layoutClassName: F.tryItOutLayout,
                          previewTitle: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.NitroWheelIcon, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: F.premiumIcon
                                  }),
                                  w.intl.string(w.t.gMlDNT)
                              ]
                          }),
                          profilePreview: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(E.Z, {
                                      selectedIndex: en,
                                      setSelectedIndex: ei
                                  }),
                                  (0, i.jsx)(Z.Z, { user: U })
                              ]
                          }),
                          children: (0, i.jsxs)('div', {
                              className: F.editor,
                              children: [
                                  (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: 'heading-xl/extrabold',
                                              children: w.intl.string(w.t['2zGdAQ'])
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              className: F.description,
                                              variant: 'text-sm/normal',
                                              children: w.intl.string(w.t.xeEC29)
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(B.Z, {
                                      className: F.customizationSection,
                                      user: U,
                                      pendingAvatar: null != K ? K : Y,
                                      pendingColors: null != z ? z : W,
                                      onThemeColorsChange: b.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0
                                  }),
                                  (0, i.jsx)(y.Z, {
                                      className: F.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != q,
                                      onBannerChange: b.f4,
                                      showPremiumIcon: !1
                                  }),
                                  (0, i.jsx)(O.Z, {
                                      className: F.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: b.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: w.intl.string(w.t['7z0D1d']),
                                      sectionTitle: w.intl.string(w.t.vtFfPT)
                                  }),
                                  (0, i.jsx)(
                                      R.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: F.customizationSection,
                                          user: U,
                                          sectionTitle: w.intl.string(w.t['7v0T9P'])
                                      },
                                      'decoration'
                                  ),
                                  (0, i.jsx)(
                                      D.Z,
                                      {
                                          className: F.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: J,
                                          user: U,
                                          sectionTitle: w.intl.string(w.t.wR5wOj)
                                      },
                                      'effect'
                                  ),
                                  !er &&
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-sm/normal',
                                          children: w.intl.string(w.t['smo74+'])
                                      })
                              ]
                          })
                      }),
                      !er &&
                          (0, i.jsx)(C.p, {
                              onSubscribeModalClose: es,
                              className: F.floatingUpsell,
                              showUpsell: !0,
                              text: w.intl.format(w.t.TmfgIy, { onClick: () => (0, S.openPremiumTryItOutProfileUpsell)(es) }),
                              button: H ? w.intl.string(w.t.AfRWIy) : el ? w.intl.formatToPlainString(w.t.bkQ4bG, { percent: null == ea ? void 0 : ea.discount.amount }) : w.intl.string(w.t.pj0XBA),
                              position: 'inline',
                              showShadow: !1
                          }),
                      er &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)('div', { className: F.premiumTier2Divider }),
                                  (0, i.jsx)(T.ZP, {
                                      type: M.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: M.Si.TIER_2
                                  })
                              ]
                          })
                  ]
              })
          })
        : null;
}
