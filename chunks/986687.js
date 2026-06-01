a.d(i, { A: () => en });
var l = a(627968),
    r = a(64700),
    n = a(503698),
    s = a.n(n),
    t = a(17928),
    d = a(778712),
    o = a(247928),
    u = a(480335),
    c = a(361628),
    m = a(744808),
    g = a(875741),
    p = a(999291),
    h = a(101928),
    v = a(854627),
    y = a(946356),
    A = a(983495),
    x = a(696451),
    P = a(919395),
    f = a(97808),
    j = a(133171),
    b = a(939249),
    I = a(403581),
    C = a(922016),
    w = a(22231),
    N = a(688810),
    D = a(562819),
    T = a(290863),
    k = a(19575),
    O = a(980707),
    S = a(477782),
    U = a(375708);
let B = (e) => {
    let { onChangeAvatar: i, onChangeAvatarDecoration: a, onClose: r } = e;
    return (0, l.jsxs)(O.W, {
        "data-menu-migrated": !0,
        onClose: r,
        onSelect: void 0,
        navId: "user-settings-change-avatar",
        "aria-label": U.intl.string(U.t.ldIeAd),
        children: [
            (0, l.jsx)(S.Dr, { id: "change-avatar", action: i, label: U.intl.string(U.t["4OynCD"]) }),
            (0, l.jsx)(S.Dr, { id: "change-avatar-decoration", action: a, label: U.intl.string(U.t.BVcYCx) }),
        ],
    });
};
var V = a(252732),
    _ = a(339984),
    z = a(430770);
let E = k.Ay.getEnableHardwareAcceleration() ? f.Js : f.eu;
function R(e) {
    let {
            user: i,
            guild: a,
            displayProfile: n,
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
        { analyticsLocations: x, newestAnalyticsLocation: P } = (0, N.Ay)(),
        f = (0, t.bG)([T.A], () => T.A.getStatus(i.id)),
        k = null == a || n?.canUsePremiumProfileCustomization || o,
        O = (0, l.jsx)(E, {
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
        ? (0, l.jsx)("div", { className: z.my, children: O })
        : k
          ? (0, l.jsx)(C.Y, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, l.jsx)(B, {
                        onClose: i,
                        onChangeAvatar: () =>
                            (0, V.XD)({ uploadType: _.HL.AVATAR, guildId: a?.id, analyticsSource: P, isTryItOut: v }),
                        onChangeAvatarDecoration: () => {
                            (0, D.L)({ guild: null == a ? void 0 : a, analyticsLocations: x });
                        },
                    });
                },
                children: (e) =>
                    (0, l.jsxs)(b.D, {
                        ...e,
                        innerRef: A,
                        className: s()(z.my, z.vk),
                        children: [
                            O,
                            (0, l.jsx)(w.R, { size: "custom", className: z.QY, width: 20, height: 20, color: "white" }),
                        ],
                    }),
            })
          : (0, l.jsxs)(b.D, {
                onClick: y,
                className: s()(z.my, z.vk),
                children: [
                    O,
                    (0, l.jsx)(I.t, { size: "custom", className: z.QY, width: 20, height: 20, color: "white" }),
                ],
            });
}
var L = a(534514),
    G = a(702211),
    F = a(915614),
    M = a(996988),
    Y = a(662177);
function Z(e) {
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
        { newestAnalyticsLocation: c } = (0, N.Ay)(),
        m = n || a?.canUsePremiumProfileCustomization || !1,
        g = m ? w.R : I.t,
        p = (0, G.b)(m);
    return (0, l.jsx)(F.A, {
        user: i,
        displayProfile: a,
        guildId: r,
        themeType: M.d.POPOUT,
        pendingBanner: s,
        pendingAccentColor: t,
        canUsePremiumProfileCustomization: n,
        children:
            !o &&
            (0, l.jsxs)(b.D, {
                onClick: () => {
                    m || p
                        ? (0, V.XD)({ uploadType: _.HL.BANNER, analyticsSource: c, guildId: r, isTryItOut: d })
                        : u?.();
                },
                className: Y.v,
                children: [
                    (0, l.jsx)(g, { size: "xs", color: "white" }),
                    (0, l.jsx)(L.D, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: m || p ? U.intl.string(U.t.N0bC3P) : U.intl.string(U.t.O1sT5v),
                    }),
                ],
            }),
    });
}
var H = a(685073),
    q = a(328296),
    Q = a(878555),
    W = a(442228),
    X = a(192867),
    J = a(351906),
    $ = a(656884);
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
            pendingDisplayNameStyles: g,
            pendingPrimaryGuildId: p,
            hideBioSection: h,
            shouldOpenBadgeTooltip: v,
        } = e,
        y = (0, t.bG)([x.Ay], () => (null == r ? null : x.Ay.getMember(r.id, i.id))),
        A = (0, t.bG)([J.A], () => J.A.hidePersonalInformation),
        P = a?.getPreviewBio(o),
        f = u ?? a?.pronouns,
        j = (0, V.eh)({ pendingNickname: s, pendingGlobalName: d, user: i, guildMember: y }),
        b = (0, H.gS)(p);
    return (0, l.jsxs)("div", {
        className: $.rf,
        inert: !0,
        children: [
            (0, l.jsx)(Q.Ay, {
                user: i,
                guildId: r?.id,
                displayName: j,
                pendingDisplayNameStyles: g,
                usernameIcon: (() => {
                    if (null != y) {
                        if (null !== n && (null != y.avatar || null != n))
                            return (0, l.jsx)(X.A, { user: i, nickname: j });
                    }
                })(),
                pronouns: f,
                primaryGuild: b,
                trailing: (0, l.jsx)(q.A, {
                    displayProfile: a,
                    themeType: M.d.POPOUT,
                    pendingLegacyUsernameDisabled: c,
                    pendingBadges: m,
                    shouldOpenBadgeTooltip: v,
                }),
            }),
            !h &&
                null != P &&
                "" !== P &&
                (0, l.jsx)(W.A, { user: i, bio: P, hidePersonalInformation: A, viewFullBioDisabled: !0 }),
        ],
    });
}
var ee = a(993401),
    ei = a(904290);
function ea(e) {
    let { user: i, hideMessageInput: a, hideExampleButton: r } = e;
    return a
        ? r
            ? null
            : (0, l.jsx)("div", {
                  className: $.qr,
                  children: (0, l.jsx)(ee.FD, {
                      variant: "primary",
                      text: U.intl.string(U.t.hZkfwY),
                      onClick: () => {},
                      fullWidth: !0,
                  }),
              })
        : (0, l.jsx)("div", { className: $.qr, inert: !0, children: (0, l.jsx)(ei.A, { user: i }) });
}
var el = a(652215),
    er = a(641651);
function en(e) {
    let {
            user: i,
            guild: a,
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
            disabledInputs: L = !1,
            hideCustomStatus: G = !1,
            hideBioSection: F = !1,
            hideMessageInput: Y = !0,
            hideProfileFrame: H = !1,
            pendingBadges: q,
            shouldOpenBadgeTooltip: Q,
            hideExampleButton: W = !1,
            interactive: X = !0,
        } = e,
        J = (0, p.Ay)(i.id, a?.id),
        $ = (0, t.bG)([x.Ay], () => (null != a ? x.Ay.getMember(a.id, i.id) : null)),
        ee = (0, P.lw)({
            pendingValue: w,
            userValue: i?.avatarDecoration,
            guildValue: $?.avatarDecoration,
            guildId: a?.id,
        }),
        { avatarSrc: ei, avatarDecorationSrc: en } = (0, v.A)({
            userId: i?.id,
            guildId: a?.id,
            avatarDecorationOverride: ee,
            avatarOverride: C,
            size: d._3.SIZE_80,
            showPending: !0,
        }),
        es = (0, P.lw)({
            pendingValue: k,
            userValue: J?._userProfile?.profileEffect,
            guildValue: J?._guildMemberProfile?.profileEffect,
            guildId: a?.id,
        }),
        et = H
            ? void 0
            : (0, P.lw)({
                  pendingValue: O,
                  userValue: J?._userProfile?.profileFrame,
                  guildValue: J?._guildMemberProfile?.profileFrame,
                  guildId: a?.id,
              }),
        ed = (0, c.A)(et?.skuId, "UserProfilePreview"),
        { profileFrameStyle: eo, profileFrameClassName: eu } = (0, g.A)(et?.skuId),
        { theme: ec, primaryColor: em } = (0, h.A)({ user: i, displayProfile: J, pendingThemeColors: T, isPreview: r }),
        eg = (0, l.jsxs)(y.A, {
            user: i,
            displayProfile: J,
            themeType: M.d.POPOUT,
            pendingThemeColors: T,
            className: s()(er.kL, eu),
            style: eo,
            forceShowPremium: r,
            children: [
                (0, l.jsxs)("div", {
                    className: er.wx,
                    children: [
                        (0, l.jsx)(Z, {
                            user: i,
                            displayProfile: J,
                            guildId: a?.id,
                            canUsePremiumCustomization: r,
                            pendingBanner: f,
                            pendingAccentColor: j,
                            isTryItOut: E,
                            disabledInputs: L,
                            onUpsellClick: () => n?.({ object: el.ZSU.EDIT_PROFILE_BANNER }),
                        }),
                        (0, l.jsx)(R, {
                            user: i,
                            guild: a,
                            displayProfile: J,
                            canUsePremiumCustomization: r,
                            previewAvatar: ei,
                            previewAvatarDecorationSrc: en,
                            previewTheme: ec,
                            previewPrimaryColor: em,
                            className: _,
                            disabledInputs: L,
                            isTryItOut: E,
                            onUpsellClick: () => n?.({ object: el.ZSU.AVATAR }),
                        }),
                        !G && (0, l.jsx)(A.A, { user: i, themeType: M.d.POPOUT, disableToolbar: L }),
                    ],
                }),
                (0, l.jsx)(K, {
                    user: i,
                    displayProfile: J,
                    guild: a,
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
                (0, l.jsx)(ea, { user: i, hideMessageInput: Y, hideExampleButton: W }),
                null != es && (0, l.jsx)(u.A, { skuId: es.skuId }),
                null != ed && (0, l.jsx)(m.A, { frame: ed, className: er.hH }),
            ],
        });
    return X
        ? (0, l.jsx)("div", { className: s()(er.i1, z), children: eg })
        : (0, l.jsx)("div", {
              role: "img",
              className: s()(er.i1, z),
              "aria-label": U.intl.string(U.t.ayozFl),
              children: (0, l.jsx)(o.M, { children: eg }),
          });
}
