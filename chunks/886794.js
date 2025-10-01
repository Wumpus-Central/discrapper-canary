t.d(n, { Z: () => C }), t(388685);
var l = t(951288),
    i = t(647438),
    r = t(481060),
    o = t(727637),
    s = t(100527),
    a = t(906732),
    c = t(313201),
    d = t(680295),
    u = t(5192),
    m = t(785717),
    p = t(687158),
    f = t(899007),
    h = t(648052),
    j = t(867176),
    x = t(280885),
    v = t(900927),
    g = t(678738),
    b = t(502762),
    y = t(530),
    O = t(679332),
    I = t(544989),
    Z = t(228168),
    P = t(981631),
    N = t(671955),
    T = t(388032),
    E = t(526594),
    A = t(438160),
    S = t(909735);
function C(e) {
    var n;
    let {
            user: t,
            guildId: C,
            channelId: _,
            messageId: w,
            roleId: D,
            sessionId: R,
            transitionState: L,
            openedAt: M,
            onClose: U,
            sourceAnalyticsLocations: k = [],
        } = e,
        B = C === P.ME ? void 0 : C,
        F = (0, p.ZP)(t.id, B),
        V = u.ZP.getName(B, _, t),
        G = (0, c.Dt)(),
        { analyticsLocations: z } = (0, a.ZP)([...k, s.Z.USER_PROFILE_MODAL]),
        K = (0, m.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: R,
            guildId: B,
            channelId: _,
            messageId: w,
            roleId: D,
        }),
        W = i.useRef(null),
        Y = (0, o.Z)(W);
    return (0, l.jsx)(a.Gt, {
        value: z,
        children: (0, l.jsx)(m.Mt, {
            value: K,
            openedAt: M,
            fetchStartedAt: null == F ? void 0 : F.fetchStartedAt,
            fetchEndedAt: null == F ? void 0 : F.fetchEndedAt,
            isLoaded: null == F ? void 0 : F.isLoaded,
            children: (0, l.jsxs)(r.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: E.root,
                hideShadow: !0,
                "aria-labelledby": G,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(r.y5t, {
                        component: (0, l.jsx)(r.nn4, {
                            children: (0, l.jsx)(r.H, {
                                id: G,
                                children: T.intl.format(T.t.KRe1Fh, { name: V }),
                            }),
                        }),
                        children: (0, l.jsxs)(b.Z, {
                            user: t,
                            displayProfile: F,
                            themeType: N.l.MODAL,
                            ref: (null == F ? void 0 : F.profileEffect) != null ? W : void 0,
                            children: [
                                (0, l.jsx)(I.Z, { children: (0, l.jsx)(O.Z, { user: t }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(j.Z, {
                                            user: t,
                                            displayProfile: F,
                                            themeType: N.l.MODAL,
                                        }),
                                        (0, l.jsx)("div", {
                                            className: E.headerInner,
                                            children: (0, l.jsx)(f.Z, {
                                                user: t,
                                                displayProfile: F,
                                                guildId: B,
                                                channelId: _,
                                                themeType: N.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: E.body,
                                    children: [
                                        (0, l.jsx)(y.Z, {
                                            className: E.username,
                                            user: t,
                                            nickname: V,
                                            pronouns: null == F ? void 0 : F.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, l.jsx)(h.Z, {
                                                displayProfile: F,
                                                themeType: N.l.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: S.container,
                                            children: [
                                                (0, l.jsx)(r.njP, {
                                                    className: S.tabBar,
                                                    type: "top",
                                                    selectedItem: Z.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, l.jsx)(
                                                        r.njP.Item,
                                                        {
                                                            className: S.tabBarItem,
                                                            id: Z.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJS),
                                                            children: (0, l.jsx)(r.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJS),
                                                            }),
                                                        },
                                                        Z.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(r.zJl, {
                                                    fade: !0,
                                                    className: A.scroller,
                                                    children: [
                                                        (0, l.jsx)(x.Z, {
                                                            userId: t.id,
                                                            userBio: null == F ? void 0 : F.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(g.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, l.jsx)(v.Z, {
                                                                userId: t.id,
                                                                guildId: B,
                                                                tooltipDelay: Z.vB,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    (null == F ? void 0 : F.profileEffect) != null &&
                        (0, l.jsx)(d.Z, {
                            profileEffectId: null == F || null == (n = F.profileEffect) ? void 0 : n.id,
                            isHovering: Y,
                        }),
                ],
            }),
        }),
    });
}
