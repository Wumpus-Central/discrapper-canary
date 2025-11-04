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
    N = n(150039),
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
        z = C.ZP.isPremium(V),
        {
            pendingAvatar: q,
            pendingThemeColors: X,
            tryItOutThemeColors: Q,
            tryItOutAvatar: J,
            tryItOutBanner: $,
            tryItOutAvatarDecoration: ee,
            tryItOutProfileEffect: et,
        } = (0, a.cj)([S.Z], () => {
            let e = S.Z.getAllPending(),
                t = S.Z.getErrors();
            return W(H({}, e, S.Z.getAllTryItOut()), { errors: t });
        }),
        { preset: en, onShuffle: er } = (0, g.Z)(),
        ei = i.useRef(null);
    (0, T.Z)(ei, B.Y_.TRY_IT_OUT);
    let ea = (0, p.p)("TryOutPremiumSection"),
        {
            analyticsLocations: eo,
            newestAnalyticsLocation: es,
            sourceAnalyticsLocations: el,
        } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        ec = (e) => {
            if (e) {
                if (((0, s.I5)(J), (0, I.z5)(Q), (0, I.ho)($), null != ee)) {
                    let e = d.Z.getProduct(ee.skuId);
                    null != e && (0, _.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, N.PO)(ee))
                        : null != f.Z.getPurchase(ee.skuId) && (0, N.PO)(ee);
                }
                if (null != et) {
                    let e = d.Z.getProduct(et.skuId);
                    null != e && (0, _.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, N.UK)(et))
                        : null != f.Z.getPurchase(et.skuId) && (0, N.UK)(et);
                }
                A.default.track(U.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: en });
            }
        };
    i.useEffect(() => {
        Y &&
            A.default.track(U.rMx.PREMIUM_UPSELL_VIEWED, {
                type: G.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: U.ZY5.USER_SETTINGS },
                location_stack: el,
            });
    }, [el, V, Y]);
    let eu = (null == (n = (0, m.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === G.Si.TIER_2,
        ed = (0, h.Ng)(),
        ef = (0, h.Wp)(ed, G.Si.TIER_2),
        e_ = () =>
            z
                ? Z.intl.string(Z.t.AfRWI8)
                : ef
                  ? Z.intl.formatToPlainString(Z.t.bkQ4bH, { percent: null == ed ? void 0 : ed.discount.amount })
                  : Z.intl.string(Z.t.pj0XBN);
    return K
        ? (0, r.jsx)(c.Gt, {
              value: eo,
              children: (0, r.jsxs)(x.Z, {
                  ref: ei,
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
                                  (0, r.jsx)(E.Z, {
                                      preset: en,
                                      onShuffle: er,
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
                                      pendingAvatarSrc: (0, v.SD)({
                                          userId: V.id,
                                          image: null != J ? J : q,
                                      }),
                                      pendingColors: null != Q ? Q : X,
                                      onThemeColorsChange: I.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(L.Z, {
                                      className: F.customizationSection,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != $,
                                      onBannerChange: I.f4,
                                      showPremiumIcon: !1,
                                  }),
                                  (0, r.jsx)(w.Z, {
                                      className: F.customizationSection,
                                      isTryItOut: !0,
                                      onAvatarChange: I.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: Z.intl.string(Z.t["7z0D1c"]),
                                      sectionTitle: Z.intl.string(Z.t.vtFfPX),
                                  }),
                                  !ea &&
                                      (0, r.jsx)(P.Z, {
                                          className: F.customizationSection,
                                          sectionTitle: Z.intl.string(Z.t["7v0T9P"]),
                                          user: V,
                                          isTryItOut: !0,
                                      }),
                                  (0, r.jsx)(D.Z, {
                                      user: V,
                                      className: F.customizationSection,
                                  }),
                                  !ea &&
                                      (0, r.jsx)(M.Z, {
                                          className: F.customizationSection,
                                          sectionTitle: Z.intl.string(Z.t.wR5wOo),
                                          user: V,
                                          isTryItOut: !0,
                                      }),
                                  !eu &&
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          children: Z.intl.string(Z.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !eu &&
                          (0, r.jsx)(b.p, {
                              onSubscribeModalClose: ec,
                              className: F.floatingUpsell,
                              showUpsell: !0,
                              text: Z.intl.format(Z.t.TmfgI2, {
                                  onClick: () => {
                                      (0, O.y)({
                                          analyticsSource: es,
                                          onSubscribeFinish: ec,
                                      });
                                  },
                              }),
                              button: e_(),
                              position: "inline",
                              showShadow: !1,
                          }),
                      eu &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: F.premiumTier2Divider }),
                                  (0, r.jsx)(y.ZP, {
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
