n.d(t, { Z: () => Z }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(809206),
    l = n(100527),
    c = n(906732),
    u = n(622909),
    d = n(639119),
    f = n(402567),
    p = n(629654),
    _ = n(230916),
    m = n(53691),
    h = n(165583),
    g = n(267717),
    E = n(643879),
    b = n(350327),
    y = n(996073),
    O = n(25990),
    v = n(626135),
    S = n(74538),
    I = n(296810),
    T = n(532432),
    A = n(235433),
    C = n(504983),
    N = n(134795),
    P = n(451392),
    R = n(490220),
    w = n(981631),
    D = n(474936),
    x = n(526761),
    L = n(388032),
    j = n(553330);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    var t, n;
    let { user: M, isVisible: U, shouldShow: Z } = e,
        B = S.ZP.isPremium(M),
        F = S.ZP.canUseAnimatedAvatar(M),
        {
            pendingAvatar: V,
            pendingThemeColors: H,
            tryItOutThemeColors: Y,
            tryItOutAvatar: W,
            tryItOutBanner: K,
        } = (0, a.cj)([O.Z], () => {
            let e = O.Z.getAllPending(),
                t = O.Z.getErrors();
            return G(k({}, e, O.Z.getAllTryItOut()), { errors: t });
        }),
        { preset: z, onShuffle: q } = (0, f.Z)(),
        Q = i.useRef(null);
    (0, y.Z)(Q, x.Y_.TRY_IT_OUT);
    let {
            analyticsLocations: X,
            newestAnalyticsLocation: J,
            sourceAnalyticsLocations: $,
        } = (0, c.ZP)(l.Z.USER_SETTINGS_TRY_OUT_PREMIUM),
        ee = (e) => {
            e &&
                ((0, s.I5)(W),
                (0, b.z5)(Y),
                (0, b.ho)(K),
                v.default.track(w.rMx.TRY_IT_OUT_PRESET_SELECTED, { preset: z }));
        };
    i.useEffect(() => {
        U &&
            v.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
                type: D.cd.PREMIUM_PROFILE_TRY_IT_OUT,
                location: { page: w.ZY5.USER_SETTINGS },
                location_stack: $,
            });
    }, [$, M, U]);
    let et = (null == (n = (0, d.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === D.Si.TIER_2,
        en = (0, u.N)(),
        er = (0, _.Wp)(en, D.Si.TIER_2),
        ei = () =>
            B
                ? L.intl.string(L.t.AfRWI8)
                : er
                  ? L.intl.formatToPlainString(L.t.bkQ4bH, { percent: null == en ? void 0 : en.discount.amount })
                  : L.intl.string(L.t.pj0XBN);
    return Z
        ? (0, r.jsx)(c.Gt, {
              value: X,
              children: (0, r.jsxs)(C.Z, {
                  ref: Q,
                  className: j.tryItOutSection,
                  type: C.Y.PREMIUM,
                  isShown: !0,
                  hasBackground: !0,
                  children: [
                      (0, r.jsx)(I.Z, {
                          layoutClassName: j.tryItOutLayout,
                          profilePreviewTitle: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.SrA, {
                                      size: "md",
                                      color: "currentColor",
                                      className: j.premiumIcon,
                                  }),
                                  L.intl.string(L.t.gMlDNd),
                              ],
                          }),
                          profilePreview: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(p.Z, {
                                      preset: z,
                                      onShuffle: q,
                                  }),
                                  (0, r.jsx)(R.Z, { user: M }),
                              ],
                          }),
                          children: (0, r.jsxs)("div", {
                              className: j.editor,
                              children: [
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(o.Heading, {
                                              variant: "heading-xl/extrabold",
                                              children: L.intl.string(L.t["2zGdAW"]),
                                          }),
                                          (0, r.jsx)(o.Text, {
                                              className: j.description,
                                              variant: "text-sm/normal",
                                              children: L.intl.string(L.t.xeEC20),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      className: j.customizationSection,
                                      user: M,
                                      pendingAvatarSrc: (0, E.SD)({
                                          userId: M.id,
                                          image: null != W ? W : V,
                                      }),
                                      pendingColors: null != Y ? Y : H,
                                      onThemeColorsChange: b.rf,
                                      showPremiumIcon: !1,
                                      preventDisabled: !0,
                                  }),
                                  (0, r.jsx)(N.Z, {
                                      className: j.customizationSection,
                                      isTryItOut: !0,
                                      showRemoveBannerButton: null != K,
                                      onBannerChange: b.f4,
                                      showPremiumIcon: !1,
                                  }),
                                  !F &&
                                      (0, r.jsx)(T.Z, {
                                          className: j.customizationSection,
                                          isTryItOut: !0,
                                          onAvatarChange: b.c_,
                                          showRemoveAvatarButton: !1,
                                          changeAvatarButtonText: L.intl.string(L.t["7z0D1c"]),
                                          sectionTitle: L.intl.string(L.t.vtFfPX),
                                      }),
                                  (0, r.jsx)(A.Z, {
                                      user: M,
                                      className: j.customizationSection,
                                  }),
                                  !et &&
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          children: L.intl.string(L.t["smo74/"]),
                                      }),
                              ],
                          }),
                      }),
                      !et &&
                          (0, r.jsx)(m.p, {
                              onSubscribeModalClose: ee,
                              className: j.floatingUpsell,
                              showUpsell: !0,
                              text: L.intl.format(L.t.TmfgI2, {
                                  onClick: () => {
                                      (0, g.y)({
                                          analyticsSource: J,
                                          onSubscribeFinish: ee,
                                      });
                                  },
                              }),
                              button: ei(),
                              position: "inline",
                              showShadow: !1,
                          }),
                      et &&
                          (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)("div", { className: j.premiumTier2Divider }),
                                  (0, r.jsx)(h.ZP, {
                                      type: D.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL,
                                      subscriptionTier: D.Si.TIER_2,
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : null;
}
