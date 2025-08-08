n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(727637),
    a = n(100527),
    c = n(906732),
    s = n(313201),
    d = n(680295),
    u = n(5192),
    f = n(785717),
    p = n(687158),
    m = n(899007),
    g = n(648052),
    b = n(867176),
    h = n(280885),
    j = n(900927),
    y = n(678738),
    x = n(502762),
    O = n(530),
    v = n(679332),
    _ = n(544989),
    I = n(228168),
    P = n(981631),
    E = n(388032),
    Z = n(405666),
    N = n(349966),
    T = n(923243);
function S(e) {
    let {
            user: t,
            guildId: n,
            channelId: S,
            messageId: A,
            roleId: w,
            sessionId: C,
            transitionState: G,
            openedAt: R,
            onClose: L,
            sourceAnalyticsLocations: M = [],
        } = e,
        D = n === P.ME ? void 0 : n,
        k = (0, p.ZP)(t.id, D),
        B = u.ZP.getName(D, S, t),
        U = (0, s.Dt)(),
        { analyticsLocations: F } = (0, c.ZP)([...M, a.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: C,
            guildId: D,
            channelId: S,
            messageId: A,
            roleId: w,
        }),
        Y = l.useRef(null),
        W = (0, o.Z)(Y);
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: V,
            openedAt: R,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: G,
                className: Z.root,
                hideShadow: !0,
                "aria-labelledby": U,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(i.y5t, {
                        component: (0, r.jsx)(i.nn4, {
                            children: (0, r.jsx)(i.H, {
                                id: U,
                                children: E.intl.format(E.t.KRe1Fh, { name: B }),
                            }),
                        }),
                        children: (0, r.jsxs)(x.Z, {
                            user: t,
                            displayProfile: k,
                            themeType: I.lY.MODAL,
                            ref: (null == k ? void 0 : k.profileEffectId) != null ? Y : void 0,
                            children: [
                                (0, r.jsx)(_.Z, { children: (0, r.jsx)(v.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: k,
                                            themeType: I.lY.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Z.headerInner,
                                            children: (0, r.jsx)(m.Z, {
                                                user: t,
                                                displayProfile: k,
                                                guildId: D,
                                                channelId: S,
                                                themeType: I.lY.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: Z.body,
                                    children: [
                                        (0, r.jsx)(O.Z, {
                                            className: Z.username,
                                            user: t,
                                            nickname: B,
                                            pronouns: null == k ? void 0 : k.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(g.Z, {
                                                displayProfile: k,
                                                themeType: I.lY.MODAL,
                                                onClose: L,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.container,
                                            children: [
                                                (0, r.jsx)(i.njP, {
                                                    className: T.tabBar,
                                                    type: "top",
                                                    selectedItem: I.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, r.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: T.tabBarItem,
                                                            id: I.oh.BOT_INFO,
                                                            "aria-label": E.intl.string(E.t.jGoPJS),
                                                            children: (0, r.jsx)(i.Text, {
                                                                variant: "text-sm/normal",
                                                                children: E.intl.string(E.t.jGoPJS),
                                                            }),
                                                        },
                                                        I.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(i.zJl, {
                                                    fade: !0,
                                                    className: N.scroller,
                                                    children: [
                                                        (0, r.jsx)(h.Z, {
                                                            userId: t.id,
                                                            userBio: null == k ? void 0 : k.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(y.Z, {
                                                            heading: E.intl.string(E.t["A//N4u"]),
                                                            children: (0, r.jsx)(j.Z, {
                                                                userId: t.id,
                                                                guildId: D,
                                                                tooltipDelay: I.vB,
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
                    (null == k ? void 0 : k.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == k ? void 0 : k.profileEffectId,
                            isHovering: W,
                        }),
                ],
            }),
        }),
    });
}
