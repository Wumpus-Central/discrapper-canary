n.d(t, { Z: () => W }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(809206),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(597688),
    f = n(1870),
    _ = n(884697),
    p = n(443753),
    h = n(104494),
    m = n(639119),
    g = n(402567),
    E = n(629654),
    b = n(53691),
    y = n(165583),
    O = n(267717),
    v = n(643879),
    I = n(350327),
    T = n(996073),
    S = n(25990),
    A = n(626135),
    C = n(74538),
    N = n(296810),
    R = n(433411),
    P = n(532432),
    w = n(235433),
    D = n(504983),
    x = n(134795),
    L = n(513901),
    M = n(451392),
    j = n(490220),
    k = n(981631),
    U = n(474936),
    G = n(526761),
    B = n(388032),
    Z = n(553330);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    var t, n;
    let { user: F, isVisible: H, shouldShow: W } = e,
        K = C.ZP.isPremium(F),
        {
            pendingAvatar: z,
            pendingThemeColors: q,
            tryItOutThemeColors: X,
            tryItOutAvatar: Q,
            tryItOutBanner: J,
            tryItOutProfileEffect: $,
            tryItOutAvatarDecoration: ee,
        } = (0, a.cj)([S.Z], () => {
            let e = S.Z.getAllPending(),
                t = S.Z.getErrors();
            return Y(V({}, e, S.Z.getAllTryItOut()), { errors: t });
        }),
        et = (0, p.Z)($),
        { preset: en, onShuffle: er } = (0, g.Z)(),
        ei = i.useRef(null);
    (0, T.Z)(ei, G.Y_.TRY_IT_OUT);
    let {
            analyticsLocations: ea,
            newestAnalyticsLocation: eo,
            sourceAnalyticsLocations: es,
        } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        el = (e) => {
            if (e) {
                if (((0, s.I5)(Q), (0, I.z5)(X), (0, I.ho)(J), null != ee)) {
                    let e = d.Z.getProduct(ee.skuId);
                    null != e && (0, _.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, s.cV)(ee))
                        : null != f.Z.getPurchase(ee.skuId) && (0, s.cV)(ee);
                }
                A.default.track(k.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: en });
            }
        };
    i.useEffect(() => {
        H &&
            A.default.track(k.rMx.PREMIUM_UPSELL_VIEWED, {
                type: U.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: k.ZY5.USER_SETTINGS },
                location_stack: es,
            });
    }, [es, F, H]);
    let ec = (null == (n = (0, m.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === U.Si.TIER_2,
        eu = (0, h.Ng)(),
        ed = (0, h.Wp)(eu, U.Si.TIER_2),
        ef = () =>
            K
                ? B.intl.string(B.t.AfRWI8)
                : ed
                  ? B.intl.formatToPlainString(B.t.bkQ4bH, { percent: null == eu ? void 0 : eu.discount.amount })
                  : B.intl.string(B.t.pj0XBN);
    return W
        ? (0, r.jsx)(c.Gt, {
              value: ea,
              children: (0, r.jsxs)(D.Z, {
                  ref: ei,
                  className: Z.tryItOutSection,
                  type: D.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(N.Z, {
                          layoutClassName: Z.tryItOutLayout,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: Z.premiumIcon,
                                  }),
                                  B.intl.string(B.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(E.Z, {
                                      preset: en,
                                      onShuffle: er,
                                  }),
                                  (0, r.jsx)(j.Z, { user: F }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: Z.editor,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(o.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: B.intl.string(B.t["2zGdAW"]),
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              className: Z.description,
                                              variant: "text-sm/normal",
                                              children: B.intl.string(B.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(M.Z, {
                                      className: Z.customizationSection,
                                      user: F,
                                      pendingAvatarSrc: (0, v.SD)({
                                          userId: F.id,
                                          image: null != Q ? Q : z,
                                      }),
                                      pendingColors: null != X ? X : q,
                                      onThemeColorsChange: I.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(x.Z, {
                                      className: Z.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != J,
                                      onBannerChange: I.f4,
                                      showPremiumIcon: !1,
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      className: Z.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: I.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: B.intl.string(B.t["7z0D1c"]),
                                      sectionTitle: B.intl.string(B.t.vtFfPX),
                                  }),
                                  (0, r.jsx)(
                                      R.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: Z.customizationSection,
                                          user: F,
                                          sectionTitle: B.intl.string(B.t["7v0T9P"]),
                                      },
                                      "decoration",
                                  ),
                                  (0, r.jsx)(w.Z, {
                                      user: F,
                                      className: Z.customizationSection,
                                  }),
                                  (0, r.jsx)(
                                      L.Z,
                                      {
                                          className: Z.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffect: et,
                                          user: F,
                                          sectionTitle: B.intl.string(B.t.wR5wOo),
                                      },
                                      "effect",
                                  ),
                                  !ec &&
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          children: B.intl.string(B.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !ec &&
                          (0, r.jsx)(b.p, {
                              onSubscribeModalClose: el,
                              className: Z.floatingUpsell,
                              showUpsell: !0,
                              text: B.intl.format(B.t.TmfgI2, {
                                  onClick: () => {
                                      (0, O.y)({
                                          analyticsSource: eo,
                                          onSubscribeFinish: el,
                                      });
                                  },
                              }),
                              button: ef(),
                              position: "inline",
                              showShadow: !1,
                          }),
                      ec &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: Z.premiumTier2Divider }),
                                  (0, r.jsx)(y.ZP, {
                                      type: U.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: U.Si.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
