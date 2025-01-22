r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(680295),
    u = r(687158),
    c = r(576635),
    d = r(518950),
    f = r(502762),
    p = r(4517),
    h = r(150039),
    _ = r(450734),
    m = r(225089),
    g = r(853726),
    E = r(165747),
    v = r(981631),
    y = r(228168),
    b = r(154960);
function I(e) {
    let { user: n, guild: r, canUsePremiumCustomization: a, onUpsellClick: I, pendingBanner: T, pendingBio: S, pendingPronouns: A, pendingAvatar: C, pendingAvatarDecoration: N, pendingNickname: R, pendingGlobalName: O, pendingThemeColors: D, pendingProfileEffectId: L, avatarClassName: x, containerClassName: w, isTryItOutFlow: P = !1, disabledInputs: M = !1, hideCustomStatus: k = !1, hideBioSection: U = !1, hideMessageInput: B = !0, hideExampleButton: G = !1 } = e,
        Z = (0, u.ZP)(n.id, null == r ? void 0 : r.id),
        { avatarSrc: F, avatarDecorationSrc: V } = (0, d.Z)({
            user: n,
            guildId: null == r ? void 0 : r.id,
            avatarDecorationOverride: N,
            avatarOverride: C,
            size: s.AvatarSizes.SIZE_80,
            showPending: !0
        }),
        j = (0, h.ZT)({
            pendingProfileEffectId: L,
            displayProfile: Z
        }),
        { theme: H, primaryColor: Y } = (0, c.Z)({
            user: n,
            displayProfile: Z,
            pendingThemeColors: D,
            isPreview: a
        });
    return (0, i.jsxs)(f.Z, {
        user: n,
        displayProfile: Z,
        profileType: y.y0.BITE_SIZE,
        pendingThemeColors: D,
        className: o()(b.container, w),
        forceShowPremium: a,
        children: [
            (0, i.jsxs)('header', {
                className: b.header,
                children: [
                    (0, i.jsx)(m.Z, {
                        user: n,
                        displayProfile: Z,
                        guildId: null == r ? void 0 : r.id,
                        canUsePremiumCustomization: a,
                        pendingBanner: T,
                        isTryItOutFlow: P,
                        disabledInputs: M,
                        onUpsellClick: () => (null == I ? void 0 : I({ object: v.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, i.jsx)(_.Z, {
                        user: n,
                        guild: r,
                        displayProfile: Z,
                        canUsePremiumCustomization: a,
                        previewAvatar: F,
                        previewAvatarDecoration: V,
                        previewTheme: H,
                        previewPrimaryColor: Y,
                        className: x,
                        disabledInputs: M,
                        isTryItOutFlow: P,
                        onUpsellClick: () => (null == I ? void 0 : I({ object: v.qAy.AVATAR }))
                    }),
                    !k &&
                        (0, i.jsx)(p.Z, {
                            location: 'ProfileCustomizationPreview',
                            user: n,
                            profileType: y.y0.BITE_SIZE
                        })
                ]
            }),
            (0, i.jsx)(g.Z, {
                user: n,
                displayProfile: Z,
                guild: r,
                pendingAvatar: C,
                pendingNickname: R,
                pendingGlobalName: O,
                pendingBio: S,
                pendingPronouns: A,
                isTryItOutFlow: P,
                hideBioSection: U
            }),
            (0, i.jsx)(E.Z, {
                user: n,
                hideMessageInput: B,
                hideExampleButton: G
            }),
            null != j && (0, i.jsx)(l.Z, { profileEffectId: j })
        ]
    });
}
