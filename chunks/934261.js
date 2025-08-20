n.d(t, { Z: () => Z });
var r = n(951288);
n(647438);
var i = n(392711),
    l = n(442837),
    s = n(481060),
    o = n(597688),
    c = n(884697),
    a = n(29121),
    u = n(778825),
    d = n(957730),
    f = n(222062),
    p = n(678135),
    m = n(643879),
    g = n(350327),
    h = n(687158),
    x = n(706454),
    b = n(695346),
    j = n(265159),
    v = n(25990),
    P = n(594174),
    y = n(55935),
    O = n(74538),
    _ = n(388032),
    E = n(71627);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let I = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: n, product: u, purchase: d } = e,
            p = (0, l.e7)([P.default], () => P.default.getCurrentUser()),
            m = (0, l.e7)([o.Z], () => o.Z.getProduct(null == n ? void 0 : n.skuId)),
            g = (0, l.e7)([x.default], () => x.default.locale),
            h = O.ZP.canUseCollectibles(p),
            b = (0, c.qS)(d),
            j = (0, c.G1)(u),
            v = !h && b,
            C = (null == d ? void 0 : d.expiresAt) != null ? (0, y.TD)(Date.now(), d.expiresAt) : null,
            I = (0, a.ag)(d),
            Z = (0, a.kd)(m),
            w = (0, f.M)(!j || h),
            N = S(v, j, h, w);
        return null != n
            ? (0, r.jsx)("div", {
                  className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
                  children: (0, r.jsxs)("div", {
                      className: E.effectDescriptionContainer,
                      children: [
                          (0, r.jsx)(s.Text, {
                              color: "header-primary",
                              variant: "text-sm/semibold",
                              className: E.effectName,
                              children: (0, i.isEmpty)(I) ? Z : I,
                          }),
                          null != d
                              ? null
                              : (0, r.jsx)(s.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    className: E.effectDescription,
                                    children: N,
                                }),
                          null != C &&
                              (0, r.jsx)(s.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: _.intl.format(_.t.Io7ozs, { days: C.days.toString() }),
                              }),
                          null != d &&
                              (0, r.jsxs)(s.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: [
                                      _.intl.format(_.t.gW9R4O, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != d.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("br", {}),
                                                  _.intl.format(_.t.eZSTa2, {
                                                      date: d.expiresAt.toLocaleDateString(g, {
                                                          minute: "numeric",
                                                          hour: "numeric",
                                                          day: "numeric",
                                                          month: "long",
                                                          year: "numeric",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                          b &&
                              (0, r.jsx)(s.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: _.intl.string(_.t.nKdAlJ),
                              }),
                      ],
                  }),
              })
            : null;
    },
    S = (e, t, n, r) =>
        e
            ? _.intl.string(_.t["1UPza2"])
            : t && n
              ? _.intl.string(_.t.hmyYKy)
              : t && !n
                ? r
                    ? _.intl.string(_.t.meldu7)
                    : _.intl.string(_.t.JtAKws)
                : _.intl.string(_.t.fEGjVV),
    Z = (e) => {
        var t, n, i;
        let {
                user: s,
                pendingProfileEffectRecord: o,
                canApplySelectedChange: c,
                product: a,
                purchase: f,
                guild: x,
            } = e,
            {
                pendingGlobalName: P,
                pendingNickname: y,
                pendingPronouns: _,
                pendingBio: S,
                pendingBanner: Z,
                pendingAvatar: w,
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k,
            } = (0, l.cj)([u.Z, v.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != x ? u.Z.getAllPending() : v.Z.getAllPending(),
                ),
            ),
            A = O.ZP.isPremium(s),
            G = O.ZP.canUsePremiumProfileCustomization(s),
            T = (0, h.ZP)(s.id),
            R = !!(null == T ? void 0 : T.getPreviewBio(S).value),
            B = {
                user: s,
                guild: x,
                pendingGlobalName: P,
                pendingNickname: y,
                pendingPronouns: _,
                pendingBio: b.dN.useSetting() && null != S ? d.ZP.parse(void 0, S).content : S,
                pendingBanner: Z,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: s.id,
                    image: w,
                }),
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k,
                pendingProfileEffectId: null != (t = null == o ? void 0 : o.id) ? t : null,
                hideFakeActivity: R,
                canUsePremiumCustomization: G,
                onUpsellClick: j.Z,
                onBannerChange: g.g_,
            };
        return (0, r.jsxs)("div", {
            className: E.previewContainer,
            children: [
                (0, r.jsx)(
                    p.Z,
                    ((n = C({}, B)),
                    (i = i =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                ),
                !1,
                (0, r.jsx)(I, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: o,
                    product: a,
                    purchase: f,
                    userIsPremium: A,
                }),
            ],
        });
    };
