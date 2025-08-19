n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    o = n(647438),
    i = n(481060),
    l = n(727637),
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
    h = n(280885),
    x = n(900927),
    _ = n(678738),
    j = n(502762),
    v = n(530),
    y = n(679332),
    I = n(544989),
    O = n(228168),
    Z = n(981631),
    P = n(671955),
    T = n(388032),
    C = n(673517),
    A = n(54966),
    N = n(602727);
function E(e) {
    let {
            user: t,
            guildId: n,
            channelId: E,
            messageId: S,
            roleId: w,
            sessionId: B,
            transitionState: L,
            openedAt: D,
            onClose: M,
            sourceAnalyticsLocations: U = [],
        } = e,
        R = n === Z.ME ? void 0 : n,
        k = (0, p.ZP)(t.id, R),
        G = u.ZP.getName(R, E, t),
        V = (0, s.Dt)(),
        { analyticsLocations: F } = (0, c.ZP)([...U, a.Z.USER_PROFILE_MODAL]),
        Y = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: B,
            guildId: R,
            channelId: E,
            messageId: S,
            roleId: w,
        }),
        W = o.useRef(null),
        z = (0, l.Z)(W);
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: Y,
            openedAt: D,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: C.root,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(i.y5t, {
                        component: (0, r.jsx)(i.nn4, {
                            children: (0, r.jsx)(i.H, {
                                id: V,
                                children: T.intl.format(T.t.KRe1Fh, { name: G }),
                            }),
                        }),
                        children: (0, r.jsxs)(j.Z, {
                            user: t,
                            displayProfile: k,
                            themeType: P.l.MODAL,
                            ref: (null == k ? void 0 : k.profileEffectId) != null ? W : void 0,
                            children: [
                                (0, r.jsx)(I.Z, { children: (0, r.jsx)(y.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            user: t,
                                            displayProfile: k,
                                            themeType: P.l.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: C.headerInner,
                                            children: (0, r.jsx)(m.Z, {
                                                user: t,
                                                displayProfile: k,
                                                guildId: R,
                                                channelId: E,
                                                themeType: P.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: C.body,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            className: C.username,
                                            user: t,
                                            nickname: G,
                                            pronouns: null == k ? void 0 : k.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(b.Z, {
                                                displayProfile: k,
                                                themeType: P.l.MODAL,
                                                onClose: M,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: N.container,
                                            children: [
                                                (0, r.jsx)(i.njP, {
                                                    className: N.tabBar,
                                                    type: "top",
                                                    selectedItem: O.oh.BOT_INFO,
                                                    onItemSelect: Z.dG4,
                                                    children: (0, r.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: N.tabBarItem,
                                                            id: O.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJS),
                                                            children: (0, r.jsx)(i.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJS),
                                                            }),
                                                        },
                                                        O.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(i.zJl, {
                                                    fade: !0,
                                                    className: A.scroller,
                                                    children: [
                                                        (0, r.jsx)(h.Z, {
                                                            userId: t.id,
                                                            userBio: null == k ? void 0 : k.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(_.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, r.jsx)(x.Z, {
                                                                userId: t.id,
                                                                guildId: R,
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
                    (null == k ? void 0 : k.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == k ? void 0 : k.profileEffectId,
                            isHovering: z,
                        }),
                ],
            }),
        }),
    });
}
