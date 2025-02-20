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
    p = n(150039),
    _ = n(450734),
    h = n(225089),
    m = n(853726),
    g = n(165747),
    E = n(981631),
    v = n(228168),
    b = n(808536);
function y(e) {
    let { user: t, guild: n, canUsePremiumCustomization: i, onUpsellClick: y, pendingBanner: O, pendingBio: S, pendingPronouns: I, pendingAvatar: T, pendingAvatarDecoration: N, pendingNickname: A, pendingGlobalName: C, pendingThemeColors: R, pendingProfileEffectId: P, avatarClassName: w, containerClassName: D, isTryItOutFlow: x = !1, disabledInputs: L = !1, hideCustomStatus: M = !1, hideBioSection: k = !1, hideMessageInput: j = !0, hideExampleButton: U = !1 } = e,
        G = (0, l.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: B, avatarDecorationSrc: Z } = (0, u.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: N,
            avatarOverride: T,
            size: a.EFr.SIZE_80,
            showPending: !0
        }),
        F = (0, p.ZT)({
            pendingProfileEffectId: P,
            displayProfile: G
        }),
        { theme: V, primaryColor: H } = (0, c.Z)({
            user: t,
            displayProfile: G,
            pendingThemeColors: R,
            isPreview: i
        });
    return (0, r.jsxs)(d.Z, {
        user: t,
        displayProfile: G,
        profileType: v.y0.BITE_SIZE,
        pendingThemeColors: R,
        className: o()(b.container, D),
        forceShowPremium: i,
        children: [
            (0, r.jsxs)('header', {
                className: b.header,
                children: [
                    (0, r.jsx)(h.Z, {
                        user: t,
                        displayProfile: G,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: i,
                        pendingBanner: O,
                        isTryItOutFlow: x,
                        disabledInputs: L,
                        onUpsellClick: () => (null == y ? void 0 : y({ object: E.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, r.jsx)(_.Z, {
                        user: t,
                        guild: n,
                        displayProfile: G,
                        canUsePremiumCustomization: i,
                        previewAvatar: B,
                        previewAvatarDecoration: Z,
                        previewTheme: V,
                        previewPrimaryColor: H,
                        className: w,
                        disabledInputs: L,
                        isTryItOutFlow: x,
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
            (0, r.jsx)(m.Z, {
                user: t,
                displayProfile: G,
                guild: n,
                pendingAvatar: T,
                pendingNickname: A,
                pendingGlobalName: C,
                pendingBio: S,
                pendingPronouns: I,
                isTryItOutFlow: x,
                hideBioSection: k
            }),
            (0, r.jsx)(g.Z, {
                user: t,
                hideMessageInput: j,
                hideExampleButton: U
            }),
            null != F && (0, r.jsx)(s.Z, { profileEffectId: F })
        ]
    });
}
