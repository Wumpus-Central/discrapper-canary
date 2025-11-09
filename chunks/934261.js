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
    y = n(695346),
    b = n(265159),
    j = n(25990),
    O = n(594174),
    P = n(55935),
    v = n(74538),
    _ = n(388032),
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
            p = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
            m = (0, l.e7)([s.Z], () => s.Z.getProduct(null == n ? void 0 : n.skuId)),
            g = (0, l.e7)([x.default], () => x.default.locale),
            h = v.ZP.canUseCollectibles(p),
            y = (0, c.qS)(d),
            b = (0, c.G1)(u),
            j = !h && y,
            C = (null == d ? void 0 : d.expiresAt) != null ? (0, P.TD)(Date.now(), d.expiresAt) : null,
            I = (0, a.ag)(d),
            w = (0, a.kd)(m),
            A = (0, f.M)(!b || h),
            N = S(j, b, h, A);
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
                                  children: _.intl.format(_.t.Io7ozn, { days: C.days.toString() }),
                              }),
                          null != d &&
                              (0, r.jsxs)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: [
                                      _.intl.format(_.t.gW9R4B, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: "long",
                                              year: "numeric",
                                          }),
                                      }),
                                      null != d.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("br", {}),
                                                  _.intl.format(_.t.eZSTa5, {
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
                          y &&
                              (0, r.jsx)(o.Text, {
                                  variant: "text-xxs/normal",
                                  color: "text-muted",
                                  className: E.effectPurchasedAt,
                                  children: _.intl.string(_.t.nKdAlO),
                              }),
                      ],
                  }),
              })
            : null;
    },
    S = (e, t, n, r) =>
        e
            ? _.intl.string(_.t["1UPza/"])
            : t && n
              ? _.intl.string(_.t.hmyYK8)
              : t && !n
                ? r
                    ? _.intl.string(_.t.melduy)
                    : _.intl.string(_.t.JtAKwp)
                : _.intl.string(_.t.fEGjVQ),
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
                pendingNickname: O,
                pendingPronouns: P,
                pendingBio: _,
                pendingBanner: S,
                pendingAvatar: w,
                pendingAvatarDecoration: A,
                pendingThemeColors: N,
                pendingAccentColor: T,
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
            Z = v.ZP.isPremium(i),
            k = v.ZP.canUsePremiumProfileCustomization(i),
            D = (0, h.ZP)(i.id),
            U = !!(null == D ? void 0 : D.getPreviewBio(_)),
            B = {
                user: i,
                guild: f,
                pendingGlobalName: x,
                pendingNickname: O,
                pendingPronouns: P,
                pendingBio: y.dN.useSetting() && null != _ ? d.ZP.parse(void 0, _).content : _,
                pendingBanner: S,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: i.id,
                    image: w,
                }),
                pendingAvatarDecoration: A,
                pendingThemeColors: N,
                pendingAccentColor: T,
                pendingProfileEffect: null != o ? o : null,
                hideFakeActivity: U,
                canUsePremiumCustomization: k,
                onUpsellClick: b.Z,
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
                    userIsPremium: Z,
                }),
            ],
        });
    };
