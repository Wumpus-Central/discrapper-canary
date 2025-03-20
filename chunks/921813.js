n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(22267),
    u = n(309351),
    d = n(680295),
    f = n(687158),
    _ = n(576635),
    p = n(518950),
    h = n(502762),
    m = n(4517),
    g = n(25990),
    E = n(594174),
    b = n(150039),
    v = n(450734),
    y = n(225089),
    O = n(853726),
    I = n(165747),
    S = n(981631),
    T = n(228168),
    N = n(388032),
    A = n(371831);
function C(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: o, pendingBanner: s, pendingBio: c, pendingPronouns: g, pendingAvatar: E, pendingAvatarDecoration: N, pendingNickname: C, pendingGlobalName: P, pendingThemeColors: w, pendingProfileEffectId: D, avatarClassName: L, containerClassName: x, isTryItOutFlow: M = !1, disabledInputs: k = !1, hideCustomStatus: j = !1, hideBioSection: U = !1, hideMessageInput: G = !0, hideExampleButton: B = !1, pendingBadges: F, shouldOpenBadgeTooltip: V, showNameplatePreview: Z = !1 } = e,
        H = (0, f.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: W, avatarDecorationSrc: Y } = (0, p.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: N,
            avatarOverride: E,
            size: l.EFr.SIZE_80,
            showPending: !0
        }),
        K = (0, b.ZT)({
            pendingProfileEffectId: D,
            displayProfile: H
        }),
        { theme: z, primaryColor: q } = (0, _.Z)({
            user: t,
            displayProfile: H,
            pendingThemeColors: w,
            isPreview: i
        }),
        Q = (0, u.H)('ProfileCustomizationPreview');
    return (0, r.jsxs)('div', {
        className: A.column,
        children: [
            (0, r.jsxs)(h.Z, {
                user: t,
                displayProfile: H,
                profileType: T.y0.BITE_SIZE,
                pendingThemeColors: w,
                className: a()(A.container, x),
                forceShowPremium: i,
                children: [
                    (0, r.jsxs)('header', {
                        className: A.header,
                        children: [
                            (0, r.jsx)(y.Z, {
                                user: t,
                                displayProfile: H,
                                guildId: null == n ? void 0 : n.id,
                                canUsePremiumCustomization: i,
                                pendingBanner: s,
                                isTryItOutFlow: M,
                                disabledInputs: k,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: S.qAy.EDIT_PROFILE_BANNER }))
                            }),
                            (0, r.jsx)(v.Z, {
                                user: t,
                                guild: n,
                                displayProfile: H,
                                canUsePremiumCustomization: i,
                                previewAvatar: W,
                                previewAvatarDecoration: Y,
                                previewTheme: z,
                                previewPrimaryColor: q,
                                className: L,
                                disabledInputs: k,
                                isTryItOutFlow: M,
                                onUpsellClick: () => (null == o ? void 0 : o({ object: S.qAy.AVATAR }))
                            }),
                            !j &&
                                (0, r.jsx)(m.Z, {
                                    location: 'ProfileCustomizationPreview',
                                    user: t,
                                    profileType: T.y0.BITE_SIZE
                                })
                        ]
                    }),
                    (0, r.jsx)(O.Z, {
                        user: t,
                        displayProfile: H,
                        guild: n,
                        pendingAvatar: E,
                        pendingNickname: C,
                        pendingGlobalName: P,
                        pendingBio: c,
                        pendingPronouns: g,
                        isTryItOutFlow: M,
                        hideBioSection: U,
                        pendingBadges: F,
                        shouldOpenBadgeTooltip: V
                    }),
                    (0, r.jsx)(I.Z, {
                        user: t,
                        hideMessageInput: G,
                        hideExampleButton: B
                    }),
                    null != K && (0, r.jsx)(d.Z, { profileEffectId: K })
                ]
            }),
            Q && Z && (0, r.jsx)(R, {})
        ]
    });
}
function R() {
    var e;
    let t = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        n = (0, s.e7)([g.Z], () => g.Z.getPendingNameplate()),
        o = i.useMemo(() => {
            var e;
            return null == t || null === (e = t.collectibles) || void 0 === e || e.nameplate, N.NW.string(N.t.ziaxGh);
        }, [null == t ? void 0 : null === (e = t.collectibles) || void 0 === e ? void 0 : e.nameplate, n]);
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
