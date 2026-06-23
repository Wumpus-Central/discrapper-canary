"use strict";
n.d(t, { A: () => er });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(778712),
    u = n(346055),
    c = n(480335),
    d = n(361628),
    _ = n(744808),
    h = n(999291),
    f = n(101928),
    p = n(854627),
    E = n(946356),
    m = n(983495),
    g = n(696451),
    A = n(919395),
    I = n(97808),
    T = n(133171),
    S = n(939249),
    y = n(403581),
    C = n(922016),
    N = n(22231),
    v = n(688810),
    R = n(562819),
    O = n(290863),
    b = n(19575),
    D = n(980707),
    L = n(477782),
    w = n(375708);
let M = function (e) {
    let { onChangeAvatar: t, onChangeAvatarDecoration: n, onClose: r } = e;
    return (0, i.jsxs)(D.W, {
        "data-menu-migrated": !0,
        onClose: r,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": w.intl.string(w.t.ldIeAd),
        children: [
            (0, i.jsx)(L.Dr, { id: "change-avatar", action: t, label: w.intl.string(w.t["4OynCD"]) }),
            (0, i.jsx)(L.Dr, { id: "change-avatar-decoration", action: n, label: w.intl.string(w.t.BVcYCx) }),
        ],
    });
};
var P = n(252732),
    x = n(339984),
    k = n(430770);
let U = b.Ay.getEnableHardwareAcceleration() ? I.Js : I.eu;
function G(e) {
    let {
            user: t,
            guild: n,
            displayProfile: s,
            canUsePremiumCustomization: u,
            previewAvatar: c,
            previewAvatarDecorationSrc: d,
            previewTheme: _,
            previewPrimaryColor: h,
            className: f,
            disabledInputs: p,
            isTryItOut: E,
            onUpsellClick: m,
        } = e,
        g = r.useRef(null),
        { analyticsLocations: A, newestAnalyticsLocation: I } = (0, v.Ay)(),
        b = (0, o.bG)([O.A], () => O.A.getStatus(t.id)),
        D = null == n || s?.canUsePremiumProfileCustomization || u,
        L = (0, i.jsx)(U, {
            src: c,
            avatarDecoration: d,
            imageClassName: a()(f, { [k.Lw]: !p }),
            size: l._3.SIZE_80,
            "aria-label": t.username,
            status: b,
            statusTooltip: !1,
            statusBackdropColor: null != h ? (0, T.C$)(_) : void 0,
        });
    return p
        ? (0, i.jsx)("div", { className: k.my, children: L })
        : D
          ? (0, i.jsx)(C.Y, {
                targetElementRef: g,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsx)(M, {
                        onClose: t,
                        onChangeAvatar: () =>
                            (0, P.XD)({ uploadType: x.HL.AVATAR, guildId: n?.id, analyticsSource: I, isTryItOut: E }),
                        onChangeAvatarDecoration: () => {
                            (0, R.L)({ guild: null == n ? void 0 : n, analyticsLocations: A });
                        },
                    });
                },
                children: (e) =>
                    (0, i.jsxs)(S.D, {
                        ...e,
                        innerRef: g,
                        className: a()(k.my, k.vk),
                        children: [
                            L,
                            (0, i.jsx)(N.R, { size: "custom", className: k.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, i.jsxs)(S.D, {
                onClick: m,
                className: a()(k.my, k.vk),
                children: [
                    L,
                    (0, i.jsx)(y.t, { size: "custom", className: k.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
var F = n(534514),
    V = n(702211),
    B = n(915614),
    j = n(996988),
    H = n(662177);
function Y(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: r,
            canUsePremiumCustomization: s,
            pendingBanner: a,
            pendingAccentColor: o,
            isTryItOut: l,
            disabledInputs: u,
            onUpsellClick: c,
        } = e,
        { newestAnalyticsLocation: d } = (0, v.Ay)(),
        _ = s || n?.canUsePremiumProfileCustomization || !1,
        h = _ ? N.R : y.t,
        f = (0, V.b)(_);
    return (0, i.jsx)(B.A, {
        user: t,
        displayProfile: n,
        guildId: r,
        themeType: j.d.POPOUT,
        pendingBanner: a,
        pendingAccentColor: o,
        canUsePremiumProfileCustomization: s,
        children:
            !u &&
            (0, i.jsxs)(S.D, {
                onClick: () => {
                    _ || f
                        ? (0, P.XD)({ uploadType: x.HL.BANNER, analyticsSource: d, guildId: r, isTryItOut: l })
                        : c?.();
                },
                className: H.v,
                children: [
                    (0, i.jsx)(h, { size: "xs", color: "white" }),
                    (0, i.jsx)(F.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: _ || f ? w.intl.string(w.t.N0bC3P) : w.intl.string(w.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var W = n(685073),
    K = n(795873),
    $ = n(878555),
    z = n(442228),
    q = n(192867),
    Z = n(351906),
    X = n(656884);
function Q(e) {
    let {
            user: t,
            displayProfile: n,
            guild: r,
            pendingAvatar: s,
            pendingNickname: a,
            pendingGlobalName: l,
            pendingBio: u,
            pendingPronouns: c,
            pendingLegacyUsernameDisabled: d,
            pendingBadges: _,
            pendingDisplayNameStyles: h,
            pendingPrimaryGuildId: f,
            hideBioSection: p,
            shouldOpenBadgeTooltip: E,
        } = e,
        m = (0, o.bG)([g.Ay], () => (null == r ? null : g.Ay.getMember(r.id, t.id))),
        A = (0, o.bG)([Z.A], () => Z.A.hidePersonalInformation),
        I = n?.getPreviewBio(u),
        T = c ?? n?.pronouns,
        S = (0, P.eh)({ pendingNickname: a, pendingGlobalName: l, user: t, guildMember: m }),
        y = (0, W.gS)(f);
    return (0, i.jsxs)("div", {
        className: X.rf,
        inert: !0,
        children: [
            (0, i.jsx)($.Ay, {
                user: t,
                guildId: r?.id,
                displayName: S,
                pendingDisplayNameStyles: h,
                usernameIcon: (() => {
                    if (null != m) {
                        if (null !== s && (null != m.avatar || null != s))
                            return (0, i.jsx)(q.A, { user: t, nickname: S });
                    }
                })(),
                pronouns: T,
                primaryGuild: y,
                trailing: (0, i.jsx)(K.A, {
                    displayProfile: n,
                    themeType: j.d.POPOUT,
                    pendingLegacyUsernameDisabled: d,
                    pendingBadges: _,
                    shouldOpenBadgeTooltip: E,
                }),
            }),
            !p &&
                null != I &&
                "" !== I &&
                (0, i.jsx)(z.A, { userId: t.id, userBio: I, hidePersonalInformation: A, viewFullBioDisabled: !0 }),
        ],
    });
}
var J = n(993401),
    ee = n(904290);
function et(e) {
    let { user: t, hideMessageInput: n, hideExampleButton: r } = e;
    return n
        ? r
            ? null
            : (0, i.jsx)("div", {
                  className: X.qr,
                  children: (0, i.jsx)(J.FD, {
                      variant: "primary",
                      text: w.intl.string(w.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, i.jsx)("div", { className: X.qr, inert: !0, children: (0, i.jsx)(ee.A, { user: t }) });
}
var en = n(652215),
    ei = n(641651);
function er(e) {
    let {
            user: t,
            guild: n,
            canUsePremiumCustomization: r,
            onUpsellClick: s,
            pendingBanner: I,
            pendingAccentColor: T,
            pendingBio: S,
            pendingPronouns: y,
            pendingAvatar: C,
            pendingAvatarDecoration: N,
            pendingNickname: v,
            pendingGlobalName: R,
            pendingThemeColors: O,
            pendingProfileEffect: b,
            profileEffectRestartKey: D,
            pendingProfileFrame: L,
            pendingLegacyUsernameDisabled: M,
            pendingDisplayNameStyles: P,
            pendingPrimaryGuildId: x,
            className: k,
            avatarClassName: U,
            containerClassName: F,
            isTryItOut: V = !1,
            disabledInputs: B = !1,
            hideCustomStatus: H = !1,
            hideBioSection: W = !1,
            hideMessageInput: K = !0,
            hideProfileFrame: $ = !1,
            pendingBadges: z,
            shouldOpenBadgeTooltip: q,
            hideExampleButton: Z = !1,
            interactive: X = !0,
        } = e,
        J = (0, h.Ay)(t.id, n?.id),
        ee = (0, o.bG)([g.Ay], () => (null != n ? g.Ay.getMember(n.id, t.id) : null)),
        er = (0, A.lw)({
            pendingValue: N,
            userValue: t?.avatarDecoration,
            guildValue: ee?.avatarDecoration,
            guildId: n?.id,
        }),
        { avatarSrc: es, avatarDecorationSrc: ea } = (0, p.A)({
            userId: t?.id,
            guildId: n?.id,
            avatarDecorationOverride: er,
            avatarOverride: C,
            size: l._3.SIZE_80,
            showPending: !0,
        }),
        eo = (0, A.lw)({
            pendingValue: b,
            userValue: J?._userProfile?.profileEffect,
            guildValue: J?._guildMemberProfile?.profileEffect,
            guildId: n?.id,
        }),
        el = $
            ? void 0
            : (0, A.lw)({
                  pendingValue: L,
                  userValue: J?._userProfile?.profileFrame,
                  guildValue: J?._guildMemberProfile?.profileFrame,
                  guildId: n?.id,
              }),
        eu = (0, d.A)(el?.skuId, "UserProfilePreview"),
        { theme: ec, primaryColor: ed } = (0, f.A)({ user: t, displayProfile: J, pendingThemeColors: O, isPreview: r }),
        e_ = (0, i.jsxs)(E.A, {
            user: t,
            displayProfile: J,
            themeType: j.d.POPOUT,
            pendingThemeColors: O,
            profileFrameSkuIdOverride: el?.skuId ?? null,
            className: a()(ei.kL, k),
            forceShowPremium: r,
            children: [
                (0, i.jsxs)("div", {
                    className: ei.wx,
                    children: [
                        (0, i.jsx)(Y, {
                            user: t,
                            displayProfile: J,
                            guildId: n?.id,
                            canUsePremiumCustomization: r,
                            pendingBanner: I,
                            pendingAccentColor: T,
                            isTryItOut: V,
                            disabledInputs: B,
                            onUpsellClick: () => s?.({ object: en.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, i.jsx)(G, {
                            user: t,
                            guild: n,
                            displayProfile: J,
                            canUsePremiumCustomization: r,
                            previewAvatar: es,
                            previewAvatarDecorationSrc: ea,
                            previewTheme: ec,
                            previewPrimaryColor: ed,
                            className: U,
                            disabledInputs: B,
                            isTryItOut: V,
                            onUpsellClick: () => s?.({ object: en.ZSU.AVATAR }),
                        }),
                        !H && (0, i.jsx)(m.A, { user: t, themeType: j.d.POPOUT, disableToolbar: B }),
                    ],
                }),
                (0, i.jsx)(Q, {
                    user: t,
                    displayProfile: J,
                    guild: n,
                    pendingAvatar: C,
                    pendingNickname: v,
                    pendingGlobalName: R,
                    pendingBio: S,
                    pendingPronouns: y,
                    pendingLegacyUsernameDisabled: M,
                    pendingDisplayNameStyles: P,
                    pendingPrimaryGuildId: x,
                    hideBioSection: W,
                    pendingBadges: z,
                    shouldOpenBadgeTooltip: q,
                }),
                (0, i.jsx)(et, { user: t, hideMessageInput: K, hideExampleButton: Z }),
                null != eo && (0, i.jsx)(c.A, { skuId: eo.skuId, restartKey: D }),
                null != eu && (0, i.jsx)(_.A, { frame: eu, className: ei.hH }),
            ],
        });
    return X
        ? (0, i.jsx)("div", { className: a()(ei.i1, F), children: e_ })
        : (0, i.jsx)("div", {
              role: "img",
              className: a()(ei.i1, F),
              "aria-label": w.intl.string(w.t.ayozFl),
              children: (0, i.jsx)(u.M, { children: e_ }),
          });
}
