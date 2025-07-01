r.d(t, { Z: () => N });
var n = r(255367);
r(73800);
var i = r(392711),
    l = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(884697),
    a = r(905357),
    u = r(95422),
    d = r(778825),
    f = r(957730),
    p = r(222062),
    m = r(678135),
    g = r(643879),
    h = r(350327),
    b = r(687158),
    x = r(706454),
    j = r(695346),
    O = r(265159),
    y = r(25990),
    P = r(594174),
    v = r(55935),
    _ = r(74538),
    E = r(388032),
    C = r(108391);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
let I = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: d, purchase: f } = e,
            m = (0, l.e7)([P.default], () => P.default.getCurrentUser()),
            g = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
            h = (0, l.e7)([x.default], () => x.default.locale),
            b = _.ZP.canUseCollectibles(m),
            j = (0, c.qS)(f),
            O = (0, c.G1)(d),
            y = !b && j,
            w = (null == f ? void 0 : f.expiresAt) != null ? (0, v.TD)(Date.now(), f.expiresAt) : null,
            I = (0, u.a)(f),
            N = (0, a.k)(g),
            Z = (0, p.M)(!O || b),
            k = S(y, O, b, Z);
        return null != r
            ? (0, n.jsx)('div', {
                  className: t ? C.effectDescriptionNoGradient : C.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)('div', {
                      className: C.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: C.effectName,
                              children: (0, i.isEmpty)(I) ? N : I
                          }),
                          null != f
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    color: 'text-default',
                                    variant: 'text-sm/normal',
                                    className: C.effectDescription,
                                    children: k
                                }),
                          null != w &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: C.effectPurchasedAt,
                                  children: E.intl.format(E.t.Io7ozs, { days: w.days.toString() })
                              }),
                          null != f &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: C.effectPurchasedAt,
                                  children: [
                                      E.intl.format(E.t.gW9R4O, {
                                          date: f.purchasedAt.toLocaleDateString(h, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != f.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  E.intl.format(E.t.eZSTa2, {
                                                      date: f.expiresAt.toLocaleDateString(h, {
                                                          minute: 'numeric',
                                                          hour: 'numeric',
                                                          day: 'numeric',
                                                          month: 'long',
                                                          year: 'numeric'
                                                      })
                                                  })
                                              ]
                                          })
                                  ]
                              }),
                          j &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: C.effectPurchasedAt,
                                  children: E.intl.string(E.t.nKdAlJ)
                              })
                      ]
                  })
              })
            : null;
    },
    S = (e, t, r, n) => (e ? E.intl.string(E.t['1UPza2']) : t && r ? E.intl.string(E.t.hmyYKy) : t && !r ? (n ? E.intl.string(E.t.meldu7) : E.intl.string(E.t.JtAKws)) : E.intl.string(E.t.fEGjVV)),
    N = (e) => {
        var t, r, i;
        let { user: o, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: u, guild: p } = e,
            {
                pendingGlobalName: x,
                pendingNickname: P,
                pendingPronouns: v,
                pendingBio: E,
                pendingBanner: S,
                pendingAvatar: N,
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D
            } = (0, l.cj)([d.Z, y.Z], () =>
                w(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != p ? d.Z.getAllPending() : y.Z.getAllPending()
                )
            ),
            A = _.ZP.isPremium(o),
            T = _.ZP.canUsePremiumProfileCustomization(o),
            B = (0, b.ZP)(o.id),
            G = !!(null == B ? void 0 : B.getPreviewBio(E).value),
            R = {
                user: o,
                guild: p,
                pendingGlobalName: x,
                pendingNickname: P,
                pendingPronouns: v,
                pendingBio: j.dN.useSetting() && null != E ? f.ZP.parse(void 0, E).content : E,
                pendingBanner: S,
                useLargeBanner: !0,
                pendingAvatar: (0, g.SD)({
                    userId: o.id,
                    image: N
                }),
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D,
                pendingProfileEffectId: null != (t = null == s ? void 0 : s.id) ? t : null,
                hideFakeActivity: G,
                canUsePremiumCustomization: T,
                onUpsellClick: O.Z,
                onBannerChange: h.g_
            };
        return (0, n.jsxs)('div', {
            className: C.previewContainer,
            children: [
                (0, n.jsx)(
                    m.Z,
                    ((r = w({}, R)),
                    (i = i =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r)
                ),
                !1,
                (0, n.jsx)(I, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: u,
                    userIsPremium: A
                })
            ]
        });
    };
