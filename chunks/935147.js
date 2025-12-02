n.d(t, { Z: () => z }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(809206),
    l = n(100527),
    c = n(906732),
    u = n(335131),
    d = n(597688),
    f = n(1870),
    p = n(884697),
    _ = n(411137),
    m = n(622909),
    h = n(639119),
    g = n(402567),
    E = n(629654),
    b = n(230916),
    y = n(53691),
    O = n(165583),
    v = n(267717),
    S = n(643879),
    I = n(350327),
    T = n(996073),
    A = n(25990),
    C = n(626135),
    N = n(74538),
    P = n(150039),
    R = n(296810),
    w = n(433411),
    D = n(532432),
    x = n(235433),
    L = n(504983),
    j = n(134795),
    M = n(513901),
    k = n(451392),
    U = n(490220),
    G = n(981631),
    Z = n(474936),
    B = n(526761),
    F = n(388032),
    V = n(553330);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e) {
    var t, n;
    let { user: H, isVisible: W, shouldShow: z } = e,
        q = N.ZP.isPremium(H),
        X = N.ZP.canUseAnimatedAvatar(H),
        {
            pendingAvatar: Q,
            pendingThemeColors: J,
            tryItOutThemeColors: $,
            tryItOutAvatar: ee,
            tryItOutBanner: et,
            tryItOutAvatarDecoration: en,
            tryItOutProfileEffect: er,
        } = (0, a.cj)([A.Z], () => {
            let e = A.Z.getAllPending(),
                t = A.Z.getErrors();
            return K(Y({}, e, A.Z.getAllTryItOut()), { errors: t });
        }),
        { preset: ei, onShuffle: ea } = (0, g.Z)(),
        eo = i.useRef(null);
    (0, T.Z)(eo, B.Y_.TRY_IT_OUT);
    let es = (0, _.p)("TryOutPremiumSection"),
        {
            analyticsLocations: el,
            newestAnalyticsLocation: ec,
            sourceAnalyticsLocations: eu,
        } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        ed = (e) => {
            if (e) {
                if (((0, s.I5)(ee), (0, I.z5)($), (0, I.ho)(et), null != en)) {
                    let e = d.Z.getProduct(en.skuId);
                    null != e && (0, p.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, P.PO)(en))
                        : null != f.Z.getPurchase(en.skuId) && (0, P.PO)(en);
                }
                if (null != er) {
                    let e = d.Z.getProduct(er.skuId);
                    null != e && (0, p.G1)(e)
                        ? (0, u.fK)(e.skuId).then(() => (0, P.UK)(er))
                        : null != f.Z.getPurchase(er.skuId) && (0, P.UK)(er);
                }
                C.default.track(G.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: ei });
            }
        };
    i.useEffect(() => {
        W &&
            C.default.track(G.rMx.PREMIUM_UPSELL_VIEWED, {
                type: Z.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: G.ZY5.USER_SETTINGS },
                location_stack: eu,
            });
    }, [eu, H, W]);
    let ef = (null == (n = (0, h.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === Z.Si.TIER_2,
        ep = (0, m.N)(),
        e_ = (0, b.Wp)(ep, Z.Si.TIER_2),
        em = () =>
            q
                ? F.intl.string(F.t.AfRWI8)
                : e_
                  ? F.intl.formatToPlainString(F.t.bkQ4bH, { percent: null == ep ? void 0 : ep.discount.amount })
                  : F.intl.string(F.t.pj0XBN);
    return z
        ? (0, r.jsx)(c.Gt, {
              value: el,
              children: (0, r.jsxs)(L.Z, {
                  ref: eo,
                  className: V.tryItOutSection,
                  type: L.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(R.Z, {
                          layoutClassName: V.tryItOutLayout,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: V.premiumIcon,
                                  }),
                                  F.intl.string(F.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(E.Z, {
                                      preset: ei,
                                      onShuffle: ea,
                                  }),
                                  (0, r.jsx)(U.Z, { user: H }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: V.editor,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(o.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: F.intl.string(F.t["2zGdAW"]),
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              className: V.description,
                                              variant: "text-sm/normal",
                                              children: F.intl.string(F.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(k.Z, {
                                      className: V.customizationSection,
                                      user: H,
                                      pendingAvatarSrc: (0, S.SD)({
                                          userId: H.id,
                                          image: null != ee ? ee : Q,
                                      }),
                                      pendingColors: null != $ ? $ : J,
                                      onThemeColorsChange: I.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(j.Z, {
                                      className: V.customizationSection,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != et,
                                      onBannerChange: I.f4,
                                      showPremiumIcon: !1,
                                  }),
                                  !X &&
                                      (0, r.jsx)(D.Z, {
                                          className: V.customizationSection,
                                          isTryItOut: !0,
                                          onAvatarChange: I.c_,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: F.intl.string(F.t["7z0D1c"]),
                                          sectionTitle: F.intl.string(F.t.vtFfPX),
                                      }),
                                  !es &&
                                      (0, r.jsx)(w.Z, {
                                          className: V.customizationSection,
                                          sectionTitle: F.intl.string(F.t["7v0T9P"]),
                                          user: H,
                                          isTryItOut: !0,
                                      }),
                                  (0, r.jsx)(x.Z, {
                                      user: H,
                                      className: V.customizationSection,
                                  }),
                                  !es &&
                                      (0, r.jsx)(M.Z, {
                                          className: V.customizationSection,
                                          sectionTitle: F.intl.string(F.t.wR5wOo),
                                          user: H,
                                          isTryItOut: !0,
                                      }),
                                  !ef &&
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          children: F.intl.string(F.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !ef &&
                          (0, r.jsx)(y.p, {
                              onSubscribeModalClose: ed,
                              className: V.floatingUpsell,
                              showUpsell: !0,
                              text: F.intl.format(F.t.TmfgI2, {
                                  onClick: () => {
                                      (0, v.y)({
                                          analyticsSource: ec,
                                          onSubscribeFinish: ed,
                                      });
                                  },
                              }),
                              button: em(),
                              position: "inline",
                              showShadow: !1,
                          }),
                      ef &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: V.premiumTier2Divider }),
                                  (0, r.jsx)(O.ZP, {
                                      type: Z.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: Z.Si.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
