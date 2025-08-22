t.d(n, { Z: () => C }), t(388685);
var r = t(951288),
    l = t(647438),
    o = t(481060),
    i = t(727637),
    c = t(100527),
    s = t(906732),
    a = t(313201),
    d = t(680295),
    u = t(5192),
    f = t(785717),
    m = t(687158),
    p = t(899007),
    h = t(648052),
    x = t(867176),
    b = t(280885),
    j = t(900927),
    g = t(678738),
    v = t(502762),
    y = t(530),
    O = t(679332),
    I = t(544989),
    _ = t(228168),
    Z = t(981631),
    P = t(671955),
    T = t(388032),
    N = t(673517),
    A = t(54966),
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
            transitionState: B,
            openedAt: R,
            onClose: U,
            sourceAnalyticsLocations: M = [],
        } = e,
        k = C === Z.ME ? void 0 : C,
        G = (0, m.ZP)(t.id, k),
        F = u.ZP.getName(k, S, t),
        V = (0, a.Dt)(),
        { analyticsLocations: Y } = (0, s.ZP)([...M, c.Z.USER_PROFILE_MODAL]),
        W = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: L,
            guildId: k,
            channelId: S,
            messageId: w,
            roleId: D,
        }),
        z = l.useRef(null),
        K = (0, i.Z)(z);
    return (0, r.jsx)(s.Gt, {
        value: Y,
        children: (0, r.jsx)(f.Mt, {
            value: W,
            openedAt: R,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, r.jsxs)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: B,
                className: N.root,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(o.y5t, {
                        component: (0, r.jsx)(o.nn4, {
                            children: (0, r.jsx)(o.H, {
                                id: V,
                                children: T.intl.format(T.t.KRe1Fh, { name: F }),
                            }),
                        }),
                        children: (0, r.jsxs)(v.Z, {
                            user: t,
                            displayProfile: G,
                            themeType: P.l.MODAL,
                            ref: (null == G ? void 0 : G.profileEffect) != null ? z : void 0,
                            children: [
                                (0, r.jsx)(I.Z, { children: (0, r.jsx)(O.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: t,
                                            displayProfile: G,
                                            themeType: P.l.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: N.headerInner,
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
                                    className: N.body,
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            className: N.username,
                                            user: t,
                                            nickname: F,
                                            pronouns: null == G ? void 0 : G.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(h.Z, {
                                                displayProfile: G,
                                                themeType: P.l.MODAL,
                                                onClose: U,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: E.container,
                                            children: [
                                                (0, r.jsx)(o.njP, {
                                                    className: E.tabBar,
                                                    type: "top",
                                                    selectedItem: _.oh.BOT_INFO,
                                                    onItemSelect: Z.dG4,
                                                    children: (0, r.jsx)(
                                                        o.njP.Item,
                                                        {
                                                            className: E.tabBarItem,
                                                            id: _.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJS),
                                                            children: (0, r.jsx)(o.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJS),
                                                            }),
                                                        },
                                                        _.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(o.zJl, {
                                                    fade: !0,
                                                    className: A.scroller,
                                                    children: [
                                                        (0, r.jsx)(b.Z, {
                                                            userId: t.id,
                                                            userBio: null == G ? void 0 : G.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(g.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, r.jsx)(j.Z, {
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
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == G || null == (n = G.profileEffect) ? void 0 : n.id,
                            isHovering: K,
                        }),
                ],
            }),
        }),
    });
}
