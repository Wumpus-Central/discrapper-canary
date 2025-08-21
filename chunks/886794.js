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
    let {
            user: n,
            guildId: t,
            channelId: E,
            messageId: S,
            roleId: w,
            sessionId: B,
            transitionState: D,
            openedAt: L,
            onClose: R,
            sourceAnalyticsLocations: U = [],
        } = e,
        M = t === Z.ME ? void 0 : t,
        k = (0, m.ZP)(n.id, M),
        G = u.ZP.getName(M, E, n),
        V = (0, s.Dt)(),
        { analyticsLocations: F } = (0, a.ZP)([...U, c.Z.USER_PROFILE_MODAL]),
        Y = (0, f.ZB)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: B,
            guildId: M,
            channelId: E,
            messageId: S,
            roleId: w,
        }),
        z = o.useRef(null),
        W = (0, i.Z)(z);
    return (0, r.jsx)(a.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: Y,
            openedAt: L,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsxs)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: D,
                className: A.root,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(l.y5t, {
                        component: (0, r.jsx)(l.nn4, {
                            children: (0, r.jsx)(l.H, {
                                id: V,
                                children: T.intl.format(T.t.KRe1Fh, { name: G }),
                            }),
                        }),
                        children: (0, r.jsxs)(v.Z, {
                            user: n,
                            displayProfile: k,
                            themeType: P.l.MODAL,
                            ref: (null == k ? void 0 : k.profileEffectId) != null ? z : void 0,
                            children: [
                                (0, r.jsx)(I.Z, { children: (0, r.jsx)(y.Z, { user: n }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            user: n,
                                            displayProfile: k,
                                            themeType: P.l.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: A.headerInner,
                                            children: (0, r.jsx)(p.Z, {
                                                user: n,
                                                displayProfile: k,
                                                guildId: M,
                                                channelId: E,
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
                                            user: n,
                                            nickname: G,
                                            pronouns: null == k ? void 0 : k.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(b.Z, {
                                                displayProfile: k,
                                                themeType: P.l.MODAL,
                                                onClose: R,
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
                                                            userId: n.id,
                                                            userBio: null == k ? void 0 : k.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(j.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, r.jsx)(h.Z, {
                                                                userId: n.id,
                                                                guildId: M,
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
                            isHovering: W,
                        }),
                ],
            }),
        }),
    });
}
