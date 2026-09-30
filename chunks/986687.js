a.d(i, { A: () => en });
var l = a(477900),
    n = a(582128),
    r = a(503698),
    s = a.n(r),
    t = a(17928),
    d = a(778712),
    o = a(346055),
    u = a(480335),
    c = a(372320),
    m = a(744808),
    g = a(999291),
    p = a(101928),
    h = a(854627),
    v = a(946356),
    y = a(394816),
    x = a(696451),
    A = a(919395),
    f = a(97808),
    P = a(935154),
    j = a(939249),
    I = a(403581),
    b = a(922016),
    C = a(22231),
    N = a(688810),
    w = a(562819),
    D = a(290863),
    T = a(19575),
    k = a(980707),
    O = a(477782),
    S = a(375708);
let B = function (e) {
    let { onChangeAvatar: i, onChangeAvatarDecoration: a, onClose: n } = e;
    return (0, l.jsxs)(k.W, {
        "data-menu-migrated": !0,
        onClose: n,
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
    _ = a(531835);
let z = T.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu;
function E(e) {
    let {
            user: i,
            guild: a,
            displayProfile: r,
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
        x = n.useRef(null),
        { analyticsLocations: A, newestAnalyticsLocation: f } = (0, N.Ay)(),
        T = (0, t.bG)([D.A], () => D.A.getStatus(i.id)),
        k = null == a || r?.canUsePremiumProfileCustomization || o,
        O = (0, l.jsx)(z, {
            src: u,
            avatarDecoration: c,
            imageClassName: s()(p, { [_.Lw]: !h }),
            size: d._3.SIZE_80,
            "aria-label": i.username,
            status: T,
            statusTooltip: !1,
            statusBackdropColor: null != g ? (0, P.C$)(m) : void 0,
        });
    return h
        ? (0, l.jsx)("div", { className: _.my, children: O })
        : k
          ? (0, l.jsx)(b.Y, {
                targetElementRef: x,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, l.jsx)(B, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, U.XD)({ uploadType: V.HL.AVATAR, guildId: a?.id, analyticsSource: f, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, w.L)({ guild: null == a ? void 0 : a, analyticsLocations: A });
                        },
                    });
                },
                children: (e) =>
                    (0, l.jsxs)(j.D, {
                        ...e,
                        innerRef: x,
                        className: s()(_.my, _.vk),
                        children: [
                            O,
                            (0, l.jsx)(C.PencilIcon, {
                                size: "custom",
                                className: _.QY,
                                width: 20,
                                height: 20,
                                color: "white",
                            }),
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
var L = a(297264),
    R = a(702211),
    F = a(915614),
    G = a(996988),
    M = a(687468);
function Y(e) {
    let {
            user: i,
            displayProfile: a,
            guildId: n,
            canUsePremiumCustomization: r,
            pendingBanner: s,
            pendingAccentColor: t,
            isTryItOut: d,
            disabledInputs: o,
            onUpsellClick: u,
        } = e,
        { newestAnalyticsLocation: c } = (0, N.Ay)(),
        m = r || a?.canUsePremiumProfileCustomization || !1,
        g = m ? C.PencilIcon : I.t,
        p = (0, R.b)(m);
    return (0, l.jsx)(F.A, {
        user: i,
        displayProfile: a,
        guildId: n,
        themeType: G.d.POPOUT,
        pendingBanner: s,
        pendingAccentColor: t,
        canUsePremiumProfileCustomization: r,
        overlay:
            !o &&
            (0, l.jsxs)(j.D, {
                onClick: function () {
                    m || p
                        ? (0, U.XD)({ uploadType: V.HL.BANNER, analyticsSource: c, guildId: n, isTryItOut: d })
                        : u?.();
                },
                className: M.v,
                children: [
                    (0, l.jsx)(g, { size: "xs", color: "white" }),
                    (0, l.jsx)(L.D, {
                        variant: "text-sm/medium",
                        color: "text-overlay-light",
                        children: m || p ? S.intl.string(S.t.N0bC3P) : S.intl.string(S.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var Z = a(685073),
    H = a(365607),
    q = a(465829),
    Q = a(442228),
    W = a(192867),
    X = a(351906),
    J = a(47453);
function K(e) {
    let {
            user: i,
            displayProfile: a,
            guild: n,
            pendingAvatar: r,
            pendingNickname: s,
            pendingGlobalName: d,
            pendingBio: o,
            pendingPronouns: u,
            pendingLegacyUsernameDisabled: c,
            pendingBadges: m,
            pendingDisplayNameStyles: g,
            pendingPrimaryGuildId: p,
            hideBioSection: h,
            shouldOpenBadgeTooltip: v,
        } = e,
        y = (0, t.bG)([x.Ay], () => (null == n ? null : x.Ay.getMember(n.id, i.id))),
        A = (0, t.bG)([X.A], () => X.A.hidePersonalInformation),
        f = a?.getPreviewBio(o),
        P = u ?? a?.pronouns,
        j = (0, U.eh)({ pendingNickname: s, pendingGlobalName: d, user: i, guildMember: y }),
        I = (0, Z.gS)(p);
    return (0, l.jsxs)("div", {
        className: J.rf,
        inert: !0,
        children: [
            (0, l.jsx)(q.Ay, {
                user: i,
                guildId: n?.id,
                displayName: j,
                pendingDisplayNameStyles: g,
                usernameIcon: (function () {
                    if (null != y) {
                        if (null !== r && (null != y.avatar || null != r))
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
                (0, l.jsx)(Q.A, { userId: i.id, userBio: f, hidePersonalInformation: A, viewFullBioDisabled: !0 }),
        ],
    });
}
var $ = a(993401),
    ee = a(784886);
function ei(e) {
    let { user: i, hideMessageInput: a, hideExampleButton: n } = e;
    return a
        ? n
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
    el = a(394898);
function en(e) {
    let {
            user: i,
            guild: a,
            canUsePremiumCustomization: n,
            onUpsellClick: r,
            pendingBanner: f,
            pendingAccentColor: P,
            pendingBio: j,
            pendingPronouns: I,
            pendingAvatar: b,
            pendingAvatarDecoration: C,
            pendingNickname: N,
            pendingGlobalName: w,
            pendingThemeColors: D,
            pendingProfileEffect: T,
            profileEffectRestartKey: k,
            pendingProfileFrame: O,
            pendingLegacyUsernameDisabled: B,
            pendingDisplayNameStyles: U,
            pendingPrimaryGuildId: V,
            className: _,
            avatarClassName: z,
            containerClassName: L,
            isTryItOut: R = !1,
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
        $ = (0, g.Ay)(i.id, a?.id),
        ee = (0, t.bG)([x.Ay], () => (null != a ? x.Ay.getMember(a.id, i.id) : null)),
        en = (0, A.lw)({
            pendingValue: C,
            userValue: i?.avatarDecoration,
            guildValue: ee?.avatarDecoration,
            guildId: a?.id,
        }),
        { avatarSrc: er, avatarDecorationSrc: es } = (0, h.A)({
            userId: i?.id,
            guildId: a?.id,
            avatarDecorationOverride: en,
            avatarOverride: b,
            size: d._3.SIZE_80,
            showPending: !0,
        }),
        et = (0, A.lw)({
            pendingValue: T,
            userValue: $?._userProfile?.profileEffect,
            guildValue: $?._guildMemberProfile?.profileEffect,
            guildId: a?.id,
        }),
        ed = q
            ? void 0
            : (0, A.lw)({
                  pendingValue: O,
                  userValue: $?._userProfile?.profileFrame,
                  guildValue: $?._guildMemberProfile?.profileFrame,
                  guildId: a?.id,
              }),
        eo = (0, c.A)(ed?.skuId),
        { theme: eu, primaryColor: ec } = (0, p.A)({ user: i, displayProfile: $, pendingThemeColors: D, isPreview: n }),
        em = (0, l.jsxs)(v.A, {
            user: i,
            displayProfile: $,
            themeType: G.d.POPOUT,
            pendingThemeColors: D,
            profileFrameSkuIdOverride: ed?.skuId ?? null,
            className: s()(el.kL, _),
            forceShowPremium: n,
            children: [
                (0, l.jsxs)("div", {
                    className: el.wx,
                    children: [
                        (0, l.jsx)(Y, {
                            user: i,
                            displayProfile: $,
                            guildId: a?.id,
                            canUsePremiumCustomization: n,
                            pendingBanner: f,
                            pendingAccentColor: P,
                            isTryItOut: R,
                            disabledInputs: F,
                            onUpsellClick: () => r?.({ object: ea.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, l.jsx)(E, {
                            user: i,
                            guild: a,
                            displayProfile: $,
                            canUsePremiumCustomization: n,
                            previewAvatar: er,
                            previewAvatarDecorationSrc: es,
                            previewTheme: eu,
                            previewPrimaryColor: ec,
                            className: z,
                            disabledInputs: F,
                            isTryItOut: R,
                            onUpsellClick: () => r?.({ object: ea.ZSU.AVATAR }),
                        }),
                        !M && (0, l.jsx)(y.A, { user: i, themeType: G.d.POPOUT, disableToolbar: F }),
                    ],
                }),
                (0, l.jsx)(K, {
                    user: i,
                    displayProfile: $,
                    guild: a,
                    pendingAvatar: b,
                    pendingNickname: N,
                    pendingGlobalName: w,
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
        ? (0, l.jsx)("div", { className: s()(el.i1, L), children: em })
        : (0, l.jsx)("div", {
              role: "img",
              className: s()(el.i1, L),
              "aria-label": S.intl.string(S.t.ayozFl),
              children: (0, l.jsx)(o.M, { children: em }),
          });
}
