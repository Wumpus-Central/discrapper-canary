r.d(t, { Z: () => N });
var n = r(200651);
r(192379);
var i = r(442837),
    l = r(481060),
    o = r(597688),
    s = r(884697),
    c = r(911535),
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
    x = r(695346),
    P = r(265159),
    y = r(25990),
    O = r(594174),
    v = r(55935),
    _ = r(74538),
    E = r(388032),
    C = r(108391);
function I(e) {
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
let S = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: d, purchase: f } = e,
            m = (0, c.P)('ProfileEffectDescription'),
            g = (0, i.e7)([O.default], () => O.default.getCurrentUser()),
            h = (0, i.e7)([o.Z], () => o.Z.getProduct(null == r ? void 0 : r.skuId)),
            b = (0, i.e7)([j.default], () => j.default.locale),
            x = _.ZP.canUseCollectibles(g),
            P = (0, s.qS)(f),
            y = (0, s.G1)(d),
            I = !x && P,
            S = (null == f ? void 0 : f.expiresAt) != null ? (0, v.TD)(Date.now(), f.expiresAt) : null,
            N = (0, u.a)(f),
            Z = (0, a.k)(h),
            k = (0, p.M)(!y || x),
            D = w(I, y, x, k);
        return null != r
            ? (0, n.jsx)('div', {
                  className: t ? C.effectDescriptionNoGradient : C.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)('div', {
                      className: C.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: C.effectName,
                              children: null != N ? N : Z
                          }),
                          m
                              ? null
                              : (0, n.jsx)(l.Text, {
                                    color: 'text-normal',
                                    variant: 'text-sm/normal',
                                    className: C.effectDescription,
                                    children: null != f ? f.summary : D
                                }),
                          null != S &&
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: C.effectPurchasedAt,
                                  children: E.intl.format(E.t.Io7ozs, { days: S.days.toString() })
                              }),
                          null != f &&
                              (0, n.jsxs)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: C.effectPurchasedAt,
                                  children: [
                                      E.intl.format(E.t.gW9R4O, {
                                          date: f.purchasedAt.toLocaleDateString(b, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != f.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  E.intl.format(E.t.eZSTa2, {
                                                      date: f.expiresAt.toLocaleDateString(b, {
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
                              (0, n.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: C.effectPurchasedAt,
                                  children: E.intl.string(E.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    w = (e, t, r, n) => (e ? E.intl.string(E.t.ZVTtBg) : t && r ? E.intl.string(E.t.L5hyz8) : t && !r ? (n ? E.intl.string(E.t.meldu7) : E.intl.string(E.t.bGl9t7)) : E.intl.string(E.t.PXzyvr)),
    N = (e) => {
        var t, r, l;
        let { user: o, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: u, guild: p } = e,
            {
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: v,
                pendingBio: E,
                pendingBanner: w,
                pendingAvatar: N,
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D
            } = (0, i.cj)([d.Z, y.Z], () =>
                I(
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
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: v,
                pendingBio: x.dN.useSetting() && null != E ? f.ZP.parse(void 0, E).content : E,
                pendingBanner: w,
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
                onUpsellClick: P.Z,
                onBannerChange: h.g_
            };
        return (0, n.jsxs)('div', {
            className: C.previewContainer,
            children: [
                (0, n.jsx)(
                    m.Z,
                    ((r = I({}, R)),
                    (l = l =
                        {
                            disabledInputs: !0,
                            hideCustomStatus: !0
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    r)
                ),
                !1,
                (0, n.jsx)(S, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: u,
                    userIsPremium: A
                })
            ]
        });
    };
