r.d(t, { Z: () => S });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(597688),
    s = r(884697),
    c = r(905357),
    a = r(95422),
    u = r(778825),
    d = r(957730),
    f = r(222062),
    p = r(921813),
    m = r(643879),
    g = r(350327),
    h = r(687158),
    b = r(706454),
    j = r(695346),
    x = r(265159),
    y = r(25990),
    O = r(594174),
    P = r(55935),
    v = r(74538),
    _ = r(388032),
    N = r(108391);
function E(e) {
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
let C = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: r, product: u, purchase: d } = e,
            p = (0, i.e7)([O.default], () => O.default.getCurrentUser()),
            m = (0, i.e7)([l.Z], () => l.Z.getProduct(null == r ? void 0 : r.skuId)),
            g = (0, i.e7)([b.default], () => b.default.locale),
            h = v.ZP.canUseCollectibles(p),
            j = (0, s.qS)(d),
            x = (0, s.G1)(u),
            y = !h && j,
            E = (null == d ? void 0 : d.expiresAt) != null ? (0, P.TD)(Date.now(), d.expiresAt) : null,
            C = (0, a.a)(d),
            S = (0, c.k)(m),
            w = (0, f.M)(!x || h),
            Z = I(y, x, h, w);
        return null != r
            ? (0, n.jsx)('div', {
                  className: t ? N.effectDescriptionNoGradient : N.effectDescriptionBorderWithGradient,
                  children: (0, n.jsxs)('div', {
                      className: N.effectDescriptionContainer,
                      children: [
                          (0, n.jsx)(o.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: N.effectName,
                              children: null != C ? C : S
                          }),
                          (0, n.jsx)(o.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: N.effectDescription,
                              children: null != d ? d.summary : Z
                          }),
                          null != E &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: _.NW.format(_.t.Io7ozs, { days: E.days.toString() })
                              }),
                          null != d &&
                              (0, n.jsxs)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: [
                                      _.NW.format(_.t.gW9R4O, {
                                          date: d.purchasedAt.toLocaleDateString(g, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != d.expiresAt &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)('br', {}),
                                                  _.NW.format(_.t.eZSTa2, {
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
                          j &&
                              (0, n.jsx)(o.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: _.NW.string(_.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    I = (e, t, r, n) => (e ? _.NW.string(_.t.ZVTtBg) : t && r ? _.NW.string(_.t.L5hyz8) : t && !r ? (n ? _.NW.string(_.t.meldu7) : _.NW.string(_.t.bGl9t7)) : _.NW.string(_.t.PXzyvr)),
    S = (e) => {
        var t, r, o;
        let { user: l, pendingProfileEffectRecord: s, canApplySelectedChange: c, product: a, purchase: f, guild: b } = e,
            {
                pendingGlobalName: O,
                pendingNickname: P,
                pendingPronouns: _,
                pendingBio: I,
                pendingBanner: S,
                pendingAvatar: w,
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D
            } = (0, i.cj)([u.Z, y.Z], () =>
                E(
                    {
                        pendingNickname: void 0,
                        pendingGlobalName: void 0,
                        pendingAccentColor: void 0
                    },
                    null != b ? u.Z.getAllPending() : y.Z.getAllPending()
                )
            ),
            A = v.ZP.isPremium(l),
            T = v.ZP.canUsePremiumProfileCustomization(l),
            B = (0, h.ZP)(l.id),
            G = !!(null == B ? void 0 : B.getPreviewBio(I).value),
            R = {
                user: l,
                guild: b,
                pendingGlobalName: O,
                pendingNickname: P,
                pendingPronouns: _,
                pendingBio: j.dN.useSetting() && null != I ? d.ZP.parse(void 0, I).content : I,
                pendingBanner: S,
                useLargeBanner: !0,
                pendingAvatar: (0, m.SD)({
                    userId: l.id,
                    image: w
                }),
                pendingAvatarDecoration: Z,
                pendingThemeColors: k,
                pendingAccentColor: D,
                pendingProfileEffectId: null != (t = null == s ? void 0 : s.id) ? t : null,
                hideFakeActivity: G,
                canUsePremiumCustomization: T,
                onUpsellClick: x.Z,
                onBannerChange: g.g_
            };
        return (0, n.jsxs)('div', {
            className: N.previewContainer,
            children: [
                (0, n.jsx)(
                    p.Z,
                    ((r = E({}, R)),
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
                (0, n.jsx)(C, {
                    effectIsOwned: c,
                    pendingProfileEffectRecord: s,
                    product: a,
                    purchase: f,
                    userIsPremium: A
                })
            ]
        });
    };
