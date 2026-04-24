a.d(i, { A: () => ea });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    s = a.n(l),
    t = a(17928),
    d = a(778712),
    o = a(247928),
    u = a(480335),
    c = a(999291),
    m = a(101928),
    g = a(854627),
    p = a(946356),
    h = a(983495),
    v = a(696451),
    y = a(919395),
    A = a(97808),
    x = a(133171),
    P = a(939249),
    f = a(403581),
    j = a(922016),
    b = a(22231),
    C = a(688810),
    I = a(562819),
    w = a(290863),
    N = a(19575),
    T = a(550079),
    D = a(477782),
    k = a(985018);
let S = (e) => {
    let { onChangeAvatar: i, onChangeAvatarDecoration: a, onClose: r } = e;
    return (0, n.jsxs)(T.W, {
        "data-menu-migrated": !0,
        onClose: r,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": k.intl.string(k.t.ldIeAd),
        children: [
            (0, n.jsx)(D.Dr, { id: "change-avatar", action: i, label: k.intl.string(k.t["4OynCD"]) }),
            (0, n.jsx)(D.Dr, { id: "change-avatar-decoration", action: a, label: k.intl.string(k.t.BVcYCx) }),
        ],
    });
};
var O = a(252732),
    U = a(339984),
    B = a(430770);
let _ = N.Ay.getEnableHardwareAcceleration() ? A.Js : A.eu;
function E(e) {
    let {
            user: i,
            guild: a,
            displayProfile: l,
            canUsePremiumCustomization: o,
            previewAvatar: u,
            previewAvatarDecorationSrc: c,
            previewTheme: m,
            previewPrimaryColor: g,
            className: p,
            disabledInputs: h,
            isTryItOut: v,
            onUpsellClick: y,
        } = e,
        A = r.useRef(null),
        { analyticsLocations: N, newestAnalyticsLocation: T } = (0, C.Ay)(),
        D = (0, t.bG)([w.A], () => w.A.getStatus(i.id)),
        k = null == a || l?.canUsePremiumProfileCustomization || o,
        E = (0, n.jsx)(_, {
            src: u,
            avatarDecoration: c,
            imageClassName: s()(p, { [B.Lw]: !h }),
            size: d._3.SIZE_80,
            "aria-label": i.username,
            status: D,
            statusTooltip: !1,
            statusBackdropColor: null != g ? (0, x.C$)(m) : void 0,
        });
    return h
        ? (0, n.jsx)("div", { className: B.my, children: E })
        : k
          ? (0, n.jsx)(j.Y, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, n.jsx)(S, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, O.XD)({ uploadType: U.HL.AVATAR, guildId: a?.id, analyticsSource: T, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, I.L)({ guild: null == a ? void 0 : a, analyticsLocations: N });
                        },
                    });
                },
                children: (e) =>
                    (0, n.jsxs)(P.D, {
                        ...e,
                        innerRef: A,
                        className: s()(B.my, B.vk),
                        children: [
                            E,
                            (0, n.jsx)(b.R, { size: "custom", className: B.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, n.jsxs)(P.D, {
                onClick: y,
                className: s()(B.my, B.vk),
                children: [
                    E,
                    (0, n.jsx)(f.t, { size: "custom", className: B.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
var z = a(534514),
    R = a(702211),
    V = a(915614),
    G = a(996988),
    L = a(662177);
function Z(e) {
    let {
            user: i,
            displayProfile: a,
            guildId: r,
            canUsePremiumCustomization: l,
            pendingBanner: s,
            pendingAccentColor: t,
            isTryItOut: d,
            disabledInputs: o,
            onUpsellClick: u,
        } = e,
        { newestAnalyticsLocation: c } = (0, C.Ay)(),
        m = l || a?.canUsePremiumProfileCustomization || !1,
        g = m ? b.R : f.t,
        p = (0, R.b)(m);
    return (0, n.jsx)(V.A, {
        user: i,
        displayProfile: a,
        guildId: r,
        themeType: G.d.POPOUT,
        pendingBanner: s,
        pendingAccentColor: t,
        canUsePremiumProfileCustomization: l,
        children:
            !o &&
            (0, n.jsxs)(P.D, {
                onClick: () => {
                    m || p
                        ? (0, O.XD)({ uploadType: U.HL.BANNER, analyticsSource: c, guildId: r, isTryItOut: d })
                        : u?.();
                },
                className: L.v,
                children: [
                    (0, n.jsx)(g, { size: "xs", color: "white" }),
                    (0, n.jsx)(z.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: m || p ? k.intl.string(k.t.N0bC3P) : k.intl.string(k.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var M = a(685073),
    Y = a(694720),
    F = a(878555),
    H = a(442228),
    q = a(192867),
    Q = a(351906),
    W = a(656884);
function X(e) {
    let {
            user: i,
            displayProfile: a,
            guild: r,
            pendingAvatar: l,
            pendingNickname: s,
            pendingGlobalName: d,
            pendingBio: o,
            pendingPronouns: u,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: m,
            pendingDisplayNameStyles: g,
            pendingPrimaryGuildId: p,
            hideBioSection: h,
            shouldOpenBadgeTooltip: y,
        } = e,
        A = (0, t.bG)([v.Ay], () => (null == r ? null : v.Ay.getMember(r.id, i.id))),
        x = (0, t.bG)([Q.A], () => Q.A.hidePersonalInformation),
        P = a?.getPreviewBio(o),
        f = u ?? a?.pronouns,
        j = (0, O.eh)({ pendingNickname: s, pendingGlobalName: d, user: i, guildMember: A }),
        b = (0, M.gS)(p);
    return (0, n.jsxs)("div", {
        className: W.rf,
        inert: !0,
        children: [
            (0, n.jsx)(F.Ay, {
                user: i,
                guildId: r?.id,
                displayName: j,
                pendingDisplayNameStyles: g,
                usernameIcon: (() => {
                    if (null != A) {
                        if (null !== l && (null != A.avatar || null != l))
                            return (0, n.jsx)(q.A, { user: i, nickname: j });
                    }
                })(),
                pronouns: f,
                primaryGuild: b,
                trailing: (0, n.jsx)(Y.A, {
                    displayProfile: a,
                    themeType: G.d.POPOUT,
                    pendingLegacyUsernameDisabled: c,
                    pendingBadges: m,
                    shouldOpenBadgeTooltip: y,
                }),
            }),
            !h &&
                null != P &&
                "" !== P &&
                (0, n.jsx)(H.A, { user: i, bio: P, hidePersonalInformation: x, viewFullBioDisabled: !0 }),
        ],
    });
}
var J = a(993401),
    $ = a(904290);
function K(e) {
    let { user: i, hideMessageInput: a, hideExampleButton: r } = e;
    return a
        ? r
            ? null
            : (0, n.jsx)("div", {
                  className: W.qr,
                  children: (0, n.jsx)(J.FD, {
                      variant: "primary",
                      text: k.intl.string(k.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, n.jsx)("div", { className: W.qr, inert: !0, children: (0, n.jsx)($.A, { user: i }) });
}
var ee = a(652215),
    ei = a(641651);
function ea(e) {
    let {
            user: i,
            guild: a,
            canUsePremiumCustomization: r,
            onUpsellClick: l,
            pendingBanner: A,
            pendingAccentColor: x,
            pendingBio: P,
            pendingPronouns: f,
            pendingAvatar: j,
            pendingAvatarDecoration: b,
            pendingNickname: C,
            pendingGlobalName: I,
            pendingThemeColors: w,
            pendingProfileEffect: N,
            pendingLegacyUsernameDisabled: T,
            pendingDisplayNameStyles: D,
            pendingPrimaryGuildId: S,
            avatarClassName: O,
            containerClassName: U,
            isTryItOut: B = !1,
            disabledInputs: _ = !1,
            hideCustomStatus: z = !1,
            hideBioSection: R = !1,
            hideMessageInput: V = !0,
            pendingBadges: L,
            shouldOpenBadgeTooltip: M,
            hideExampleButton: Y = !1,
            interactive: F = !0,
        } = e,
        H = (0, c.Ay)(i.id, a?.id),
        q = (0, t.bG)([v.Ay], () => (null != a ? v.Ay.getMember(a.id, i.id) : null)),
        Q = (0, y.lw)({
            pendingValue: b,
            userValue: i?.avatarDecoration,
            guildValue: q?.avatarDecoration,
            guildId: a?.id,
        }),
        { avatarSrc: W, avatarDecorationSrc: J } = (0, g.A)({
            userId: i?.id,
            guildId: a?.id,
            avatarDecorationOverride: Q,
            avatarOverride: j,
            size: d._3.SIZE_80,
            showPending: !0,
        }),
        $ = (0, y.lw)({
            pendingValue: N,
            userValue: H?._userProfile?.profileEffect,
            guildValue: H?._guildMemberProfile?.profileEffect,
            guildId: a?.id,
        }),
        { theme: ea, primaryColor: en } = (0, m.A)({ user: i, displayProfile: H, pendingThemeColors: w, isPreview: r }),
        er = (0, n.jsxs)(p.A, {
            user: i,
            displayProfile: H,
            themeType: G.d.POPOUT,
            pendingThemeColors: w,
            className: s()(ei.k, U),
            forceShowPremium: r,
            children: [
                (0, n.jsxs)("div", {
                    className: ei.w,
                    children: [
                        (0, n.jsx)(Z, {
                            user: i,
                            displayProfile: H,
                            guildId: a?.id,
                            canUsePremiumCustomization: r,
                            pendingBanner: A,
                            pendingAccentColor: x,
                            isTryItOut: B,
                            disabledInputs: _,
                            onUpsellClick: () => l?.({ object: ee.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, n.jsx)(E, {
                            user: i,
                            guild: a,
                            displayProfile: H,
                            canUsePremiumCustomization: r,
                            previewAvatar: W,
                            previewAvatarDecorationSrc: J,
                            previewTheme: ea,
                            previewPrimaryColor: en,
                            className: O,
                            disabledInputs: _,
                            isTryItOut: B,
                            onUpsellClick: () => l?.({ object: ee.ZSU.AVATAR }),
                        }),
                        !z && (0, n.jsx)(h.A, { user: i, themeType: G.d.POPOUT, disableToolbar: _ }),
                    ],
                }),
                (0, n.jsx)(X, {
                    user: i,
                    displayProfile: H,
                    guild: a,
                    pendingAvatar: j,
                    pendingNickname: C,
                    pendingGlobalName: I,
                    pendingBio: P,
                    pendingPronouns: f,
                    pendingLegacyUsernameDisabled: T,
                    pendingDisplayNameStyles: D,
                    pendingPrimaryGuildId: S,
                    hideBioSection: R,
                    pendingBadges: L,
                    shouldOpenBadgeTooltip: M,
                }),
                (0, n.jsx)(K, { user: i, hideMessageInput: V, hideExampleButton: Y }),
                null != $ && (0, n.jsx)(u.A, { skuId: $.skuId }),
            ],
        });
    return F
        ? er
        : (0, n.jsx)("div", {
              role: "img",
              "aria-label": k.intl.string(k.t.ayozFl),
              children: (0, n.jsx)(o.M, { children: er }),
          });
}
