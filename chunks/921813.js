n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(22267),
    u = n(442933),
    d = n(680295),
    f = n(687158),
    _ = n(576635),
    p = n(518950),
    h = n(502762),
    m = n(4517),
    g = n(25990),
    E = n(594174),
    b = n(150039),
    y = n(450734),
    v = n(225089),
    O = n(853726),
    I = n(165747),
    S = n(981631),
    T = n(228168),
    N = n(388032),
    A = n(826938);
function C(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: o, pendingBanner: s, pendingAccentColor: c, pendingBio: g, pendingPronouns: E, pendingAvatar: N, pendingAvatarDecoration: C, pendingNickname: P, pendingGlobalName: w, pendingThemeColors: D, pendingProfileEffectId: L, avatarClassName: x, containerClassName: M, isTryItOutFlow: k = !1, disabledInputs: j = !1, hideCustomStatus: U = !1, hideBioSection: G = !1, hideMessageInput: B = !0, hideExampleButton: F = !1, pendingBadges: V, shouldOpenBadgeTooltip: Z, showNameplatePreview: H = !1 } = e,
        W = (0, f.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: Y, avatarDecorationSrc: K } = (0, p.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: C,
            avatarOverride: N,
            size: l.EFr.SIZE_80,
            showPending: !0
        }),
        z = (0, b.ZT)({
            pendingProfileEffectId: L,
            displayProfile: W
        }),
        { theme: q, primaryColor: Q } = (0, _.Z)({
            user: t,
            displayProfile: W,
            pendingThemeColors: D,
            isPreview: i
        }),
        X = (0, u.H)('ProfileCustomizationPreview');
    return (0, r.jsxs)('div', {
        className: A.column,
        children: [
            (0, r.jsxs)(h.Z, {
                user: t,
                displayProfile: W,
                profileType: T.y0.BITE_SIZE,
                pendingThemeColors: D,
                className: a()(A.container, M),
                forceShowPremium: i,
                children: [
                    (0, r.jsxs)('header', {
                        className: A.header,
                        children: [
                            (0, r.jsx)(v.Z, {
                                user: t,
                                displayProfile: W,
                                guildId: null == n ? void 0 : n.id,
                                canUsePremiumCustomization: i,
                                pendingBanner: s,
                                pendingAccentColor: c,
                                isTryItOutFlow: k,
                                disabledInputs: j,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: S.qAy.EDIT_PROFILE_BANNER }))
                            }),
                            (0, r.jsx)(y.Z, {
                                user: t,
                                guild: n,
                                displayProfile: W,
                                canUsePremiumCustomization: i,
                                previewAvatar: Y,
                                previewAvatarDecoration: K,
                                previewTheme: q,
                                previewPrimaryColor: Q,
                                className: x,
                                disabledInputs: j,
                                isTryItOutFlow: k,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: S.qAy.AVATAR }))
                            }),
                            !U &&
                                (0, r.jsx)(m.Z, {
                                    location: 'ProfileCustomizationPreview',
                                    user: t,
                                    profileType: T.y0.BITE_SIZE,
                                    disableEdit: j
                                })
                        ]
                    }),
                    (0, r.jsx)(O.Z, {
                        user: t,
                        displayProfile: W,
                        guild: n,
                        pendingAvatar: N,
                        pendingNickname: P,
                        pendingGlobalName: w,
                        pendingBio: g,
                        pendingPronouns: E,
                        isTryItOutFlow: k,
                        hideBioSection: G,
                        pendingBadges: V,
                        shouldOpenBadgeTooltip: Z
                    }),
                    (0, r.jsx)(I.Z, {
                        user: t,
                        hideMessageInput: B,
                        hideExampleButton: F
                    }),
                    null != z && (0, r.jsx)(d.Z, { profileEffectId: z })
                ]
            }),
            X && H && (0, r.jsx)(R, {})
        ]
    });
}
function R() {
    var e;
    let t = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        n = (0, s.e7)([g.Z], () => g.Z.getPendingNameplate()),
        o = i.useMemo(() => {
            var e;
            return null == t || null == (e = t.collectibles) || e.nameplate, N.NW.string(N.t.ziaxGh);
        }, [null == t || null == (e = t.collectibles) ? void 0 : e.nameplate, n]);
    return null == t
        ? null
        : (0, r.jsxs)('div', {
              className: A.nameplatePreviewSection,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: 'eyebrow',
                      children: o.toLocaleUpperCase()
                  }),
                  (0, r.jsx)(c.Z, {
                      user: t,
                      nameplate: n,
                      nameplateData: void 0 === n ? t.nameplate : void 0,
                      isHighlighted: !0,
                      className: A.nameplate
                  })
              ]
          });
}
