t.d(n, { Z: () => E }), t(388685);
var r = t(951288),
    o = t(647438),
    l = t(481060),
    i = t(727637),
    c = t(100527),
    a = t(906732),
    s = t(313201),
    d = t(680295),
    u = t(5192),
    f = t(785717),
    m = t(687158),
    p = t(899007),
    b = t(648052),
    x = t(867176),
    g = t(280885),
    h = t(900927),
    j = t(678738),
    v = t(502762),
    _ = t(530),
    y = t(679332),
    I = t(544989),
    O = t(228168),
    Z = t(981631),
    P = t(671955),
    T = t(388032),
    A = t(673517),
    N = t(54966),
    C = t(602727);
function E(e) {
    var n;
    let {
            user: t,
            guildId: E,
            channelId: S,
            messageId: w,
            roleId: B,
            sessionId: D,
            transitionState: L,
            openedAt: R,
            onClose: U,
            sourceAnalyticsLocations: M = [],
        } = e,
        k = E === Z.ME ? void 0 : E,
        G = (0, m.ZP)(t.id, k),
        V = u.ZP.getName(k, S, t),
        F = (0, s.Dt)(),
        { analyticsLocations: Y } = (0, a.ZP)([...M, c.Z.USER_PROFILE_MODAL]),
        z = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: D,
            guildId: k,
            channelId: S,
            messageId: w,
            roleId: B,
        }),
        W = o.useRef(null),
        K = (0, i.Z)(W);
    return (0, r.jsx)(a.Gt, {
        value: Y,
        children: (0, r.jsx)(f.Mt, {
            value: z,
            openedAt: R,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, r.jsxs)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: A.root,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(l.y5t, {
                        component: (0, r.jsx)(l.nn4, {
                            children: (0, r.jsx)(l.H, {
                                id: F,
                                children: T.intl.format(T.t.KRe1Fh, { name: V }),
                            }),
                        }),
                        children: (0, r.jsxs)(v.Z, {
                            user: t,
                            displayProfile: G,
                            themeType: P.l.MODAL,
                            ref: (null == G ? void 0 : G.profileEffect) != null ? W : void 0,
                            children: [
                                (0, r.jsx)(I.Z, { children: (0, r.jsx)(y.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: t,
                                            displayProfile: G,
                                            themeType: P.l.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: A.headerInner,
                                            children: (0, r.jsx)(p.Z, {
                                                user: t,
                                                displayProfile: G,
                                                guildId: k,
                                                channelId: S,
                                                themeType: P.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: A.body,
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            className: A.username,
                                            user: t,
                                            nickname: V,
                                            pronouns: null == G ? void 0 : G.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(b.Z, {
                                                displayProfile: G,
                                                themeType: P.l.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: C.container,
                                            children: [
                                                (0, r.jsx)(l.njP, {
                                                    className: C.tabBar,
                                                    type: "top",
                                                    selectedItem: O.oh.BOT_INFO,
                                                    onItemSelect: Z.dG4,
                                                    children: (0, r.jsx)(
                                                        l.njP.Item,
                                                        {
                                                            className: C.tabBarItem,
                                                            id: O.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJS),
                                                            children: (0, r.jsx)(l.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJS),
                                                            }),
                                                        },
                                                        O.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(l.zJl, {
                                                    fade: !0,
                                                    className: N.scroller,
                                                    children: [
                                                        (0, r.jsx)(g.Z, {
                                                            userId: t.id,
                                                            userBio: null == G ? void 0 : G.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(j.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, r.jsx)(h.Z, {
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
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == G || null == (n = G.profileEffect) ? void 0 : n.id,
                            isHovering: K,
                        }),
                ],
            }),
        }),
    });
}
