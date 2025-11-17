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
    p = t(687158),
    f = t(899007),
    x = t(648052),
    h = t(867176),
    v = t(280885),
    j = t(900927),
    g = t(678738),
    b = t(502762),
    I = t(530),
    y = t(679332),
    _ = t(544989),
    Z = t(228168),
    O = t(981631),
    N = t(671955),
    A = t(388032),
    T = t(673517),
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
            sessionId: R,
            transitionState: L,
            openedAt: M,
            onClose: B,
            sourceAnalyticsLocations: U = [],
        } = e,
        k = C === O.ME ? void 0 : C,
        G = (0, p.ZP)(t.id, k),
        V = u.ZP.getName(k, S, t),
        F = (0, a.Dt)(),
        { analyticsLocations: W } = (0, s.ZP)([...U, r.Z.USER_PROFILE_MODAL]),
        H = (0, m.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: R,
            guildId: k,
            channelId: S,
            messageId: w,
            roleId: D,
        }),
        z = i.useRef(null),
        Y = (0, c.X)(z);
    return (0, l.jsx)(s.Gt, {
        value: W,
        children: (0, l.jsx)(m.Mt, {
            value: H,
            openedAt: M,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, l.jsxs)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: T.root,
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
                        children: (0, l.jsxs)(b.Z, {
                            user: t,
                            displayProfile: G,
                            themeType: N.l.MODAL,
                            ref: (null == G ? void 0 : G.profileEffect) != null ? z : void 0,
                            children: [
                                (0, l.jsx)(_.Z, { children: (0, l.jsx)(y.Z, { user: t }) }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsx)(h.Z, {
                                            user: t,
                                            displayProfile: G,
                                            themeType: N.l.MODAL,
                                        }),
                                        (0, l.jsx)("div", {
                                            className: T.headerInner,
                                            children: (0, l.jsx)(f.Z, {
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
                                    className: T.body,
                                    children: [
                                        (0, l.jsx)(I.Z, {
                                            className: T.username,
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
                                                    selectedItem: Z.oh.BOT_INFO,
                                                    onItemSelect: O.dG4,
                                                    children: (0, l.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: E.tabBarItem,
                                                            id: Z.oh.BOT_INFO,
                                                            "aria-label": A.intl.string(A.t.jGoPJT),
                                                            children: (0, l.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: A.intl.string(A.t.jGoPJT),
                                                            }),
                                                        },
                                                        Z.oh.BOT_INFO,
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
                                                            heading: A.intl.string(A.t["A//N4k"]),
                                                            children: (0, l.jsx)(j.Z, {
                                                                userId: t.id,
                                                                guildId: k,
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
