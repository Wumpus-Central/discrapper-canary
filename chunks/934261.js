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
    O = r(25990),
    v = r(594174),
    P = r(55935),
    E = r(74538),
    _ = r(388032),
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
            m = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
            g = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
            h = (0, l.e7)([j.default], () => j.default.locale),
            b = E.ZP.canUseCollectibles(m),
            y = (0, c.qS)(f),
            x = (0, c.G1)(d),
            O = !b && y,
            C = (null == f ? void 0 : f.expiresAt) != null ? (0, P.TD)(Date.now(), f.expiresAt) : null,
            I = (0, u.a)(f),
            Z = (0, a.k)(g),
            N = (0, p.M)(!x || b),
            D = w(O, x, b, N);
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
                                  children: _.intl.format(_.t.Io7ozs, { days: C.days.toString() })
                              }),
                          null != f &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: S.effectPurchasedAt,
                                  children: [
                                      _.intl.format(_.t.gW9R4O, {
                                          date: f.purchasedAt.toLocaleDateString(h, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != f.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  _.intl.format(_.t.eZSTa2, {
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
                                  children: _.intl.string(_.t.nKdAlJ)
                              })
                      ]
                  })
              })
            : null;
    },
    w = (e, t, r, n) => (e ? _.intl.string(_.t['1UPza2']) : t && r ? _.intl.string(_.t.hmyYKy) : t && !r ? (n ? _.intl.string(_.t.meldu7) : _.intl.string(_.t.JtAKws)) : _.intl.string(_.t.fEGjVV)),
    Z = (e) => {
        var t, r, i;
        let { user: o, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: u, guild: p } = e,
            {
                pendingGlobalName: j,
                pendingNickname: v,
                pendingPronouns: P,
                pendingBio: _,
                pendingBanner: w,
                pendingAvatar: Z,
                pendingAvatarDecoration: N,
                pendingThemeColors: D,
                pendingAccentColor: k
            } = (0, l.cj)([d.Z, O.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != p ? d.Z.getAllPending() : O.Z.getAllPending()
                )
            ),
            A = E.ZP.isPremium(o),
            T = E.ZP.canUsePremiumProfileCustomization(o),
            G = (0, b.ZP)(o.id),
            R = !!(null == G ? void 0 : G.getPreviewBio(_).value),
            U = {
                user: o,
                guild: p,
                pendingGlobalName: j,
                pendingNickname: v,
                pendingPronouns: P,
                pendingBio: y.dN.useSetting() && null != _ ? f.ZP.parse(void 0, _).content : _,
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
                hideFakeActivity: R,
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
