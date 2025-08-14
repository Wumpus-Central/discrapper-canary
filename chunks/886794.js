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
    b = n(648052),
    g = n(867176),
    j = n(280885),
    y = n(900927),
    O = n(678738),
    x = n(502762),
    h = n(530),
    v = n(679332),
    _ = n(544989),
    I = n(228168),
    P = n(981631),
    E = n(388032),
    T = n(673517),
    Z = n(54966),
    N = n(602727);
function S(e) {
    let {
            user: t,
            guildId: n,
            channelId: S,
            messageId: w,
            roleId: A,
            sessionId: C,
            transitionState: D,
            openedAt: L,
            onClose: R,
            sourceAnalyticsLocations: k = [],
        } = e,
        G = n === P.ME ? void 0 : n,
        B = (0, p.ZP)(t.id, G),
        M = u.ZP.getName(G, S, t),
        U = (0, s.Dt)(),
        { analyticsLocations: F } = (0, c.ZP)([...k, a.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: C,
            guildId: G,
            channelId: S,
            messageId: w,
            roleId: A,
        }),
        Y = l.useRef(null),
        W = (0, o.Z)(Y);
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: V,
            openedAt: L,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: D,
                className: T.root,
                hideShadow: !0,
                "aria-labelledby": U,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(i.y5t, {
                        component: (0, r.jsx)(i.nn4, {
                            children: (0, r.jsx)(i.H, {
                                id: U,
                                children: E.intl.format(E.t.KRe1Fh, { name: M }),
                            }),
                        }),
                        children: (0, r.jsxs)(x.Z, {
                            user: t,
                            displayProfile: B,
                            themeType: I.lY.MODAL,
                            ref: (null == B ? void 0 : B.profileEffectId) != null ? Y : void 0,
                            children: [
                                (0, r.jsx)(_.Z, { children: (0, r.jsx)(v.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            user: t,
                                            displayProfile: B,
                                            themeType: I.lY.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: T.headerInner,
                                            children: (0, r.jsx)(m.Z, {
                                                user: t,
                                                displayProfile: B,
                                                guildId: G,
                                                channelId: S,
                                                themeType: I.lY.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: T.body,
                                    children: [
                                        (0, r.jsx)(h.Z, {
                                            className: T.username,
                                            user: t,
                                            nickname: M,
                                            pronouns: null == B ? void 0 : B.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(b.Z, {
                                                displayProfile: B,
                                                themeType: I.lY.MODAL,
                                                onClose: R,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: N.container,
                                            children: [
                                                (0, r.jsx)(i.njP, {
                                                    className: N.tabBar,
                                                    type: "top",
                                                    selectedItem: I.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, r.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: N.tabBarItem,
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
                                                    className: Z.scroller,
                                                    children: [
                                                        (0, r.jsx)(j.Z, {
                                                            userId: t.id,
                                                            userBio: null == B ? void 0 : B.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(O.Z, {
                                                            heading: E.intl.string(E.t["A//N4u"]),
                                                            children: (0, r.jsx)(y.Z, {
                                                                userId: t.id,
                                                                guildId: G,
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
                    (null == B ? void 0 : B.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == B ? void 0 : B.profileEffectId,
                            isHovering: W,
                        }),
                ],
            }),
        }),
    });
}
