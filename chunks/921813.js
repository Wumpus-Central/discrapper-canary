t.d(i, {
    Z: function () {
        return C;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    s = t(680295),
    l = t(687158),
    c = t(576635),
    d = t(518950),
    u = t(502762),
    f = t(495804),
    p = t(150039),
    _ = t(450734),
    b = t(225089),
    m = t(853726),
    g = t(165747),
    x = t(981631),
    h = t(228168),
    v = t(154960);
function C(e) {
    let { user: i, guild: t, canUsePremiumCustomization: a, onUpsellClick: C, pendingBanner: I, pendingBio: S, pendingPronouns: k, pendingAvatar: y, pendingAvatarDecoration: T, pendingNickname: B, pendingGlobalName: j, pendingThemeColors: P, pendingProfileEffectId: E, avatarClassName: N, containerClassName: w, isTryItOutFlow: A = !1, disabledInputs: O = !1, hideCustomStatus: Z = !1, hideBioSection: R = !1, hideMessageInput: L = !0, hideExampleButton: M = !1 } = e,
        G = (0, l.ZP)(i.id, null == t ? void 0 : t.id),
        { avatarSrc: D, avatarDecorationSrc: U } = (0, d.Z)({
            user: i,
            guildId: null == t ? void 0 : t.id,
            avatarDecorationOverride: T,
            avatarOverride: y,
            size: o.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        H = (0, p.ZT)({
            pendingProfileEffectId: E,
            displayProfile: G
        }),
        { theme: W, primaryColor: F } = (0, c.Z)({
            user: i,
            displayProfile: G,
            pendingThemeColors: P,
            isPreview: a
        });
    return (0, n.jsxs)(u.Z, {
        user: i,
        displayProfile: G,
        profileType: h.y0.BITE_SIZE,
        pendingThemeColors: P,
        className: r()(v.container, w),
        forceShowPremium: a,
        children: [
            (0, n.jsxs)('header', {
                className: v.header,
                children: [
                    (0, n.jsx)(b.Z, {
                        user: i,
                        displayProfile: G,
                        guildId: null == t ? void 0 : t.id,
                        canUsePremiumCustomization: a,
                        pendingBanner: I,
                        isTryItOutFlow: A,
                        disabledInputs: O,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: x.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, n.jsx)(_.Z, {
                        user: i,
                        guild: t,
                        displayProfile: G,
                        canUsePremiumCustomization: a,
                        previewAvatar: D,
                        previewAvatarDecoration: U,
                        previewTheme: W,
                        previewPrimaryColor: F,
                        className: N,
                        disabledInputs: O,
                        isTryItOutFlow: A,
                        onUpsellClick: () => (null == C ? void 0 : C({ object: x.qAy.AVATAR }))
                    }),
                    !Z &&
                        (0, n.jsx)(f.Z, {
                            location: 'ProfileCustomizationPreview',
                            user: i,
                            profileType: h.y0.BITE_SIZE
                        })
                ]
            }),
            (0, n.jsx)(m.Z, {
                user: i,
                displayProfile: G,
                guild: t,
                pendingAvatar: y,
                pendingNickname: B,
                pendingGlobalName: j,
                pendingBio: S,
                pendingPronouns: k,
                isTryItOutFlow: A,
                hideBioSection: R
            }),
            (0, n.jsx)(g.Z, {
                user: i,
                hideMessageInput: L,
                hideExampleButton: M
            }),
            null != H && (0, n.jsx)(s.Z, { profileEffectId: H })
        ]
    });
}
