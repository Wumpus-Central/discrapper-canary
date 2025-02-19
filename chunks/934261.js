r.d(t, { Z: () => w });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(809206),
    s = r(597688),
    c = r(884697),
    a = r(905357),
    u = r(95422),
    d = r(18438),
    f = r(778825),
    p = r(957730),
    m = r(222062),
    g = r(921813),
    h = r(350327),
    b = r(687158),
    j = r(706454),
    x = r(695346),
    P = r(265159),
    v = r(25990),
    y = r(594174),
    O = r(55935),
    _ = r(74538),
    N = r(388032),
    E = r(616019);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let I = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: l, purchase: d } = e,
            f = (0, i.e7)([y.default], () => y.default.getCurrentUser()),
            p = (0, i.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
            g = (0, i.e7)([j.default], () => j.default.locale),
            h = _.ZP.canUseCollectibles(f),
            b = (0, c.qS)(d),
            x = (0, c.G1)(l),
            P = !h && b,
            v = (null == d ? void 0 : d.expiresAt) != null ? (0, O.TD)(Date.now(), d.expiresAt) : null,
            C = (0, u.a)(d),
            I = (0, a.k)(p),
            w = (0, m.M)(!x || h),
            Z = S(P, x, h, w);
        return null != r
            ? (0, n.jsx)('div', {
                  className: t ? E.effectDescriptionNoGradient : E.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)('div', {
                      className: E.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: E.effectName,
                              children: null != C ? C : I
                          }),
                          (0, n.jsx)(o.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: E.effectDescription,
                              children: null != d ? d.summary : Z
                          }),
                          null != v &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: N.NW.format(N.t.Io7ozs, { days: v.days.toString() })
                              }),
                          null != d &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: [
                                      N.NW.format(N.t.gW9R4O, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != d.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  N.NW.format(N.t.eZSTa2, {
                                                      date: d.expiresAt.toLocaleDateString(g, {
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
                          b &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: N.NW.string(N.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    S = (e, t, r, n) => (e ? N.NW.string(N.t.ZVTtBg) : t && r ? N.NW.string(N.t.L5hyz8) : t && !r ? (n ? N.NW.string(N.t.meldu7) : N.NW.string(N.t.bGl9t7)) : N.NW.string(N.t.PXzyvr)),
    w = (e) => {
        var t, r, o;
        let { user: s, pendingProfileEffectRecord: c, canApplySelectedChange: a, product: u, purchase: m, guild: j } = e,
            {
                pendingGlobalName: y,
                pendingNickname: O,
                pendingPronouns: N,
                pendingBio: S,
                pendingBanner: w,
                pendingAvatar: Z,
                pendingAvatarDecoration: k,
                pendingThemeColors: D,
                pendingAccentColor: T
            } = (0, i.cj)([f.Z, v.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != j ? f.Z.getAllPending() : v.Z.getAllPending()
                )
            ),
            A = _.ZP.isPremium(s),
            B = _.ZP.canUsePremiumProfileCustomization(s),
            G = (0, b.ZP)(s.id),
            R = !!(null == G ? void 0 : G.getPreviewBio(S).value),
            W = {
                user: s,
                guild: j,
                pendingGlobalName: y,
                pendingNickname: O,
                pendingPronouns: N,
                pendingBio: x.dN.useSetting() && null != S ? p.ZP.parse(void 0, S).content : S,
                pendingBanner: w,
                useLargeBanner: !0,
                pendingAvatar: Z,
                pendingAvatarDecoration: k,
                pendingThemeColors: D,
                pendingAccentColor: T,
                pendingProfileEffectId: null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : null,
                hideFakeActivity: R,
                canUsePremiumCustomization: B,
                onUpsellClick: P.Z,
                onAvatarChange: null != j ? d.I5 : l.I5,
                onBannerChange: h.g_
            };
        return (0, n.jsxs)('div', {
            className: E.previewContainer,
            children: [
                (0, n.jsx)(
                    g.Z,
                    ((r = C({}, W)),
                    (o = o =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    r)
                ),
                !1,
                (0, n.jsx)(I, {
                    effectIsOwned: a,
                    pendingProfileEffectRecord: c,
                    product: u,
                    purchase: m,
                    userIsPremium: A
                })
            ]
        });
    };
