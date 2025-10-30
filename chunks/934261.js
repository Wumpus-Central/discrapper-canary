n.d(t, { Z: () => w });
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
    j = n(25990),
    P = n(594174),
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
let I = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: n, product: u, purchase: d } = e,
            p = (0, l.e7)([P.default], () => P.default.getCurrentUser()),
            m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == n ? void 0 : n.skuId)),
            g = (0, l.e7)([x.default], () => x.default.locale),
            h = _.ZP.canUseCollectibles(p),
            b = (0, c.qS)(d),
            y = (0, c.G1)(u),
            j = !h && b,
            C = (null == d ? void 0 : d.expiresAt) != null ? (0, O.TD)(Date.now(), d.expiresAt) : null,
            I = (0, a.ag)(d),
            w = (0, a.kd)(m),
            A = (0, f.M)(!y || h),
            N = S(j, y, h, A);
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
                              children: (0, i.isEmpty)(I) ? w : I,
                          }),
                          null != d
                              ? null
                              : (0, r.jsx)(o.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    className: E.effectDescription,
                                    children: N,
                                }),
                          null != C &&
                              (0, r.jsx)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: v.intl.format(v.t.Io7ozn, { days: C.days.toString() }),
                              }),
                          null != d &&
                              (0, r.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: [
                                      v.intl.format(v.t.gW9R4B, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != d.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("br", {}),
                                                  v.intl.format(v.t.eZSTa5, {
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
                                  children: v.intl.string(v.t.nKdAlO),
                              }),
                      ],
                  }),
              })
            : null;
    },
    S = (e, t, n, r) =>
        e
            ? v.intl.string(v.t["1UPza/"])
            : t && n
              ? v.intl.string(v.t.hmyYK8)
              : t && !n
                ? r
                    ? v.intl.string(v.t.melduy)
                    : v.intl.string(v.t.JtAKwp)
                : v.intl.string(v.t.fEGjVQ),
    w = (e) => {
        var t, n;
        let {
                user: i,
                pendingProfileEffectRecord: o,
                canApplySelectedChange: s,
                product: c,
                purchase: a,
                guild: f,
            } = e,
            {
                pendingGlobalName: x,
                pendingNickname: P,
                pendingPronouns: O,
                pendingBio: v,
                pendingBanner: S,
                pendingAvatar: w,
                pendingAvatarDecoration: A,
                pendingThemeColors: N,
                pendingAccentColor: Z,
            } = (0, l.cj)([u.Z, j.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != f ? u.Z.getAllPending() : j.Z.getAllPending(),
                ),
            ),
            k = _.ZP.isPremium(i),
            D = _.ZP.canUsePremiumProfileCustomization(i),
            T = (0, h.ZP)(i.id),
            U = !!(null == T ? void 0 : T.getPreviewBio(v)),
            B = {
                user: i,
                guild: f,
                pendingGlobalName: x,
                pendingNickname: P,
                pendingPronouns: O,
                pendingBio: b.dN.useSetting() && null != v ? d.ZP.parse(void 0, v).content : v,
                pendingBanner: S,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: i.id,
                    image: w,
                }),
                pendingAvatarDecoration: A,
                pendingThemeColors: N,
                pendingAccentColor: Z,
                pendingProfileEffect: null != o ? o : null,
                hideFakeActivity: U,
                canUsePremiumCustomization: D,
                onUpsellClick: y.Z,
                onBannerChange: g.g_,
            };
        return (0, r.jsxs)("div", {
            className: E.previewContainer,
            children: [
                (0, r.jsx)(
                    p.Z,
                    ((t = C({}, B)),
                    (n = n =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                ),
                !1,
                (0, r.jsx)(I, {
                    effectIsOwned: s,
                    pendingProfileEffectRecord: o,
                    product: c,
                    purchase: a,
                    userIsPremium: k,
                }),
            ],
        });
    };
