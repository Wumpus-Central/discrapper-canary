n.d(t, { Z: () => T }), n(388685);
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
    m = n(687158),
    p = n(899007),
    g = n(648052),
    b = n(867176),
    j = n(280885),
    h = n(900927),
    x = n(678738),
    y = n(502762),
    v = n(530),
    O = n(679332),
    I = n(544989),
    _ = n(228168),
    P = n(981631),
    Z = n(388032),
    N = n(405666),
    E = n(349966),
    S = n(923243);
function T(e) {
    let {
            user: t,
            guildId: n,
            channelId: T,
            messageId: w,
            roleId: A,
            sessionId: C,
            transitionState: L,
            openedAt: k,
            onClose: D,
            sourceAnalyticsLocations: G = [],
        } = e,
        M = n === P.ME ? void 0 : n,
        R = (0, m.ZP)(t.id, M),
        B = u.ZP.getName(M, T, t),
        U = (0, s.Dt)(),
        { analyticsLocations: F } = (0, c.ZP)([...G, a.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: C,
            guildId: M,
            channelId: T,
            messageId: w,
            roleId: A,
        }),
        Y = l.useRef(null),
        W = (0, o.Z)(Y);
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: V,
            openedAt: k,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, r.jsxs)(i.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: N.root,
                hideShadow: !0,
                "aria-labelledby": U,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(i.y5t, {
                        component: (0, r.jsx)(i.nn4, {
                            children: (0, r.jsx)(i.H, {
                                id: U,
                                children: Z.intl.format(Z.t.KRe1Fh, { name: B }),
                            }),
                        }),
                        children: (0, r.jsxs)(y.Z, {
                            user: t,
                            displayProfile: R,
                            themeType: _.lY.MODAL,
                            ref: (null == R ? void 0 : R.profileEffectId) != null ? Y : void 0,
                            children: [
                                (0, r.jsx)(I.Z, { children: (0, r.jsx)(O.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: R,
                                            themeType: _.lY.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: N.headerInner,
                                            children: (0, r.jsx)(p.Z, {
                                                user: t,
                                                displayProfile: R,
                                                guildId: M,
                                                channelId: T,
                                                themeType: _.lY.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: N.body,
                                    children: [
                                        (0, r.jsx)(v.Z, {
                                            className: N.username,
                                            user: t,
                                            nickname: B,
                                            pronouns: null == R ? void 0 : R.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(g.Z, {
                                                displayProfile: R,
                                                themeType: _.lY.MODAL,
                                                onClose: D,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: S.container,
                                            children: [
                                                (0, r.jsx)(i.njP, {
                                                    className: S.tabBar,
                                                    type: "top",
                                                    selectedItem: _.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, r.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: S.tabBarItem,
                                                            id: _.oh.BOT_INFO,
                                                            "aria-label": Z.intl.string(Z.t.jGoPJS),
                                                            children: (0, r.jsx)(i.Text, {
                                                                variant: "text-sm/normal",
                                                                children: Z.intl.string(Z.t.jGoPJS),
                                                            }),
                                                        },
                                                        _.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(i.zJl, {
                                                    fade: !0,
                                                    className: E.scroller,
                                                    children: [
                                                        (0, r.jsx)(j.Z, {
                                                            userId: t.id,
                                                            userBio: null == R ? void 0 : R.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(x.Z, {
                                                            heading: Z.intl.string(Z.t["A//N4u"]),
                                                            children: (0, r.jsx)(h.Z, {
                                                                userId: t.id,
                                                                guildId: M,
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
                    (null == R ? void 0 : R.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == R ? void 0 : R.profileEffectId,
                            isHovering: W,
                        }),
                ],
            }),
        }),
    });
}
