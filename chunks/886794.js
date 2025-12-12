t.d(n, { Z: () => C }), t(388685);
var l = t(54381),
    i = t(473749),
    o = t(481060),
    r = t(100527),
    s = t(906732),
    a = t(313201),
    c = t(104505),
    d = t(680295),
    u = t(5192),
    m = t(785717),
    f = t(687158),
    p = t(899007),
    x = t(648052),
    h = t(867176),
    v = t(280885),
    j = t(900927),
    g = t(678738),
    b = t(502762),
    I = t(530),
    y = t(679332),
    Z = t(544989),
    _ = t(228168),
    O = t(981631),
    N = t(671955),
    T = t(388032),
    A = t(673517),
    P = t(54966),
    E = t(602727);
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
        k = C === O.ME ? void 0 : C,
        G = (0, f.ZP)(t.id, k),
        V = u.ZP.getName(k, S, t),
        F = (0, a.Dt)(),
        { analyticsLocations: W } = (0, s.ZP)([...U, r.Z.USER_PROFILE_MODAL]),
        z = (0, m.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: k,
            channelId: S,
            messageId: w,
            roleId: D,
        }),
        H = i.useRef(null),
        Y = (0, c.X)(H);
    return (0, l.jsx)(s.Gt, {
        value: W,
        children: (0, l.jsx)(m.Mt, {
            value: z,
            openedAt: M,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsxs)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: R,
                className: A.root,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, l.jsx)(o.y5t, {
                        component: (0, l.jsx)(o.nn4, {
                            children: (0, l.jsx)(o.H, {
                                id: F,
                                children: T.intl.format(T.t.KRe1Fk, { name: V }),
                            }),
                        }),
                        children: (0, l.jsxs)(b.Z, {
                            user: t,
                            displayProfile: G,
                            themeType: N.l.MODAL,
                            ref: (null == G ? void 0 : G.profileEffect) != null ? H : void 0,
                            children: [
                                (0, l.jsx)(Z.Z, { children: (0, l.jsx)(y.Z, { user: t }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            user: t,
                                            displayProfile: G,
                                            themeType: N.l.MODAL,
                                        }),
                                        (0, l.jsx)("div", {
                                            className: A.headerInner,
                                            children: (0, l.jsx)(p.Z, {
                                                user: t,
                                                displayProfile: G,
                                                guildId: k,
                                                channelId: S,
                                                themeType: N.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: A.body,
                                    children: [
                                        (0, l.jsx)(I.Z, {
                                            className: A.username,
                                            user: t,
                                            guildId: k,
                                            nickname: V,
                                            pronouns: null == G ? void 0 : G.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, l.jsx)(x.Z, {
                                                displayProfile: G,
                                                themeType: N.l.MODAL,
                                                onClose: B,
                                            }),
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: E.container,
                                            children: [
                                                (0, l.jsx)(o.njP, {
                                                    className: E.tabBar,
                                                    type: "top",
                                                    selectedItem: _.oh.BOT_INFO,
                                                    onItemSelect: O.dG4,
                                                    children: (0, l.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: E.tabBarItem,
                                                            id: _.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJT),
                                                            children: (0, l.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJT),
                                                            }),
                                                        },
                                                        _.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, l.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: P.scroller,
                                                    children: [
                                                        (0, l.jsx)(v.Z, {
                                                            userId: t.id,
                                                            userBio: null == G ? void 0 : G.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, l.jsx)(g.Z, {
                                                            heading: T.intl.string(T.t["A//N4k"]),
                                                            children: (0, l.jsx)(j.Z, {
                                                                userId: t.id,
                                                                guildId: k,
                                                                tooltipDelay: _.vB,
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
