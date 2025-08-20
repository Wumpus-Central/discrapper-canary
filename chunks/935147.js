n.d(t, { Z: () => Y }), n(953529);
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
    p = n(175756),
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
    w = n(504983),
    D = n(134795),
    x = n(513901),
    L = n(451392),
    j = n(490220),
    M = n(981631),
    k = n(474936),
    U = n(526761),
    G = n(388032),
    B = n(553330);
function Z(e, t, n) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Y(e) {
    var t, n;
    let { user: Z, isVisible: F, shouldShow: Y } = e,
        W = C.ZP.isPremium(Z),
        {
            pendingAvatar: K,
            pendingThemeColors: z,
            tryItOutThemeColors: q,
            tryItOutAvatar: X,
            tryItOutBanner: Q,
            tryItOutProfileEffectId: J,
            tryItOutAvatarDecoration: $,
        } = (0, a.cj)([S.Z], () => {
            let e = S.Z.getAllPending(),
                t = S.Z.getErrors();
            return H(V({}, e, S.Z.getAllTryItOut()), { errors: t });
        }),
        ee = (0, p.Z)(J),
        { preset: et, onShuffle: en } = (0, g.Z)(),
        er = i.useRef(null);
    (0, T.Z)(er, U.Y_.TRY_IT_OUT);
    let {
            analyticsLocations: ei,
            newestAnalyticsLocation: ea,
            sourceAnalyticsLocations: eo,
        } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        es = (e) => {
            if (e) {
                if (((0, s.I5)(X), (0, I.z5)(q), (0, I.ho)(Q), null != $)) {
                    let e = d.Z.getProduct($.skuId);
                    null != e && (0, _.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, s.cV)($))
                        : null != f.Z.getPurchase($.skuId) && (0, s.cV)($);
                }
                A.default.track(M.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: et });
            }
        };
    i.useEffect(() => {
        F &&
            A.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
                type: k.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: M.ZY5.USER_SETTINGS },
                location_stack: eo,
            });
    }, [eo, Z, F]);
    let el = (null == (n = (0, m.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === k.Si.TIER_2,
        ec = (0, h.Ng)(),
        eu = (0, h.Wp)(ec, k.Si.TIER_2),
        ed = () =>
            W
                ? G.intl.string(G.t.AfRWIy)
                : eu
                  ? G.intl.formatToPlainString(G.t.bkQ4bG, { percent: null == ec ? void 0 : ec.discount.amount })
                  : G.intl.string(G.t.pj0XBA);
    return Y
        ? (0, r.jsx)(c.Gt, {
              value: ei,
              children: (0, r.jsxs)(w.Z, {
                  ref: er,
                  className: B.tryItOutSection,
                  type: w.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(N.Z, {
                          layoutClassName: B.tryItOutLayout,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: B.premiumIcon,
                                  }),
                                  G.intl.string(G.t.gMlDNT),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(E.Z, {
                                      preset: et,
                                      onShuffle: en,
                                  }),
                                  (0, r.jsx)(j.Z, { user: Z }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: B.editor,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(o.X6q, {
                                              variant: "heading-xl/extrabold",
                                              children: G.intl.string(G.t["2zGdAQ"]),
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              className: B.description,
                                              variant: "text-sm/normal",
                                              children: G.intl.string(G.t.xeEC29),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(L.Z, {
                                      className: B.customizationSection,
                                      user: Z,
                                      pendingAvatarSrc: (0, v.SD)({
                                          userId: Z.id,
                                          image: null != X ? X : K,
                                      }),
                                      pendingColors: null != q ? q : z,
                                      onThemeColorsChange: I.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(D.Z, {
                                      className: B.customizationSection,
                                      isTryItOutFlow: !0,
                                      showRemoveBannerButton: null != Q,
                                      onBannerChange: I.f4,
                                      showPremiumIcon: !1,
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      className: B.customizationSection,
                                      isTryItOutFlow: !0,
                                      onAvatarChange: I.c_,
                                      showRemoveAvatarButton: !1,
                                      changeAvatarButtonText: G.intl.string(G.t["7z0D1d"]),
                                      sectionTitle: G.intl.string(G.t.vtFfPT),
                                  }),
                                  (0, r.jsx)(
                                      R.Z,
                                      {
                                          isTryItOutFlow: !0,
                                          className: B.customizationSection,
                                          user: Z,
                                          sectionTitle: G.intl.string(G.t["7v0T9P"]),
                                      },
                                      "decoration",
                                  ),
                                  (0, r.jsx)(
                                      x.Z,
                                      {
                                          className: B.customizationSection,
                                          isTryItOutFlow: !0,
                                          initialSelectedEffectId: ee,
                                          user: Z,
                                          sectionTitle: G.intl.string(G.t.wR5wOj),
                                      },
                                      "effect",
                                  ),
                                  !el &&
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          children: G.intl.string(G.t["smo74+"]),
                                      }),
                              ],
                          }),
                      }),
                      !el &&
                          (0, r.jsx)(b.p, {
                              onSubscribeModalClose: es,
                              className: B.floatingUpsell,
                              showUpsell: !0,
                              text: G.intl.format(G.t.TmfgIy, {
                                  onClick: () => {
                                      (0, O.y)({
                                          analyticsSource: ea,
                                          onSubscribeFinish: es,
                                      });
                                  },
                              }),
                              button: ed(),
                              position: "inline",
                              showShadow: !1,
                          }),
                      el &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: B.premiumTier2Divider }),
                                  (0, r.jsx)(y.ZP, {
                                      type: k.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: k.Si.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
