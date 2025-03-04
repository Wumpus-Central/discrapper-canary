n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(680295),
    l = n(687158),
    c = n(576635),
    u = n(518950),
    d = n(502762),
    f = n(4517),
    _ = n(150039),
    p = n(450734),
    h = n(225089),
    g = n(853726),
    m = n(165747),
    E = n(981631),
    v = n(228168),
    b = n(371831);
function y(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: y, pendingBanner: O, pendingBio: S, pendingPronouns: I, pendingAvatar: T, pendingAvatarDecoration: N, pendingNickname: A, pendingGlobalName: C, pendingThemeColors: R, pendingProfileEffectId: P, avatarClassName: D, containerClassName: w, isTryItOutFlow: L = !1, disabledInputs: x = !1, hideCustomStatus: M = !1, hideBioSection: k = !1, hideMessageInput: j = !0, hideExampleButton: U = !1, pendingBadges: G, shouldOpenBadgeTooltip: B } = e,
        V = (0, l.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: F, avatarDecorationSrc: Z } = (0, u.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: N,
            avatarOverride: T,
            size: a.EFr.SIZE_80,
            showPending: !0
        }),
        H = (0, _.ZT)({
            pendingProfileEffectId: P,
            displayProfile: V
        }),
        { theme: W, primaryColor: Y } = (0, c.Z)({
            user: t,
            displayProfile: V,
            pendingThemeColors: R,
            isPreview: i
        });
    return (0, r.jsxs)(d.Z, {
        user: t,
        displayProfile: V,
        profileType: v.y0.BITE_SIZE,
        pendingThemeColors: R,
        className: o()(b.container, w),
        forceShowPremium: i,
        children: [
            (0, r.jsxs)('header', {
                className: b.header,
                children: [
                    (0, r.jsx)(h.Z, {
                        user: t,
                        displayProfile: V,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: i,
                        pendingBanner: O,
                        isTryItOutFlow: L,
                        disabledInputs: x,
                        onUpsellClick: () => (null == y ? void 0 : y({ object: E.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, r.jsx)(p.Z, {
                        user: t,
                        guild: n,
                        displayProfile: V,
                        canUsePremiumCustomization: i,
                        previewAvatar: F,
                        previewAvatarDecoration: Z,
                        previewTheme: W,
                        previewPrimaryColor: Y,
                        className: D,
                        disabledInputs: x,
                        isTryItOutFlow: L,
                        onUpsellClick: () => (null == y ? void 0 : y({ object: E.qAy.AVATAR }))
                    }),
                    !M &&
                        (0, r.jsx)(f.Z, {
                            location: 'ProfileCustomizationPreview',
                            user: t,
                            profileType: v.y0.BITE_SIZE
                        })
                ]
            }),
            (0, r.jsx)(g.Z, {
                user: t,
                displayProfile: V,
                guild: n,
                pendingAvatar: T,
                pendingNickname: A,
                pendingGlobalName: C,
                pendingBio: S,
                pendingPronouns: I,
                pendingBadges: G,
                isTryItOutFlow: L,
                hideBioSection: k,
                shouldOpenBadgeTooltip: B
            }),
            (0, r.jsx)(m.Z, {
                user: t,
                hideMessageInput: j,
                hideExampleButton: U
            }),
            null != H && (0, r.jsx)(s.Z, { profileEffectId: H })
        ]
    });
}
