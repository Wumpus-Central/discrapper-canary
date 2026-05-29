l.d(i, { A: () => en });
var a = l(627968),
    r = l(64700),
    n = l(503698),
    s = l.n(n),
    t = l(17928),
    d = l(778712),
    o = l(247928),
    u = l(480335),
    c = l(361628),
    m = l(744808),
    g = l(875741),
    p = l(999291),
    h = l(101928),
    v = l(854627),
    x = l(946356),
    y = l(983495),
    A = l(696451),
    P = l(919395),
    f = l(97808),
    j = l(133171),
    b = l(939249),
    I = l(403581),
    C = l(922016),
    w = l(22231),
    N = l(688810),
    D = l(562819),
    T = l(290863),
    k = l(19575),
    O = l(980707),
    S = l(477782),
    U = l(375708);
let B = (e) => {
    let { onChangeAvatar: i, onChangeAvatarDecoration: l, onClose: r } = e;
    return (0, a.jsxs)(O.W, {
        "data-menu-migrated": !0,
        onClose: r,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": U.intl.string(U.t.ldIeAd),
        children: [
            (0, a.jsx)(S.Dr, { id: "change-avatar", action: i, label: U.intl.string(U.t["4OynCD"]) }),
            (0, a.jsx)(S.Dr, { id: "change-avatar-decoration", action: l, label: U.intl.string(U.t.BVcYCx) }),
        ],
    });
};
var V = l(252732),
    _ = l(339984),
    z = l(430770);
let E = k.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu;
function R(e) {
    let {
            user: i,
            guild: l,
            displayProfile: n,
            canUsePremiumCustomization: o,
            previewAvatar: u,
            previewAvatarDecorationSrc: c,
            previewTheme: m,
            previewPrimaryColor: g,
            className: p,
            disabledInputs: h,
            isTryItOut: v,
            onUpsellClick: x,
        } = e,
        y = r.useRef(null),
        { analyticsLocations: A, newestAnalyticsLocation: P } = (0, N.Ay)(),
        f = (0, t.bG)([T.A], () => T.A.getStatus(i.id)),
        k = null == l || n?.canUsePremiumProfileCustomization || o,
        O = (0, a.jsx)(E, {
            src: u,
            avatarDecoration: c,
            imageClassName: s()(p, { [z.Lw]: !h }),
            size: d._3.SIZE_80,
            "aria-label": i.username,
            status: f,
            statusTooltip: !1,
            statusBackdropColor: null != g ? (0, j.C$)(m) : void 0,
        });
    return h
        ? (0, a.jsx)("div", { className: z.my, children: O })
        : k
          ? (0, a.jsx)(C.Y, {
                targetElementRef: y,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, a.jsx)(B, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, V.XD)({ uploadType: _.HL.AVATAR, guildId: l?.id, analyticsSource: P, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, D.L)({ guild: null == l ? void 0 : l, analyticsLocations: A });
                        },
                    });
                },
                children: (e) =>
                    (0, a.jsxs)(b.D, {
                        ...e,
                        innerRef: y,
                        className: s()(z.my, z.vk),
                        children: [
                            O,
                            (0, a.jsx)(w.R, { size: "custom", className: z.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, a.jsxs)(b.D, {
                onClick: x,
                className: s()(z.my, z.vk),
                children: [
                    O,
                    (0, a.jsx)(I.t, { size: "custom", className: z.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
var G = l(534514),
    L = l(702211),
    F = l(915614),
    M = l(996988),
    Y = l(662177);
function Z(e) {
    let {
            user: i,
            displayProfile: l,
            guildId: r,
            canUsePremiumCustomization: n,
            pendingBanner: s,
            pendingAccentColor: t,
            isTryItOut: d,
            disabledInputs: o,
            onUpsellClick: u,
        } = e,
        { newestAnalyticsLocation: c } = (0, N.Ay)(),
        m = n || l?.canUsePremiumProfileCustomization || !1,
        g = m ? w.R : I.t,
        p = (0, L.b)(m);
    return (0, a.jsx)(F.A, {
        user: i,
        displayProfile: l,
        guildId: r,
        themeType: M.d.POPOUT,
        pendingBanner: s,
        pendingAccentColor: t,
        canUsePremiumProfileCustomization: n,
        children:
            !o &&
            (0, a.jsxs)(b.D, {
                onClick: () => {
                    m || p
                        ? (0, V.XD)({ uploadType: _.HL.BANNER, analyticsSource: c, guildId: r, isTryItOut: d })
                        : u?.();
                },
                className: Y.v,
                children: [
                    (0, a.jsx)(g, { size: "xs", color: "white" }),
                    (0, a.jsx)(G.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: m || p ? U.intl.string(U.t.N0bC3P) : U.intl.string(U.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var H = l(685073),
    q = l(328296),
    Q = l(878555),
    W = l(442228),
    X = l(192867),
    J = l(351906),
    $ = l(656884);
function K(e) {
    let {
            user: i,
            displayProfile: l,
            guild: r,
            pendingAvatar: n,
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
        x = (0, t.bG)([A.Ay], () => (null == r ? null : A.Ay.getMember(r.id, i.id))),
        y = (0, t.bG)([J.A], () => J.A.hidePersonalInformation),
        P = l?.getPreviewBio(o),
        f = u ?? l?.pronouns,
        j = (0, V.eh)({ pendingNickname: s, pendingGlobalName: d, user: i, guildMember: x }),
        b = (0, H.gS)(p);
    return (0, a.jsxs)("div", {
        className: $.rf,
        children: [
            (0, a.jsx)(Q.Ay, {
                user: i,
                guildId: r?.id,
                displayName: j,
                pendingDisplayNameStyles: g,
                usernameIcon: (() => {
                    if (null != x) {
                        if (null !== n && (null != x.avatar || null != n))
                            return (0, a.jsx)(X.A, { user: i, nickname: j });
                    }
                })(),
                pronouns: f,
                primaryGuild: b,
                disableGuildProfile: !0,
                trailing: (0, a.jsx)("div", {
                    inert: !0,
                    children: (0, a.jsx)(q.A, {
                        displayProfile: l,
                        themeType: M.d.POPOUT,
                        pendingLegacyUsernameDisabled: c,
                        pendingBadges: m,
                        shouldOpenBadgeTooltip: v,
                    }),
                }),
            }),
            !h &&
                null != P &&
                "" !== P &&
                (0, a.jsx)("div", {
                    inert: !0,
                    children: (0, a.jsx)(W.A, { user: i, bio: P, hidePersonalInformation: y, viewFullBioDisabled: !0 }),
                }),
        ],
    });
}
var ee = l(993401),
    ei = l(904290);
function el(e) {
    let { user: i, hideMessageInput: l, hideExampleButton: r } = e;
    return l
        ? r
            ? null
            : (0, a.jsx)("div", {
                  className: $.qr,
                  children: (0, a.jsx)(ee.FD, {
                      variant: "primary",
                      text: U.intl.string(U.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, a.jsx)("div", { className: $.qr, inert: !0, children: (0, a.jsx)(ei.A, { user: i }) });
}
var ea = l(652215),
    er = l(641651);
function en(e) {
    let {
            user: i,
            guild: l,
            canUsePremiumCustomization: r,
            onUpsellClick: n,
            pendingBanner: f,
            pendingAccentColor: j,
            pendingBio: b,
            pendingPronouns: I,
            pendingAvatar: C,
            pendingAvatarDecoration: w,
            pendingNickname: N,
            pendingGlobalName: D,
            pendingThemeColors: T,
            pendingProfileEffect: k,
            pendingProfileFrame: O,
            pendingLegacyUsernameDisabled: S,
            pendingDisplayNameStyles: B,
            pendingPrimaryGuildId: V,
            avatarClassName: _,
            containerClassName: z,
            isTryItOut: E = !1,
            disabledInputs: G = !1,
            hideCustomStatus: L = !1,
            hideBioSection: F = !1,
            hideMessageInput: Y = !0,
            hideProfileFrame: H = !1,
            pendingBadges: q,
            shouldOpenBadgeTooltip: Q,
            hideExampleButton: W = !1,
            interactive: X = !0,
        } = e,
        J = (0, p.Ay)(i.id, l?.id),
        $ = (0, t.bG)([A.Ay], () => (null != l ? A.Ay.getMember(l.id, i.id) : null)),
        ee = (0, P.lw)({
            pendingValue: w,
            userValue: i?.avatarDecoration,
            guildValue: $?.avatarDecoration,
            guildId: l?.id,
        }),
        { avatarSrc: ei, avatarDecorationSrc: en } = (0, v.A)({
            userId: i?.id,
            guildId: l?.id,
            avatarDecorationOverride: ee,
            avatarOverride: C,
            size: d._3.SIZE_80,
            showPending: !0,
        }),
        es = (0, P.lw)({
            pendingValue: k,
            userValue: J?._userProfile?.profileEffect,
            guildValue: J?._guildMemberProfile?.profileEffect,
            guildId: l?.id,
        }),
        et = H
            ? void 0
            : (0, P.lw)({
                  pendingValue: O,
                  userValue: J?._userProfile?.profileFrame,
                  guildValue: J?._guildMemberProfile?.profileFrame,
                  guildId: l?.id,
              }),
        ed = (0, c.A)(et?.skuId, "UserProfilePreview"),
        { profileFrameStyle: eo, profileFrameClassName: eu } = (0, g.A)(et?.skuId),
        { theme: ec, primaryColor: em } = (0, h.A)({ user: i, displayProfile: J, pendingThemeColors: T, isPreview: r }),
        eg = (0, a.jsxs)(x.A, {
            user: i,
            displayProfile: J,
            themeType: M.d.POPOUT,
            pendingThemeColors: T,
            className: s()(er.kL, eu),
            style: eo,
            forceShowPremium: r,
            children: [
                (0, a.jsxs)("div", {
                    className: er.wx,
                    children: [
                        (0, a.jsx)(Z, {
                            user: i,
                            displayProfile: J,
                            guildId: l?.id,
                            canUsePremiumCustomization: r,
                            pendingBanner: f,
                            pendingAccentColor: j,
                            isTryItOut: E,
                            disabledInputs: G,
                            onUpsellClick: () => n?.({ object: ea.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, a.jsx)(R, {
                            user: i,
                            guild: l,
                            displayProfile: J,
                            canUsePremiumCustomization: r,
                            previewAvatar: ei,
                            previewAvatarDecorationSrc: en,
                            previewTheme: ec,
                            previewPrimaryColor: em,
                            className: _,
                            disabledInputs: G,
                            isTryItOut: E,
                            onUpsellClick: () => n?.({ object: ea.ZSU.AVATAR }),
                        }),
                        !L && (0, a.jsx)(y.A, { user: i, themeType: M.d.POPOUT, disableToolbar: G }),
                    ],
                }),
                (0, a.jsx)(K, {
                    user: i,
                    displayProfile: J,
                    guild: l,
                    pendingAvatar: C,
                    pendingNickname: N,
                    pendingGlobalName: D,
                    pendingBio: b,
                    pendingPronouns: I,
                    pendingLegacyUsernameDisabled: S,
                    pendingDisplayNameStyles: B,
                    pendingPrimaryGuildId: V,
                    hideBioSection: F,
                    pendingBadges: q,
                    shouldOpenBadgeTooltip: Q,
                }),
                (0, a.jsx)(el, { user: i, hideMessageInput: Y, hideExampleButton: W }),
                null != es && (0, a.jsx)(u.A, { skuId: es.skuId }),
                null != ed && (0, a.jsx)(m.A, { frame: ed, className: er.hH }),
            ],
        });
    return X
        ? (0, a.jsx)("div", { className: s()(er.i1, z), children: eg })
        : (0, a.jsx)("div", {
              role: "img",
              className: s()(er.i1, z),
              "aria-label": U.intl.string(U.t.ayozFl),
              children: (0, a.jsx)(o.M, { children: eg }),
          });
}
