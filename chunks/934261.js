r.d(t, { Z: () => w });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(597688),
    s = r(884697),
    c = r(911535),
    a = r(905357),
    u = r(95422),
    d = r(778825),
    f = r(957730),
    p = r(222062),
    m = r(921813),
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
    N = r(388032),
    E = r(108391);
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
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: d, purchase: f } = e,
            m = (0, c.P)('ProfileEffectDescription'),
            g = (0, i.e7)([O.default], () => O.default.getCurrentUser()),
            h = (0, i.e7)([l.Z], () => l.Z.getProduct(null == r ? void 0 : r.skuId)),
            b = (0, i.e7)([j.default], () => j.default.locale),
            x = _.ZP.canUseCollectibles(g),
            P = (0, s.qS)(f),
            y = (0, s.G1)(d),
            C = !x && P,
            I = (null == f ? void 0 : f.expiresAt) != null ? (0, v.TD)(Date.now(), f.expiresAt) : null,
            w = (0, u.a)(f),
            Z = (0, a.k)(h),
            k = (0, p.M)(!y || x),
            D = S(C, y, x, k);
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
                              children: null != w ? w : Z
                          }),
                          m
                              ? null
                              : (0, n.jsx)(o.Text, {
                                    color: 'text-normal',
                                    variant: 'text-sm/normal',
                                    className: E.effectDescription,
                                    children: null != f ? f.summary : D
                                }),
                          null != I &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: N.NW.format(N.t.Io7ozs, { days: I.days.toString() })
                              }),
                          null != f &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: E.effectPurchasedAt,
                                  children: [
                                      N.NW.format(N.t.gW9R4O, {
                                          date: f.purchasedAt.toLocaleDateString(b, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != f.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  N.NW.format(N.t.eZSTa2, {
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
        let { user: l, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: u, guild: p } = e,
            {
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: v,
                pendingBio: N,
                pendingBanner: S,
                pendingAvatar: w,
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D
            } = (0, i.cj)([d.Z, y.Z], () =>
                C(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != p ? d.Z.getAllPending() : y.Z.getAllPending()
                )
            ),
            A = _.ZP.isPremium(l),
            T = _.ZP.canUsePremiumProfileCustomization(l),
            B = (0, b.ZP)(l.id),
            G = !!(null == B ? void 0 : B.getPreviewBio(N).value),
            R = {
                user: l,
                guild: p,
                pendingGlobalName: j,
                pendingNickname: O,
                pendingPronouns: v,
                pendingBio: x.dN.useSetting() && null != N ? f.ZP.parse(void 0, N).content : N,
                pendingBanner: S,
                useLargeBanner: !0,
                pendingAvatar: (0, g.SD)({
                    userId: l.id,
                    image: w
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
            className: E.previewContainer,
            children: [
                (0, n.jsx)(
                    m.Z,
                    ((r = C({}, R)),
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
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: u,
                    userIsPremium: A
                })
            ]
        });
    };
