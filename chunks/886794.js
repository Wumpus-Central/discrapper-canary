t.d(n, { Z: () => C }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(481060),
    r = t(100527),
    a = t(906732),
    c = t(313201),
    s = t(104505),
    d = t(680295),
    u = t(5192),
    f = t(785717),
    m = t(687158),
    p = t(899007),
    x = t(648052),
    h = t(867176),
    b = t(280885),
    v = t(900927),
    j = t(678738),
    g = t(502762),
    I = t(530),
    y = t(679332),
    Z = t(544989),
    O = t(228168),
    N = t(981631),
    T = t(671955),
    A = t(388032),
    P = t(968847),
    E = t(199912),
    _ = t(9113);
function C(e) {
    var n;
    let {
            user: t,
            guildId: C,
            channelId: S,
            messageId: w,
            roleId: D,
            sessionId: L,
            transitionState: R,
            openedAt: M,
            onClose: B,
            sourceAnalyticsLocations: U = [],
        } = e,
        k = C === N.ME ? void 0 : C,
        G = (0, m.ZP)(t.id, k),
        V = u.ZP.getName(k, S, t),
        F = (0, c.Dt)(),
        { analyticsLocations: W } = (0, a.ZP)([...U, r.Z.USER_PROFILE_MODAL]),
        z = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: k,
            channelId: S,
            messageId: w,
            roleId: D,
        }),
        H = i.useRef(null),
        Y = (0, s.X)(H);
    return (0, l.jsx)(a.Gt, {
        value: W,
        children: (0, l.jsx)(f.Mt, {
            value: z,
            openedAt: M,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsxs)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: R,
                className: P.root,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(o.y5t, {
                        component: (0, l.jsx)(o.nn4, {
                            children: (0, l.jsx)(o.H, {
                                id: F,
                                children: A.intl.format(A.t.KRe1Fk, { name: V }),
                            }),
                        }),
                        children: (0, l.jsxs)(g.Z, {
                            user: t,
                            displayProfile: G,
                            themeType: T.l.MODAL,
                            ref: (null == G ? void 0 : G.profileEffect) != null ? H : void 0,
                            children: [
                                (0, l.jsx)(Z.Z, { children: (0, l.jsx)(y.Z, { user: t }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            user: t,
                                            displayProfile: G,
                                            themeType: T.l.MODAL,
                                        }),
                                        (0, l.jsx)("div", {
                                            className: P.headerInner,
                                            children: (0, l.jsx)(p.Z, {
                                                user: t,
                                                displayProfile: G,
                                                guildId: k,
                                                channelId: S,
                                                themeType: T.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: P.body,
                                    children: [
                                        (0, l.jsx)(I.Z, {
                                            className: P.username,
                                            user: t,
                                            guildId: k,
                                            nickname: V,
                                            pronouns: null == G ? void 0 : G.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, l.jsx)(x.Z, {
                                                displayProfile: G,
                                                themeType: T.l.MODAL,
                                                onClose: B,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: _.container,
                                            children: [
                                                (0, l.jsx)(o.njP, {
                                                    className: _.tabBar,
                                                    type: "top",
                                                    selectedItem: O.oh.BOT_INFO,
                                                    onItemSelect: N.dG4,
                                                    children: (0, l.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: _.tabBarItem,
                                                            id: O.oh.BOT_INFO,
                                                            "aria-label": A.intl.string(A.t.jGoPJT),
                                                            children: (0, l.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: A.intl.string(A.t.jGoPJT),
                                                            }),
                                                        },
                                                        O.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: E.scroller,
                                                    children: [
                                                        (0, l.jsx)(b.Z, {
                                                            userId: t.id,
                                                            userBio: null == G ? void 0 : G.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(j.Z, {
                                                            heading: A.intl.string(A.t["A//N4k"]),
                                                            children: (0, l.jsx)(v.Z, {
                                                                userId: t.id,
                                                                guildId: k,
                                                                tooltipDelay: O.vB,
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
                    (null == G ? void 0 : G.profileEffect) != null &&
                        (0, l.jsx)(d.Z, {
                            skuId: null == G || null == (n = G.profileEffect) ? void 0 : n.skuId,
                            isHovering: Y,
                        }),
                ],
            }),
        }),
    });
}
