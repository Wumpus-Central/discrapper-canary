n.d(t, { Z: () => K }), n(953529);
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
    p = n(411137),
    h = n(443753),
    m = n(104494),
    g = n(639119),
    E = n(402567),
    b = n(629654),
    y = n(53691),
    O = n(165583),
    v = n(267717),
    I = n(643879),
    T = n(350327),
    S = n(996073),
    A = n(25990),
    C = n(626135),
    N = n(74538),
    R = n(296810),
    P = n(433411),
    w = n(532432),
    D = n(235433),
    x = n(504983),
    L = n(134795),
    M = n(513901),
    j = n(451392),
    k = n(490220),
    U = n(981631),
    G = n(474936),
    B = n(526761),
    Z = n(388032),
    F = n(553330);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    var t, n;
    let { user: V, isVisible: Y, shouldShow: K } = e,
        z = N.ZP.isPremium(V),
        {
            pendingAvatar: q,
            pendingThemeColors: X,
            tryItOutThemeColors: Q,
            tryItOutAvatar: J,
            tryItOutBanner: $,
            tryItOutProfileEffect: ee,
            tryItOutAvatarDecoration: et,
        } = (0, a.cj)([A.Z], () => {
            let e = A.Z.getAllPending(),
                t = A.Z.getErrors();
            return W(H({}, e, A.Z.getAllTryItOut()), { errors: t });
        }),
        en = (0, h.Z)(ee),
        { preset: er, onShuffle: ei } = (0, E.Z)(),
        ea = i.useRef(null);
    (0, S.Z)(ea, B.Y_.TRY_IT_OUT);
    let eo = (0, p.p)("TryOutPremiumSection"),
        {
            analyticsLocations: es,
            newestAnalyticsLocation: el,
            sourceAnalyticsLocations: ec,
        } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        eu = (e) => {
            if (e) {
                if (((0, s.I5)(J), (0, T.z5)(Q), (0, T.ho)($), null != et)) {
                    let e = d.Z.getProduct(et.skuId);
                    null != e && (0, _.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, s.cV)(et))
                        : null != f.Z.getPurchase(et.skuId) && (0, s.cV)(et);
                }
                C.default.track(U.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: er });
            }
        };
    i.useEffect(() => {
        Y &&
            C.default.track(U.rMx.PREMIUM_UPSELL_VIEWED, {
                type: G.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.ZY5.USER_SETTINGS },
                location_stack: ec,
            });
    }, [ec, V, Y]);
    let ed = (null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === G.Si.TIER_2,
        ef = (0, m.Ng)(),
        e_ = (0, m.Wp)(ef, G.Si.TIER_2),
        ep = () =>
            z
                ? Z.intl.string(Z.t.AfRWI8)
                : e_
                  ? Z.intl.formatToPlainString(Z.t.bkQ4bH, { percent: null == ef ? void 0 : ef.discount.amount })
                  : Z.intl.string(Z.t.pj0XBN);
    return K
        ? (0, r.jsx)(c.Gt, {
              value: es,
              children: (0, r.jsxs)(x.Z, {
                  ref: ea,
                  className: F.tryItOutSection,
                  type: x.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(R.Z, {
                          layoutClassName: F.tryItOutLayout,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: F.premiumIcon,
                                  }),
                                  Z.intl.string(Z.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(b.Z, {
                                      preset: er,
                                      onShuffle: ei,
                                  }),
                                  (0, r.jsx)(k.Z, { user: V }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: F.editor,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(o.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: Z.intl.string(Z.t["2zGdAW"]),
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              className: F.description,
                                              variant: "text-sm/normal",
                                              children: Z.intl.string(Z.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(j.Z, {
                                      className: F.customizationSection,
                                      user: V,
                                      pendingAvatarSrc: (0, I.SD)({
                                          userId: V.id,
                                          image: null != J ? J : q,
                                      }),
                                      pendingColors: null != Q ? Q : X,
                                      onThemeColorsChange: T.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(L.Z, {
                                      className: F.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != $,
                                      onBannerChange: T.f4,
                                      showPremiumIcon: !1,
                                  }),
                                  (0, r.jsx)(w.Z, {
                                      className: F.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: T.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: Z.intl.string(Z.t["7z0D1c"]),
                                      sectionTitle: Z.intl.string(Z.t.vtFfPX),
                                  }),
                                  !eo &&
                                      (0, r.jsx)(
                                          P.Z,
                                          {
                                              isTryItOutFlow: !0,
                                              className: F.customizationSection,
                                              user: V,
                                              sectionTitle: Z.intl.string(Z.t["7v0T9P"]),
                                          },
                                          "decoration",
                                      ),
                                  (0, r.jsx)(D.Z, {
                                      user: V,
                                      className: F.customizationSection,
                                  }),
                                  !eo &&
                                      (0, r.jsx)(
                                          M.Z,
                                          {
                                              className: F.customizationSection,
                                              isTryItOutFlow: !0,
                                              initialSelectedEffect: en,
                                              user: V,
                                              sectionTitle: Z.intl.string(Z.t.wR5wOo),
                                          },
                                          "effect",
                                      ),
                                  !ed &&
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          children: Z.intl.string(Z.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !ed &&
                          (0, r.jsx)(y.p, {
                              onSubscribeModalClose: eu,
                              className: F.floatingUpsell,
                              showUpsell: !0,
                              text: Z.intl.format(Z.t.TmfgI2, {
                                  onClick: () => {
                                      (0, v.y)({
                                          analyticsSource: el,
                                          onSubscribeFinish: eu,
                                      });
                                  },
                              }),
                              button: ep(),
                              position: "inline",
                              showShadow: !1,
                          }),
                      ed &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: F.premiumTier2Divider }),
                                  (0, r.jsx)(O.ZP, {
                                      type: G.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: G.Si.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
