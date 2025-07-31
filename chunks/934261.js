r.d(t, { Z: () => Z });
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
    j = r(706454),
    y = r(695346),
    x = r(265159),
    v = r(25990),
    O = r(594174),
    P = r(55935),
    _ = r(74538),
    E = r(388032),
    S = r(108391);
function C(e) {
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
            m = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
            g = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
            h = (0, l.e7)([j.default], () => j.default.locale),
            b = _.ZP.canUseCollectibles(m),
            y = (0, c.qS)(f),
            x = (0, c.G1)(d),
            v = !b && y,
            C = (null == f ? void 0 : f.expiresAt) != null ? (0, P.TD)(Date.now(), f.expiresAt) : null,
            I = (0, u.a)(f),
            Z = (0, a.k)(g),
            N = (0, p.M)(!x || b),
            D = w(v, x, b, N);
        return null != r
            ? (0, n.jsx)('div', {
                  className: t ? S.effectDescriptionNoGradient : S.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)('div', {
                      className: S.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: S.effectName,
                              children: (0, i.isEmpty)(I) ? Z : I
                          }),
                          null != f
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    color: 'text-default',
                                    variant: 'text-sm/normal',
                                    className: S.effectDescription,
                                    children: D
                                }),
                          null != C &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: S.effectPurchasedAt,
                                  children: E.intl.format(E.t.Io7ozs, { days: C.days.toString() })
                              }),
                          null != f &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: S.effectPurchasedAt,
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
                          y &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: S.effectPurchasedAt,
                                  children: E.intl.string(E.t.nKdAlJ)
                              })
                      ]
                  })
              })
            : null;
    },
    w = (e, t, r, n) => (e ? E.intl.string(E.t['1UPza2']) : t && r ? E.intl.string(E.t.hmyYKy) : t && !r ? (n ? E.intl.string(E.t.meldu7) : E.intl.string(E.t.JtAKws)) : E.intl.string(E.t.fEGjVV)),
    Z = (e) => {
        var t, r, i;
        let { user: o, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: u, guild: p } = e,
            {
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: P,
                pendingBio: E,
                pendingBanner: w,
                pendingAvatar: Z,
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k
            } = (0, l.cj)([d.Z, v.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != p ? d.Z.getAllPending() : v.Z.getAllPending()
                )
            ),
            A = _.ZP.isPremium(o),
            T = _.ZP.canUsePremiumProfileCustomization(o),
            R = (0, b.ZP)(o.id),
            G = !!(null == R ? void 0 : R.getPreviewBio(E).value),
            U = {
                user: o,
                guild: p,
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: P,
                pendingBio: y.dN.useSetting() && null != E ? f.ZP.parse(void 0, E).content : E,
                pendingBanner: w,
                useLargeBanner: !0,
                pendingAvatar: (0, g.SD)({
                    userId: o.id,
                    image: Z
                }),
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k,
                pendingProfileEffectId: null != (t = null == s ? void 0 : s.id) ? t : null,
                hideFakeActivity: G,
                canUsePremiumCustomization: T,
                onUpsellClick: x.Z,
                onBannerChange: h.g_
            };
        return (0, n.jsxs)('div', {
            className: S.previewContainer,
            children: [
                (0, n.jsx)(
                    m.Z,
                    ((r = C({}, U)),
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
