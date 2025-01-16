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
    C = n(706454),
    I = n(695346),
    v = n(265159),
    E = n(25990),
    P = n(594174),
    _ = n(55935),
    j = n(74538),
    S = n(388032),
    N = n(164487);
let Z = (e) => {
        let { effectIsOwned: t, pendingProfileEffectRecord: n, product: s, purchase: u } = e,
            f = (0, i.e7)([P.default], () => P.default.getCurrentUser()),
            m = (0, i.e7)([o.Z], () => o.Z.getProduct(null == n ? void 0 : n.skuId)),
            h = (0, i.e7)([C.default], () => C.default.locale),
            g = j.ZP.canUseCollectibles(f),
            x = (0, c.qS)(u),
            I = (0, c.G1)(s),
            v = !g && x,
            E = (null == u ? void 0 : u.expiresAt) != null ? (0, _.TD)(Date.now(), u.expiresAt) : null,
            Z = (0, d.a)(u),
            B = (0, a.k)(m),
            b = (0, p.M)(!I || g),
            A = T(v, I, g, b);
        return null != n
            ? (0, r.jsx)('div', {
                  className: t ? N.effectDescriptionNoGradient : N.effectDescriptionBorderWithGradient,
                  children: (0, r.jsxs)('div', {
                      className: N.effectDescriptionContainer,
                      children: [
                          (0, r.jsx)(l.Text, {
                              color: 'header-primary',
                              variant: 'text-sm/semibold',
                              className: N.effectName,
                              children: null != Z ? Z : B
                          }),
                          (0, r.jsx)(l.Text, {
                              color: 'text-normal',
                              variant: 'text-sm/normal',
                              className: N.effectDescription,
                              children: null != u ? u.summary : A
                          }),
                          null != E &&
                              (0, r.jsx)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: S.intl.format(S.t.Io7ozs, { days: E.days.toString() })
                              }),
                          null != u &&
                              (0, r.jsxs)(l.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-muted',
                                  className: N.effectPurchasedAt,
                                  children: [
                                      S.intl.format(S.t.gW9R4O, {
                                          date: u.purchasedAt.toLocaleDateString(h, {
                                              month: 'long',
                                              year: 'numeric'
                                          })
                                      }),
                                      null != u.expiresAt &&
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('br', {}),
                                                  S.intl.format(S.t.eZSTa2, {
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
                                  className: N.effectPurchasedAt,
                                  children: S.intl.string(S.t.UewH9P)
                              })
                      ]
                  })
              })
            : null;
    },
    T = (e, t, n, r) => {
        if (e) return S.intl.string(S.t.ZVTtBg);
        if (t && n) return S.intl.string(S.t.L5hyz8);
        if (t && !n) return r ? S.intl.string(S.t.meldu7) : S.intl.string(S.t.bGl9t7);
        return S.intl.string(S.t.PXzyvr);
    };
t.Z = (e) => {
    var t;
    let { user: n, pendingProfileEffectRecord: l, canApplySelectedChange: o, product: c, purchase: a, guild: d } = e,
        {
            pendingGlobalName: p,
            pendingNickname: C,
            pendingPronouns: P,
            pendingBio: _,
            pendingBanner: S,
            pendingAvatar: T,
            pendingAvatarDecoration: B,
            pendingThemeColors: b,
            pendingAccentColor: A
        } = (0, i.cj)([f.Z, E.Z], () => ({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0,
            ...(null != d ? f.Z.getAllPending() : E.Z.getAllPending())
        })),
        k = j.ZP.isPremium(n),
        y = j.ZP.canUsePremiumProfileCustomization(n),
        G = (0, x.ZP)(n.id),
        M = !!(null == G ? void 0 : G.getPreviewBio(_).value),
        R = {
            user: n,
            guild: d,
            pendingGlobalName: p,
            pendingNickname: C,
            pendingPronouns: P,
            pendingBio: I.dN.useSetting() && null != _ ? m.ZP.parse(void 0, _).content : _,
            pendingBanner: S,
            useLargeBanner: !0,
            pendingAvatar: T,
            pendingAvatarDecoration: B,
            pendingThemeColors: b,
            pendingAccentColor: A,
            pendingProfileEffectId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : null,
            hideFakeActivity: M,
            canUsePremiumCustomization: y,
            onUpsellClick: v.Z,
            onAvatarChange: null != d ? u.I5 : s.I5,
            onBannerChange: g.g_
        };
    return (0, r.jsxs)('div', {
        className: N.previewContainer,
        children: [
            (0, r.jsx)(h.Z, {
                ...R,
                disabledInputs: !0,
                hideCustomStatus: !0
            }),
            !1,
            (0, r.jsx)(Z, {
                effectIsOwned: o,
                pendingProfileEffectRecord: l,
                product: c,
                purchase: a,
                userIsPremium: k
            })
        ]
    });
};
