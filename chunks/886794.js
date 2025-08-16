n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
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
    j = n(280885),
    y = n(900927),
    O = n(678738),
    h = n(502762),
    x = n(530),
    v = n(679332),
    _ = n(544989),
    I = n(228168),
    P = n(981631),
    E = n(671955),
    T = n(388032),
    Z = n(673517),
    N = n(54966),
    w = n(602727);
function S(e) {
    let {
            user: t,
            guildId: n,
            channelId: S,
            messageId: A,
            roleId: C,
            sessionId: D,
            transitionState: L,
            openedAt: R,
            onClose: G,
            sourceAnalyticsLocations: k = [],
        } = e,
        B = n === P.ME ? void 0 : n,
        M = (0, p.ZP)(t.id, B),
        U = u.ZP.getName(B, S, t),
        F = (0, s.Dt)(),
        { analyticsLocations: V } = (0, c.ZP)([...k, a.Z.USER_PROFILE_MODAL]),
        W = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: D,
            guildId: B,
            channelId: S,
            messageId: A,
            roleId: C,
        }),
        Y = i.useRef(null),
        z = (0, o.Z)(Y);
    return (0, r.jsx)(c.Gt, {
        value: V,
        children: (0, r.jsx)(f.Mt, {
            value: W,
            openedAt: R,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsxs)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: Z.root,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, r.jsx)(l.y5t, {
                        component: (0, r.jsx)(l.nn4, {
                            children: (0, r.jsx)(l.H, {
                                id: F,
                                children: T.intl.format(T.t.KRe1Fh, { name: U }),
                            }),
                        }),
                        children: (0, r.jsxs)(h.Z, {
                            user: t,
                            displayProfile: M,
                            themeType: E.l.MODAL,
                            ref: (null == M ? void 0 : M.profileEffectId) != null ? Y : void 0,
                            children: [
                                (0, r.jsx)(_.Z, { children: (0, r.jsx)(v.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: M,
                                            themeType: E.l.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: Z.headerInner,
                                            children: (0, r.jsx)(m.Z, {
                                                user: t,
                                                displayProfile: M,
                                                guildId: B,
                                                channelId: S,
                                                themeType: E.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: Z.body,
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            className: Z.username,
                                            user: t,
                                            nickname: U,
                                            pronouns: null == M ? void 0 : M.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(g.Z, {
                                                displayProfile: M,
                                                themeType: E.l.MODAL,
                                                onClose: G,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: w.container,
                                            children: [
                                                (0, r.jsx)(l.njP, {
                                                    className: w.tabBar,
                                                    type: "top",
                                                    selectedItem: I.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, r.jsx)(
                                                        l.njP.Item,
                                                        {
                                                            className: w.tabBarItem,
                                                            id: I.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJS),
                                                            children: (0, r.jsx)(l.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJS),
                                                            }),
                                                        },
                                                        I.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(l.zJl, {
                                                    fade: !0,
                                                    className: N.scroller,
                                                    children: [
                                                        (0, r.jsx)(j.Z, {
                                                            userId: t.id,
                                                            userBio: null == M ? void 0 : M.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(O.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, r.jsx)(y.Z, {
                                                                userId: t.id,
                                                                guildId: B,
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
                    (null == M ? void 0 : M.profileEffectId) != null &&
                        (0, r.jsx)(d.Z, {
                            profileEffectId: null == M ? void 0 : M.profileEffectId,
                            isHovering: z,
                        }),
                ],
            }),
        }),
    });
}
