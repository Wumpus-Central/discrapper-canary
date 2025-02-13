n.d(t, { Z: () => I });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(680295),
    l = n(687158),
    u = n(576635),
    c = n(518950),
    d = n(502762),
    f = n(4517),
    _ = n(150039),
    p = n(450734),
    h = n(225089),
    m = n(853726),
    g = n(165747),
    E = n(981631),
    v = n(228168),
    y = n(447902);
function I(e) {
    let { user: t, guild: n, canUsePremiumCustomization: r, onUpsellClick: I, pendingBanner: T, pendingBio: b, pendingPronouns: S, pendingAvatar: A, pendingAvatarDecoration: N, pendingNickname: C, pendingGlobalName: R, pendingThemeColors: O, pendingProfileEffectId: D, avatarClassName: L, containerClassName: x, isTryItOutFlow: P = !1, disabledInputs: w = !1, hideCustomStatus: M = !1, hideBioSection: k = !1, hideMessageInput: U = !0, hideExampleButton: G = !1 } = e,
        B = (0, l.ZP)(t.id, null == n ? void 0 : n.id),
        { avatarSrc: Z, avatarDecorationSrc: F } = (0, c.Z)({
            user: t,
            guildId: null == n ? void 0 : n.id,
            avatarDecorationOverride: N,
            avatarOverride: A,
            size: s.EFr.SIZE_80,
            showPending: !0
        }),
        V = (0, _.ZT)({
            pendingProfileEffectId: D,
            displayProfile: B
        }),
        { theme: j, primaryColor: H } = (0, u.Z)({
            user: t,
            displayProfile: B,
            pendingThemeColors: O,
            isPreview: r
        });
    return (0, i.jsxs)(d.Z, {
        user: t,
        displayProfile: B,
        profileType: v.y0.BITE_SIZE,
        pendingThemeColors: O,
        className: a()(y.container, x),
        forceShowPremium: r,
        children: [
            (0, i.jsxs)('header', {
                className: y.header,
                children: [
                    (0, i.jsx)(h.Z, {
                        user: t,
                        displayProfile: B,
                        guildId: null == n ? void 0 : n.id,
                        canUsePremiumCustomization: r,
                        pendingBanner: T,
                        isTryItOutFlow: P,
                        disabledInputs: w,
                        onUpsellClick: () => (null == I ? void 0 : I({ object: E.qAy.EDIT_PROFILE_BANNER }))
                    }),
                    (0, i.jsx)(p.Z, {
                        user: t,
                        guild: n,
                        displayProfile: B,
                        canUsePremiumCustomization: r,
                        previewAvatar: Z,
                        previewAvatarDecoration: F,
                        previewTheme: j,
                        previewPrimaryColor: H,
                        className: L,
                        disabledInputs: w,
                        isTryItOutFlow: P,
                        onUpsellClick: () => (null == I ? void 0 : I({ object: E.qAy.AVATAR }))
                    }),
                    !M &&
                        (0, i.jsx)(f.Z, {
                            location: 'ProfileCustomizationPreview',
                            user: t,
                            profileType: v.y0.BITE_SIZE
                        })
                ]
            }),
            (0, i.jsx)(m.Z, {
                user: t,
                displayProfile: B,
                guild: n,
                pendingAvatar: A,
                pendingNickname: C,
                pendingGlobalName: R,
                pendingBio: b,
                pendingPronouns: S,
                isTryItOutFlow: P,
                hideBioSection: k
            }),
            (0, i.jsx)(g.Z, {
                user: t,
                hideMessageInput: U,
                hideExampleButton: G
            }),
            null != V && (0, i.jsx)(o.Z, { profileEffectId: V })
        ]
    });
}
