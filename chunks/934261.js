n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
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
    b = n(687158),
    x = n(706454),
    h = n(695346),
    j = n(265159),
    y = n(25990),
    v = n(594174),
    P = n(55935),
    O = n(74538),
    E = n(388032),
    C = n(138532);
function I(e) {
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
        let { pendingProfileEffectRecord: t, product: n, purchase: u } = e,
            d = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
            p = (0, l.e7)([s.Z], () => s.Z.getProduct(null == t ? void 0 : t.skuId)),
            m = (0, l.e7)([x.default], () => x.default.locale),
            g = O.ZP.canUseCollectibles(d),
            b = (0, c.qS)(u),
            h = (0, c.G1)(n),
            j = !g && b,
            y = (null == u ? void 0 : u.expiresAt) != null ? (0, P.TD)(Date.now(), u.expiresAt) : null,
            I = (0, a.ag)(u),
            S = (0, a.kd)(p),
            _ = (0, f.M)(!h || g),
            A = w(j, h, g, _),
            Z = null == u || j;
        return null != t
            ? (0, r.jsx)("div", {
                  className: Z ? C.effectDescriptionBorderWithGradient : C.effectDescriptionNoGradient,
                  children: (0, r.jsxs)("div", {
                      className: C.effectDescriptionContainer,
                      children: [
                          (0, r.jsx)(o.Text, {
                              color: "text-strong",
                              variant: "text-sm/semibold",
                              children: (0, i.isEmpty)(I) ? S : I,
                          }),
                          Z
                              ? (0, r.jsx)(o.Text, {
                                    color: "text-default",
                                    variant: "text-sm/normal",
                                    children: A,
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != y &&
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: E.intl.format(E.t.Io7ozn, { days: y.days.toString() }),
                                            }),
                                        (0, r.jsxs)(o.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                E.intl.format(E.t.gW9R4B, {
                                                    date: u.purchasedAt.toLocaleDateString(m, {
                                                        month: "long",
                                                        year: "numeric",
                                                    }),
                                                }),
                                                null != u.expiresAt &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("br", {}),
                                                            E.intl.format(E.t.eZSTa5, {
                                                                date: u.expiresAt.toLocaleDateString(m, {
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
                                                children: E.intl.string(E.t.nKdAlO),
                                            }),
                                    ],
                                }),
                      ],
                  }),
              })
            : null;
    },
    w = (e, t, n, r) =>
        e
            ? E.intl.string(E.t["1UPza/"])
            : t && n
              ? E.intl.string(E.t.hmyYK8)
              : t && !n
                ? r
                    ? E.intl.string(E.t.melduy)
                    : E.intl.string(E.t.JtAKwp)
                : E.intl.string(E.t.fEGjVQ),
    _ = (e) => {
        var t, n;
        let { user: i, pendingProfileEffectRecord: o, product: s, purchase: c, guild: a } = e,
            {
                pendingGlobalName: f,
                pendingNickname: x,
                pendingPronouns: v,
                pendingBio: P,
                pendingBanner: E,
                pendingAvatar: w,
                pendingAvatarDecoration: _,
                pendingThemeColors: A,
                pendingAccentColor: Z,
            } = (0, l.cj)([u.Z, y.Z], () =>
                I(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0,
                    },
                    null != a ? u.Z.getAllPending() : y.Z.getAllPending(),
                ),
            ),
            k = O.ZP.isPremium(i),
            N = O.ZP.canUsePremiumProfileCustomization(i),
            T = (0, b.ZP)(i.id),
            D = !!(null == T ? void 0 : T.getPreviewBio(P)),
            U = {
                user: i,
                guild: a,
                pendingGlobalName: f,
                pendingNickname: x,
                pendingPronouns: v,
                pendingBio: h.dN.useSetting() && null != P ? d.ZP.parse(void 0, P).content : P,
                pendingBanner: E,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: i.id,
                    image: w,
                }),
                pendingAvatarDecoration: _,
                pendingThemeColors: A,
                pendingAccentColor: Z,
                pendingProfileEffect: null != o ? o : null,
                hideFakeActivity: D,
                canUsePremiumCustomization: N,
                onUpsellClick: j.Z,
                onBannerChange: g.g_,
            };
        return (0, r.jsxs)("div", {
            className: C.previewContainer,
            children: [
                (0, r.jsx)(
                    p.Z,
                    ((t = I({}, U)),
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
                (0, r.jsx)(S, {
                    pendingProfileEffectRecord: o,
                    product: s,
                    purchase: c,
                    userIsPremium: k,
                }),
            ],
        });
    };
