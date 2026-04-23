"use strict";
n.d(t, { A: () => en });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(778712),
    d = n(247928),
    _ = n(480335),
    u = n(999291),
    c = n(101928),
    E = n(854627),
    h = n(946356),
    m = n(983495),
    f = n(696451),
    g = n(919395),
    p = n(97808),
    A = n(133171),
    I = n(939249),
    T = n(403581),
    S = n(922016),
    N = n(22231),
    C = n(688810),
    R = n(562819),
    O = n(290863),
    y = n(19575),
    v = n(550079),
    D = n(477782),
    L = n(985018);
let b = (e) => {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: r } = e;
    return (0, i.jsxs)(v.W, {
        "data-menu-migrated": !0,
        onClose: r,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": L.intl.string(L.t.ldIeAd),
        children: [
            (0, i.jsx)(D.Dr, { id: "change-avatar", action: t, label: L.intl.string(L.t["4OynCD"]) }),
            (0, i.jsx)(D.Dr, { id: "change-avatar-decoration", action: n, label: L.intl.string(L.t.BVcYCx) }),
        ],
    });
};
var w = n(252732),
    P = n(339984),
    k = n(430770);
let M = y.Ay.getEnableHardwareAcceleration() ? p.Js : p.eu;
function U(e) {
    let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: d,
            previewAvatar: _,
            previewAvatarDecorationSrc: u,
            previewTheme: c,
            previewPrimaryColor: E,
            className: h,
            disabledInputs: m,
            isTryItOut: f,
            onUpsellClick: g,
        } = e,
        p = r.useRef(null),
        { analyticsLocations: y, newestAnalyticsLocation: v } = (0, C.Ay)(),
        D = (0, o.bG)([O.A], () => O.A.getStatus(t.id)),
        L = null == n || s?.canUsePremiumProfileCustomization || d,
        U = (0, i.jsx)(M, {
            src: _,
            avatarDecoration: u,
            imageClassName: a()(h, { [k.Lw]: !m }),
            size: l._3.SIZE_80,
            "aria-label": t.username,
            status: D,
            statusTooltip: !1,
            statusBackdropColor: null != E ? (0, A.C$)(c) : void 0,
        });
    return m
        ? (0, i.jsx)("div", { className: k.my, children: U })
        : L
          ? (0, i.jsx)(S.Y, {
                targetElementRef: p,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(b, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, w.XD)({ uploadType: P.HL.AVATAR, guildId: n?.id, analyticsSource: v, isTryItOut: f }),
                        onChangeAvatarDecoration: () => {
                            (0, R.L)({ guild: null == n ? void 0 : n, analyticsLocations: y });
                        },
                    });
                },
                children: (e) =>
                    (0, i.jsxs)(I.D, {
                        ...e,
                        innerRef: p,
                        className: a()(k.my, k.vk),
                        children: [
                            U,
                            (0, i.jsx)(N.R, { size: "custom", className: k.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, i.jsxs)(I.D, {
                onClick: g,
                className: a()(k.my, k.vk),
                children: [
                    U,
                    (0, i.jsx)(T.t, { size: "custom", className: k.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
var x = n(534514),
    G = n(702211),
    V = n(915614),
    F = n(996988),
    B = n(662177);
function H(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: r,
            canUsePremiumCustomization: s,
            pendingBanner: a,
            pendingAccentColor: o,
            isTryItOut: l,
            disabledInputs: d,
            onUpsellClick: _,
        } = e,
        { newestAnalyticsLocation: u } = (0, C.Ay)(),
        c = s || n?.canUsePremiumProfileCustomization || !1,
        E = c ? N.R : T.t,
        h = (0, G.b)(c);
    return (0, i.jsx)(V.A, {
        user: t,
        displayProfile: n,
        guildId: r,
        themeType: F.d.POPOUT,
        pendingBanner: a,
        pendingAccentColor: o,
        canUsePremiumProfileCustomization: s,
        children:
            !d &&
            (0, i.jsxs)(I.D, {
                onClick: () => {
                    c || h
                        ? (0, w.XD)({ uploadType: P.HL.BANNER, analyticsSource: u, guildId: r, isTryItOut: l })
                        : _?.();
                },
                className: B.v,
                children: [
                    (0, i.jsx)(E, { size: "xs", color: "white" }),
                    (0, i.jsx)(x.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: c || h ? L.intl.string(L.t.N0bC3P) : L.intl.string(L.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var j = n(685073),
    W = n(694720),
    Y = n(878555),
    K = n(442228),
    z = n(192867),
    $ = n(351906),
    q = n(656884);
function X(e) {
    let {
            user: t,
            displayProfile: n,
            guild: r,
            pendingAvatar: s,
            pendingNickname: a,
            pendingGlobalName: l,
            pendingBio: d,
            pendingPronouns: _,
            pendingLegacyUsernameDisabled: u,
            pendingBadges: c,
            pendingDisplayNameStyles: E,
            pendingPrimaryGuildId: h,
            hideBioSection: m,
            shouldOpenBadgeTooltip: g,
        } = e,
        p = (0, o.bG)([f.Ay], () => (null == r ? null : f.Ay.getMember(r.id, t.id))),
        A = (0, o.bG)([$.A], () => $.A.hidePersonalInformation),
        I = n?.getPreviewBio(d),
        T = _ ?? n?.pronouns,
        S = (0, w.eh)({ pendingNickname: a, pendingGlobalName: l, user: t, guildMember: p }),
        N = (0, j.gS)(h);
    return (0, i.jsxs)("div", {
        className: q.rf,
        inert: !0,
        children: [
            (0, i.jsx)(Y.Ay, {
                user: t,
                guildId: r?.id,
                displayName: S,
                pendingDisplayNameStyles: E,
                usernameIcon: (() => {
                    if (null != p) {
                        if (null !== s && (null != p.avatar || null != s))
                            return (0, i.jsx)(z.A, { user: t, nickname: S });
                    }
                })(),
                pronouns: T,
                primaryGuild: N,
                trailing: (0, i.jsx)(W.A, {
                    displayProfile: n,
                    themeType: F.d.POPOUT,
                    pendingLegacyUsernameDisabled: u,
                    pendingBadges: c,
                    shouldOpenBadgeTooltip: g,
                }),
            }),
            !m &&
                null != I &&
                "" !== I &&
                (0, i.jsx)(K.A, { user: t, bio: I, hidePersonalInformation: A, viewFullBioDisabled: !0 }),
        ],
    });
}
var Z = n(993401),
    Q = n(904290);
function J(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: r } = e;
    return n
        ? r
            ? null
            : (0, i.jsx)("div", {
                  className: q.qr,
                  children: (0, i.jsx)(Z.FD, {
                      variant: "primary",
                      text: L.intl.string(L.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, i.jsx)("div", { className: q.qr, inert: !0, children: (0, i.jsx)(Q.A, { user: t }) });
}
var ee = n(652215),
    et = n(641651);
function en(e) {
    let {
            user: t,
            guild: n,
            canUsePremiumCustomization: r,
            onUpsellClick: s,
            pendingBanner: p,
            pendingAccentColor: A,
            pendingBio: I,
            pendingPronouns: T,
            pendingAvatar: S,
            pendingAvatarDecoration: N,
            pendingNickname: C,
            pendingGlobalName: R,
            pendingThemeColors: O,
            pendingProfileEffect: y,
            pendingLegacyUsernameDisabled: v,
            pendingDisplayNameStyles: D,
            pendingPrimaryGuildId: b,
            avatarClassName: w,
            containerClassName: P,
            isTryItOut: k = !1,
            disabledInputs: M = !1,
            hideCustomStatus: x = !1,
            hideBioSection: G = !1,
            hideMessageInput: V = !0,
            pendingBadges: B,
            shouldOpenBadgeTooltip: j,
            hideExampleButton: W = !1,
            interactive: Y = !0,
        } = e,
        K = (0, u.Ay)(t.id, n?.id),
        z = (0, o.bG)([f.Ay], () => (null != n ? f.Ay.getMember(n.id, t.id) : null)),
        $ = (0, g.lw)({
            pendingValue: N,
            userValue: t?.avatarDecoration,
            guildValue: z?.avatarDecoration,
            guildId: n?.id,
        }),
        { avatarSrc: q, avatarDecorationSrc: Z } = (0, E.A)({
            userId: t?.id,
            guildId: n?.id,
            avatarDecorationOverride: $,
            avatarOverride: S,
            size: l._3.SIZE_80,
            showPending: !0,
        }),
        Q = (0, g.lw)({
            pendingValue: y,
            userValue: K?._userProfile?.profileEffect,
            guildValue: K?._guildMemberProfile?.profileEffect,
            guildId: n?.id,
        }),
        { theme: en, primaryColor: ei } = (0, c.A)({ user: t, displayProfile: K, pendingThemeColors: O, isPreview: r }),
        er = (0, i.jsxs)(h.A, {
            user: t,
            displayProfile: K,
            themeType: F.d.POPOUT,
            pendingThemeColors: O,
            className: a()(et.k, P),
            forceShowPremium: r,
            children: [
                (0, i.jsxs)("div", {
                    className: et.w,
                    children: [
                        (0, i.jsx)(H, {
                            user: t,
                            displayProfile: K,
                            guildId: n?.id,
                            canUsePremiumCustomization: r,
                            pendingBanner: p,
                            pendingAccentColor: A,
                            isTryItOut: k,
                            disabledInputs: M,
                            onUpsellClick: () => s?.({ object: ee.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, i.jsx)(U, {
                            user: t,
                            guild: n,
                            displayProfile: K,
                            canUsePremiumCustomization: r,
                            previewAvatar: q,
                            previewAvatarDecorationSrc: Z,
                            previewTheme: en,
                            previewPrimaryColor: ei,
                            className: w,
                            disabledInputs: M,
                            isTryItOut: k,
                            onUpsellClick: () => s?.({ object: ee.ZSU.AVATAR }),
                        }),
                        !x && (0, i.jsx)(m.A, { user: t, themeType: F.d.POPOUT, disableToolbar: M }),
                    ],
                }),
                (0, i.jsx)(X, {
                    user: t,
                    displayProfile: K,
                    guild: n,
                    pendingAvatar: S,
                    pendingNickname: C,
                    pendingGlobalName: R,
                    pendingBio: I,
                    pendingPronouns: T,
                    pendingLegacyUsernameDisabled: v,
                    pendingDisplayNameStyles: D,
                    pendingPrimaryGuildId: b,
                    hideBioSection: G,
                    pendingBadges: B,
                    shouldOpenBadgeTooltip: j,
                }),
                (0, i.jsx)(J, { user: t, hideMessageInput: V, hideExampleButton: W }),
                null != Q && (0, i.jsx)(_.A, { skuId: Q.skuId }),
            ],
        });
    return Y
        ? er
        : (0, i.jsx)("div", {
              role: "img",
              "aria-label": L.intl.string(L.t.ayozFl),
              children: (0, i.jsx)(d.M, { children: er }),
          });
}
