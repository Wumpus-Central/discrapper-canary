a.d(i, { A: () => er });
var l = a(627968),
    r = a(64700),
    n = a(503698),
    s = a.n(n),
    t = a(17928),
    d = a(778712),
    o = a(346055),
    u = a(480335),
    c = a(474257),
    m = a(744808),
    p = a(999291),
    g = a(101928),
    h = a(854627),
    v = a(946356),
    y = a(983495),
    A = a(696451),
    x = a(919395),
    f = a(97808),
    P = a(133171),
    j = a(939249),
    I = a(403581),
    b = a(922016),
    C = a(22231),
    w = a(688810),
    N = a(562819),
    D = a(290863),
    T = a(19575),
    k = a(980707),
    O = a(477782),
    S = a(375708);
let B = function (e) {
    let { onChangeAvatar: i, onChangeAvatarDecoration: a, onClose: r } = e;
    return (0, l.jsxs)(k.W, {
        "data-menu-migrated": !0,
        onClose: r,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": S.intl.string(S.t.ldIeAd),
        children: [
            (0, l.jsx)(O.Dr, { id: "change-avatar", action: i, label: S.intl.string(S.t["4OynCD"]) }),
            (0, l.jsx)(O.Dr, { id: "change-avatar-decoration", action: a, label: S.intl.string(S.t.BVcYCx) }),
        ],
    });
};
var U = a(252732),
    V = a(339984),
    _ = a(430770);
let z = T.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu;
function E(e) {
    let {
            user: i,
            guild: a,
            displayProfile: n,
            canUsePremiumCustomization: o,
            previewAvatar: u,
            previewAvatarDecorationSrc: c,
            previewTheme: m,
            previewPrimaryColor: p,
            className: g,
            disabledInputs: h,
            isTryItOut: v,
            onUpsellClick: y,
        } = e,
        A = r.useRef(null),
        { analyticsLocations: x, newestAnalyticsLocation: f } = (0, w.Ay)(),
        T = (0, t.bG)([D.A], () => D.A.getStatus(i.id)),
        k = null == a || n?.canUsePremiumProfileCustomization || o,
        O = (0, l.jsx)(z, {
            src: u,
            avatarDecoration: c,
            imageClassName: s()(g, { [_.Lw]: !h }),
            size: d._3.SIZE_80,
            "aria-label": i.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor: null != p ? (0, P.C$)(m) : void 0,
        });
    return h
        ? (0, l.jsx)("div", { className: _.my, children: O })
        : k
          ? (0, l.jsx)(b.Y, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, l.jsx)(B, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, U.XD)({ uploadType: V.HL.AVATAR, guildId: a?.id, analyticsSource: f, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, N.L)({ guild: null == a ? void 0 : a, analyticsLocations: x });
                        },
                    });
                },
                children: (e) =>
                    (0, l.jsxs)(j.D, {
                        ...e,
                        innerRef: A,
                        className: s()(_.my, _.vk),
                        children: [
                            O,
                            (0, l.jsx)(C.R, { size: "custom", className: _.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, l.jsxs)(j.D, {
                onClick: y,
                className: s()(_.my, _.vk),
                children: [
                    O,
                    (0, l.jsx)(I.t, { size: "custom", className: _.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
var R = a(534514),
    L = a(702211),
    F = a(915614),
    G = a(996988),
    M = a(662177);
function Y(e) {
    let {
            user: i,
            displayProfile: a,
            guildId: r,
            canUsePremiumCustomization: n,
            pendingBanner: s,
            pendingAccentColor: t,
            isTryItOut: d,
            disabledInputs: o,
            onUpsellClick: u,
        } = e,
        { newestAnalyticsLocation: c } = (0, w.Ay)(),
        m = n || a?.canUsePremiumProfileCustomization || !1,
        p = m ? C.R : I.t,
        g = (0, L.b)(m);
    return (0, l.jsx)(F.A, {
        user: i,
        displayProfile: a,
        guildId: r,
        themeType: G.d.POPOUT,
        pendingBanner: s,
        pendingAccentColor: t,
        canUsePremiumProfileCustomization: n,
        children:
            !o &&
            (0, l.jsxs)(j.D, {
                onClick: () => {
                    m || g
                        ? (0, U.XD)({ uploadType: V.HL.BANNER, analyticsSource: c, guildId: r, isTryItOut: d })
                        : u?.();
                },
                className: M.v,
                children: [
                    (0, l.jsx)(p, { size: "xs", color: "white" }),
                    (0, l.jsx)(R.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: m || g ? S.intl.string(S.t.N0bC3P) : S.intl.string(S.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var Z = a(685073),
    H = a(413492),
    q = a(878555),
    Q = a(442228),
    W = a(192867),
    X = a(351906),
    J = a(656884);
function K(e) {
    let {
            user: i,
            displayProfile: a,
            guild: r,
            pendingAvatar: n,
            pendingNickname: s,
            pendingGlobalName: d,
            pendingBio: o,
            pendingPronouns: u,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: m,
            pendingDisplayNameStyles: p,
            pendingPrimaryGuildId: g,
            hideBioSection: h,
            shouldOpenBadgeTooltip: v,
        } = e,
        y = (0, t.bG)([A.Ay], () => (null == r ? null : A.Ay.getMember(r.id, i.id))),
        x = (0, t.bG)([X.A], () => X.A.hidePersonalInformation),
        f = a?.getPreviewBio(o),
        P = u ?? a?.pronouns,
        j = (0, U.eh)({ pendingNickname: s, pendingGlobalName: d, user: i, guildMember: y }),
        I = (0, Z.gS)(g);
    return (0, l.jsxs)("div", {
        className: J.rf,
        inert: !0,
        children: [
            (0, l.jsx)(q.Ay, {
                user: i,
                guildId: r?.id,
                displayName: j,
                pendingDisplayNameStyles: p,
                usernameIcon: (() => {
                    if (null != y) {
                        if (null !== n && (null != y.avatar || null != n))
                            return (0, l.jsx)(W.A, { user: i, nickname: j });
                    }
                })(),
                pronouns: P,
                primaryGuild: I,
                trailing: (0, l.jsx)(H.A, {
                    displayProfile: a,
                    themeType: G.d.POPOUT,
                    pendingLegacyUsernameDisabled: c,
                    pendingBadges: m,
                    shouldOpenBadgeTooltip: v,
                }),
            }),
            !h &&
                null != f &&
                "" !== f &&
                (0, l.jsx)(Q.A, { userId: i.id, userBio: f, hidePersonalInformation: x, viewFullBioDisabled: !0 }),
        ],
    });
}
var $ = a(993401),
    ee = a(784886);
function ei(e) {
    let { user: i, hideMessageInput: a, hideExampleButton: r } = e;
    return a
        ? r
            ? null
            : (0, l.jsx)("div", {
                  className: J.qr,
                  children: (0, l.jsx)($.FD, {
                      variant: "primary",
                      text: S.intl.string(S.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, l.jsx)("div", { className: J.qr, inert: !0, children: (0, l.jsx)(ee.A, { user: i }) });
}
var ea = a(652215),
    el = a(641651);
function er(e) {
    let {
            user: i,
            guild: a,
            canUsePremiumCustomization: r,
            onUpsellClick: n,
            pendingBanner: f,
            pendingAccentColor: P,
            pendingBio: j,
            pendingPronouns: I,
            pendingAvatar: b,
            pendingAvatarDecoration: C,
            pendingNickname: w,
            pendingGlobalName: N,
            pendingThemeColors: D,
            pendingProfileEffect: T,
            profileEffectRestartKey: k,
            pendingProfileFrame: O,
            pendingLegacyUsernameDisabled: B,
            pendingDisplayNameStyles: U,
            pendingPrimaryGuildId: V,
            className: _,
            avatarClassName: z,
            containerClassName: R,
            isTryItOut: L = !1,
            disabledInputs: F = !1,
            hideCustomStatus: M = !1,
            hideBioSection: Z = !1,
            hideMessageInput: H = !0,
            hideProfileFrame: q = !1,
            pendingBadges: Q,
            shouldOpenBadgeTooltip: W,
            hideExampleButton: X = !1,
            interactive: J = !0,
        } = e,
        $ = (0, p.Ay)(i.id, a?.id),
        ee = (0, t.bG)([A.Ay], () => (null != a ? A.Ay.getMember(a.id, i.id) : null)),
        er = (0, x.lw)({
            pendingValue: C,
            userValue: i?.avatarDecoration,
            guildValue: ee?.avatarDecoration,
            guildId: a?.id,
        }),
        { avatarSrc: en, avatarDecorationSrc: es } = (0, h.A)({
            userId: i?.id,
            guildId: a?.id,
            avatarDecorationOverride: er,
            avatarOverride: b,
            size: d._3.SIZE_80,
            showPending: !0,
        }),
        et = (0, x.lw)({
            pendingValue: T,
            userValue: $?._userProfile?.profileEffect,
            guildValue: $?._guildMemberProfile?.profileEffect,
            guildId: a?.id,
        }),
        ed = q
            ? void 0
            : (0, x.lw)({
                  pendingValue: O,
                  userValue: $?._userProfile?.profileFrame,
                  guildValue: $?._guildMemberProfile?.profileFrame,
                  guildId: a?.id,
              }),
        eo = (0, c.A)(ed?.skuId, "UserProfilePreview"),
        { theme: eu, primaryColor: ec } = (0, g.A)({ user: i, displayProfile: $, pendingThemeColors: D, isPreview: r }),
        em = (0, l.jsxs)(v.A, {
            user: i,
            displayProfile: $,
            themeType: G.d.POPOUT,
            pendingThemeColors: D,
            profileFrameSkuIdOverride: ed?.skuId ?? null,
            className: s()(el.kL, _),
            forceShowPremium: r,
            children: [
                (0, l.jsxs)("div", {
                    className: el.wx,
                    children: [
                        (0, l.jsx)(Y, {
                            user: i,
                            displayProfile: $,
                            guildId: a?.id,
                            canUsePremiumCustomization: r,
                            pendingBanner: f,
                            pendingAccentColor: P,
                            isTryItOut: L,
                            disabledInputs: F,
                            onUpsellClick: () => n?.({ object: ea.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, l.jsx)(E, {
                            user: i,
                            guild: a,
                            displayProfile: $,
                            canUsePremiumCustomization: r,
                            previewAvatar: en,
                            previewAvatarDecorationSrc: es,
                            previewTheme: eu,
                            previewPrimaryColor: ec,
                            className: z,
                            disabledInputs: F,
                            isTryItOut: L,
                            onUpsellClick: () => n?.({ object: ea.ZSU.AVATAR }),
                        }),
                        !M && (0, l.jsx)(y.A, { user: i, themeType: G.d.POPOUT, disableToolbar: F }),
                    ],
                }),
                (0, l.jsx)(K, {
                    user: i,
                    displayProfile: $,
                    guild: a,
                    pendingAvatar: b,
                    pendingNickname: w,
                    pendingGlobalName: N,
                    pendingBio: j,
                    pendingPronouns: I,
                    pendingLegacyUsernameDisabled: B,
                    pendingDisplayNameStyles: U,
                    pendingPrimaryGuildId: V,
                    hideBioSection: Z,
                    pendingBadges: Q,
                    shouldOpenBadgeTooltip: W,
                }),
                (0, l.jsx)(ei, { user: i, hideMessageInput: H, hideExampleButton: X }),
                null != et && (0, l.jsx)(u.A, { skuId: et.skuId, restartKey: k }),
                null != eo && (0, l.jsx)(m.A, { frame: eo, className: el.hH }),
            ],
        });
    return J
        ? (0, l.jsx)("div", { className: s()(el.i1, R), children: em })
        : (0, l.jsx)("div", {
              role: "img",
              className: s()(el.i1, R),
              "aria-label": S.intl.string(S.t.ayozFl),
              children: (0, l.jsx)(o.M, { children: em }),
          });
}
