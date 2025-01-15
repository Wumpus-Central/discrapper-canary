t.d(n, {
    Z: function () {
        return C;
    }
});
var a = t(200651);
t(192379);
var i = t(120356),
    c = t.n(i),
    o = t(481060),
    s = t(680295),
    r = t(687158),
    d = t(576635),
    l = t(518950),
    u = t(502762),
    f = t(4517),
    p = t(150039),
    A = t(450734),
    b = t(225089),
    m = t(853726),
    v = t(165747),
    Z = t(981631),
    h = t(228168),
    g = t(624566);
function C(e) {
    let { user: n, guild: t, canUsePremiumCustomization: i, onUpsellClick: C, pendingBanner: E, pendingBio: P, pendingPronouns: N, pendingAvatar: T, pendingAvatarDecoration: R, pendingNickname: I, pendingGlobalName: _, pendingThemeColors: L, pendingProfileEffectId: y, avatarClassName: x, containerClassName: j, isTryItOutFlow: B = !1, disabledInputs: D = !1, hideCustomStatus: S = !1, hideBioSection: w = !1, hideMessageInput: O = !0, hideExampleButton: M = !1 } = e,
        U = (0, r.ZP)(n.id, null == t ? void 0 : t.id),
        { avatarSrc: k, avatarDecorationSrc: V } = (0, l.Z)({
            user: n,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: R,
            avatarOverride: T,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        z = (0, p.ZT)({
            pendingProfileEffectId: y,
            displayProfile: U
        }),
        { theme: F, primaryColor: K } = (0, d.Z)({
            user: n,
            displayProfile: U,
            pendingThemeColors: L,
            isPreview: i
        });
    return (0, a.jsxs)(u.Z, {
        user: n,
        displayProfile: U,
        profileType: h.y0.BITE_SIZE,
        pendingThemeColors: L,
        className: c()(g.container, j),
        forceShowPremium: i,
        children: [
            (0, a.jsxs)('header', {
                className: g.header,
                children: [
                    (0, a.jsx)(b.Z, {
                        user: n,
                        displayProfile: U,
                        guildId: null == t ? void 0 : t.id,
                        canUsePremiumCustomization: i,
                        pendingBanner: E,
                        isTryItOutFlow: B,
                        disabledInputs: D,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: Z.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, a.jsx)(A.Z, {
                        user: n,
                        guild: t,
                        displayProfile: U,
                        canUsePremiumCustomization: i,
                        previewAvatar: k,
                        previewAvatarDecoration: V,
                        previewTheme: F,
                        previewPrimaryColor: K,
                        className: x,
                        disabledInputs: D,
                        isTryItOutFlow: B,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: Z.qAy.AVATAR }))
                    }),
                    !S &&
                        (0, a.jsx)(f.Z, {
                            location: 'ProfileCustomizationPreview',
                            user: n,
                            profileType: h.y0.BITE_SIZE
                        })
                ]
            }),
            (0, a.jsx)(m.Z, {
                user: n,
                displayProfile: U,
                guild: t,
                pendingAvatar: T,
                pendingNickname: I,
                pendingGlobalName: _,
                pendingBio: P,
                pendingPronouns: N,
                isTryItOutFlow: B,
                hideBioSection: w
            }),
            (0, a.jsx)(v.Z, {
                user: n,
                hideMessageInput: O,
                hideExampleButton: M
            }),
            null != z && (0, a.jsx)(s.Z, { profileEffectId: z })
        ]
    });
}
