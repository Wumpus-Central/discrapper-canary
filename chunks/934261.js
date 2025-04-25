r.d(t, { Z: () => Z });
var n = r(200651);
r(192379);
var i = r(392711),
    l = r(442837),
    o = r(481060),
    s = r(597688),
    c = r(884697),
    a = r(911535),
    u = r(905357),
    d = r(95422),
    f = r(778825),
    p = r(957730),
    m = r(222062),
    g = r(678135),
    h = r(643879),
    b = r(350327),
    j = r(687158),
    x = r(706454),
    y = r(695346),
    P = r(265159),
    O = r(25990),
    v = r(594174),
    _ = r(55935),
    E = r(74538),
    C = r(388032),
    I = r(108391);
function S(e) {
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
let w = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: f, purchase: p } = e,
            g = (0, a.P)('ProfileEffectDescription'),
            h = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
            b = (0, l.e7)([s.Z], () => s.Z.getProduct(null == r ? void 0 : r.skuId)),
            j = (0, l.e7)([x.default], () => x.default.locale),
            y = E.ZP.canUseCollectibles(h),
            P = (0, c.qS)(p),
            O = (0, c.G1)(f),
            S = !y && P,
            w = (null == p ? void 0 : p.expiresAt) != null ? (0, _.TD)(Date.now(), p.expiresAt) : null,
            Z = (0, d.a)(p),
            k = (0, u.k)(b),
            D = (0, m.M)(!O || y),
            A = N(S, O, y, D);
        return null != r
            ? (0, n.jsx)('div', {
                  className: t ? I.effectDescriptionNoGradient : I.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)('div', {
                      className: I.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: I.effectName,
                              children: (0, i.isEmpty)(Z) ? k : Z
                          }),
                          g && null != p
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    color: 'text-normal',
                                    variant: 'text-sm/normal',
                                    className: I.effectDescription,
                                    children: null != p ? p.summary : A
                                }),
                          null != w &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: I.effectPurchasedAt,
                                  children: C.intl.format(C.t.Io7ozs, { days: w.days.toString() })
                              }),
                          null != p &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: I.effectPurchasedAt,
                                  children: [
                                      C.intl.format(C.t.gW9R4O, {
                                          date: p.purchasedAt.toLocaleDateString(j, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != p.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  C.intl.format(C.t.eZSTa2, {
                                                      date: p.expiresAt.toLocaleDateString(j, {
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
                          P &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: I.effectPurchasedAt,
                                  children: C.intl.string(C.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    N = (e, t, r, n) => (e ? C.intl.string(C.t.ZVTtBg) : t && r ? C.intl.string(C.t.L5hyz8) : t && !r ? (n ? C.intl.string(C.t.meldu7) : C.intl.string(C.t.bGl9t7)) : C.intl.string(C.t.PXzyvr)),
    Z = (e) => {
        var t, r, i;
        let { user: o, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: u, guild: d } = e,
            {
                pendingGlobalName: m,
                pendingNickname: x,
                pendingPronouns: v,
                pendingBio: _,
                pendingBanner: C,
                pendingAvatar: N,
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D
            } = (0, l.cj)([f.Z, O.Z], () =>
                S(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != d ? f.Z.getAllPending() : O.Z.getAllPending()
                )
            ),
            A = E.ZP.isPremium(o),
            T = E.ZP.canUsePremiumProfileCustomization(o),
            B = (0, j.ZP)(o.id),
            G = !!(null == B ? void 0 : B.getPreviewBio(_).value),
            R = {
                user: o,
                guild: d,
                pendingGlobalName: m,
                pendingNickname: x,
                pendingPronouns: v,
                pendingBio: y.dN.useSetting() && null != _ ? p.ZP.parse(void 0, _).content : _,
                pendingBanner: C,
                useLargeBanner: !0,
                pendingAvatar: (0, h.SD)({
                    userId: o.id,
                    image: N
                }),
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D,
                pendingProfileEffectId: null != (t = null == s ? void 0 : s.id) ? t : null,
                hideFakeActivity: G,
                canUsePremiumCustomization: T,
                onUpsellClick: P.Z,
                onBannerChange: b.g_
            };
        return (0, n.jsxs)('div', {
            className: I.previewContainer,
            children: [
                (0, n.jsx)(
                    g.Z,
                    ((r = S({}, R)),
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
                (0, n.jsx)(w, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: u,
                    userIsPremium: A
                })
            ]
        });
    };
