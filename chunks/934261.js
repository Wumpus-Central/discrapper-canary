n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(809206),
    o = n(597688),
    c = n(884697),
    a = n(905357),
    d = n(95422),
    u = n(18438),
    f = n(778825),
    m = n(957730),
    p = n(222062),
    h = n(921813),
    g = n(350327),
    x = n(687158),
    _ = n(706454),
    v = n(695346),
    C = n(265159),
    E = n(25990),
    I = n(594174),
    j = n(55935),
    P = n(74538),
    N = n(388032),
    Z = n(57043);
let S = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: n, product: s, purchase: u } = e,
            f = (0, i.e7)([I.default], () => I.default.getCurrentUser()),
            m = (0, i.e7)([o.Z], () => o.Z.getProduct(null == n ? void 0 : n.skuId)),
            h = (0, i.e7)([_.default], () => _.default.locale),
            g = P.ZP.canUseCollectibles(f),
            x = (0, c.qS)(u),
            v = (0, c.G1)(s),
            C = !g && x,
            E = (null == u ? void 0 : u.expiresAt) != null ? (0, j.TD)(Date.now(), u.expiresAt) : null,
            S = (0, d.a)(u),
            T = (0, a.k)(m),
            k = (0, p.M)(!v || g),
            A = b(C, v, g, k);
        return null != n
            ? (0, r.jsx)('div', {
                  className: t ? Z.effectDescriptionNoGradient : Z.effectDescriptionBorderWithGradient,
                  children: (0, r.jsxs)('div', {
                      className: Z.effectDescriptionContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: Z.effectName,
                              children: null != S ? S : T
                          }),
                          (0, r.jsx)(l.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: Z.effectDescription,
                              children: null != u ? u.summary : A
                          }),
                          null != E &&
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: Z.effectPurchasedAt,
                                  children: N.intl.format(N.t.Io7ozs, { days: E.days.toString() })
                              }),
                          null != u &&
                              (0, r.jsxs)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: Z.effectPurchasedAt,
                                  children: [
                                      N.intl.format(N.t.gW9R4O, {
                                          date: u.purchasedAt.toLocaleDateString(h, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != u.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('br', {}),
                                                  N.intl.format(N.t.eZSTa2, {
                                                      date: u.expiresAt.toLocaleDateString(h, {
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
                          x &&
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: Z.effectPurchasedAt,
                                  children: N.intl.string(N.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    b = (e, t, n, r) => (e ? N.intl.string(N.t.ZVTtBg) : t && n ? N.intl.string(N.t.L5hyz8) : t && !n ? (r ? N.intl.string(N.t.meldu7) : N.intl.string(N.t.bGl9t7)) : N.intl.string(N.t.PXzyvr)),
    T = (e) => {
        var t;
        let { user: n, pendingProfileEffectRecord: l, canApplySelectedChange: o, product: c, purchase: a, guild: d } = e,
            {
                pendingGlobalName: p,
                pendingNickname: _,
                pendingPronouns: I,
                pendingBio: j,
                pendingBanner: N,
                pendingAvatar: b,
                pendingAvatarDecoration: T,
                pendingThemeColors: k,
                pendingAccentColor: A
            } = (0, i.cj)([f.Z, E.Z], () => ({
                pendingNickname: void 0,
                pendingGlobalName: void 0,
                pendingAccentColor: void 0,
                ...(null != d ? f.Z.getAllPending() : E.Z.getAllPending())
            })),
            B = P.ZP.isPremium(n),
            G = P.ZP.canUsePremiumProfileCustomization(n),
            y = (0, x.ZP)(n.id),
            R = !!(null == y ? void 0 : y.getPreviewBio(j).value),
            w = {
                user: n,
                guild: d,
                pendingGlobalName: p,
                pendingNickname: _,
                pendingPronouns: I,
                pendingBio: v.dN.useSetting() && null != j ? m.ZP.parse(void 0, j).content : j,
                pendingBanner: N,
                useLargeBanner: !0,
                pendingAvatar: b,
                pendingAvatarDecoration: T,
                pendingThemeColors: k,
                pendingAccentColor: A,
                pendingProfileEffectId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
                hideFakeActivity: R,
                canUsePremiumCustomization: G,
                onUpsellClick: C.Z,
                onAvatarChange: null != d ? u.I5 : s.I5,
                onBannerChange: g.g_
            };
        return (0, r.jsxs)('div', {
            className: Z.previewContainer,
            children: [
                (0, r.jsx)(h.Z, {
                    ...w,
                    disabledInputs: !0,
                    hideCustomStatus: !0
                }),
                !1,
                (0, r.jsx)(S, {
                    effectIsOwned: o,
                    pendingProfileEffectRecord: l,
                    product: c,
                    purchase: a,
                    userIsPremium: B
                })
            ]
        });
    };
