n.d(t, { Z: () => A });
var r = n(951288);
n(647438);
var i = n(392711),
    l = n(442837),
    o = n(481060),
    s = n(597688),
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
    y = n(265159),
    P = n(25990),
    j = n(594174),
    O = n(55935),
    _ = n(74538),
    v = n(388032),
    E = n(219299);
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
let S = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: n, product: u, purchase: d } = e,
            p = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
            m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == n ? void 0 : n.skuId)),
            g = (0, l.e7)([x.default], () => x.default.locale),
            h = _.ZP.canUseCollectibles(p),
            b = (0, c.qS)(d),
            y = (0, c.G1)(u),
            P = !h && b,
            C = (null == d ? void 0 : d.expiresAt) != null ? (0, O.TD)(Date.now(), d.expiresAt) : null,
            S = (0, a.ag)(d),
            A = (0, a.kd)(m),
            I = (0, f.M)(!y || h),
            Z = w(P, y, h, I);
        return null != n
            ? (0, r.jsx)("div", {
                  className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
                  children: (0, r.jsxs)("div", {
                      className: E.effectDescriptionContainer,
                      children: [
                          (0, r.jsx)(o.Text, {
                              color: "header-primary",
                              variant: "text-sm/semibold",
                              className: E.effectName,
                              children: (0, i.isEmpty)(S) ? A : S,
                          }),
                          null != d
                              ? null
                              : (0, r.jsx)(o.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    className: E.effectDescription,
                                    children: Z,
                                }),
                          null != C &&
                              (0, r.jsx)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: v.intl.format(v.t.Io7ozs, { days: C.days.toString() }),
                              }),
                          null != d &&
                              (0, r.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: [
                                      v.intl.format(v.t.gW9R4O, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != d.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("br", {}),
                                                  v.intl.format(v.t.eZSTa2, {
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
                              (0, r.jsx)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: v.intl.string(v.t.nKdAlJ),
                              }),
                      ],
                  }),
              })
            : null;
    },
    w = (e, t, n, r) =>
        e
            ? v.intl.string(v.t["1UPza2"])
            : t && n
              ? v.intl.string(v.t.hmyYKy)
              : t && !n
                ? r
                    ? v.intl.string(v.t.meldu7)
                    : v.intl.string(v.t.JtAKws)
                : v.intl.string(v.t.fEGjVV),
    A = (e) => {
        var t, n, i;
        let {
                user: o,
                pendingProfileEffectRecord: s,
                canApplySelectedChange: c,
                product: a,
                purchase: f,
                guild: x,
            } = e,
            {
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: v,
                pendingBio: w,
                pendingBanner: A,
                pendingAvatar: I,
                pendingAvatarDecoration: Z,
                pendingThemeColors: N,
                pendingAccentColor: D,
            } = (0, l.cj)([u.Z, P.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != x ? u.Z.getAllPending() : P.Z.getAllPending(),
                ),
            ),
            T = _.ZP.isPremium(o),
            k = _.ZP.canUsePremiumProfileCustomization(o),
            L = (0, h.ZP)(o.id),
            U = !!(null == L ? void 0 : L.getPreviewBio(w).value),
            B = {
                user: o,
                guild: x,
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: v,
                pendingBio: b.dN.useSetting() && null != w ? d.ZP.parse(void 0, w).content : w,
                pendingBanner: A,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: o.id,
                    image: I,
                }),
                pendingAvatarDecoration: Z,
                pendingThemeColors: N,
                pendingAccentColor: D,
                pendingProfileEffectId: null != (t = null == s ? void 0 : s.id) ? t : null,
                hideFakeActivity: U,
                canUsePremiumCustomization: k,
                onUpsellClick: y.Z,
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
                (0, r.jsx)(S, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: f,
                    userIsPremium: T,
                }),
            ],
        });
    };
