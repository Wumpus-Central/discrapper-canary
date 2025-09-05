t.d(n, { Z: () => E }), t(388685);
var o = t(951288),
    l = t(647438),
    r = t(481060),
    i = t(727637),
    c = t(100527),
    a = t(906732),
    s = t(313201),
    d = t(680295),
    u = t(5192),
    f = t(785717),
    p = t(687158),
    m = t(899007),
    x = t(648052),
    b = t(867176),
    h = t(280885),
    j = t(900927),
    g = t(678738),
    v = t(502762),
    y = t(530),
    _ = t(679332),
    I = t(544989),
    O = t(228168),
    Z = t(981631),
    P = t(671955),
    T = t(388032),
    N = t(526594),
    A = t(438160),
    C = t(909735);
function E(e) {
    var n;
    let {
            user: t,
            guildId: E,
            channelId: S,
            messageId: w,
            roleId: D,
            sessionId: B,
            transitionState: L,
            openedAt: R,
            onClose: M,
            sourceAnalyticsLocations: U = [],
        } = e,
        k = E === Z.ME ? void 0 : E,
        V = (0, p.ZP)(t.id, k),
        F = u.ZP.getName(k, S, t),
        G = (0, s.Dt)(),
        { analyticsLocations: z } = (0, a.ZP)([...U, c.Z.USER_PROFILE_MODAL]),
        K = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: B,
            guildId: k,
            channelId: S,
            messageId: w,
            roleId: D,
        }),
        H = l.useRef(null),
        W = (0, i.Z)(H);
    return (0, o.jsx)(a.Gt, {
        value: z,
        children: (0, o.jsx)(f.Mt, {
            value: K,
            openedAt: R,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, o.jsxs)(r.Y0X, {
                "data-migration-pending": !0,
                transitionState: L,
                className: N.root,
                hideShadow: !0,
                "aria-labelledby": G,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, o.jsx)(r.y5t, {
                        component: (0, o.jsx)(r.nn4, {
                            children: (0, o.jsx)(r.H, {
                                id: G,
                                children: T.intl.format(T.t.KRe1Fh, { name: F }),
                            }),
                        }),
                        children: (0, o.jsxs)(v.Z, {
                            user: t,
                            displayProfile: V,
                            themeType: P.l.MODAL,
                            ref: (null == V ? void 0 : V.profileEffect) != null ? H : void 0,
                            children: [
                                (0, o.jsx)(I.Z, { children: (0, o.jsx)(_.Z, { user: t }) }),
                                (0, o.jsxs)("div", {
                                    children: [
                                        (0, o.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: V,
                                            themeType: P.l.MODAL,
                                        }),
                                        (0, o.jsx)("div", {
                                            className: N.headerInner,
                                            children: (0, o.jsx)(m.Z, {
                                                user: t,
                                                displayProfile: V,
                                                guildId: k,
                                                channelId: S,
                                                themeType: P.l.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, o.jsxs)("div", {
                                    className: N.body,
                                    children: [
                                        (0, o.jsx)(y.Z, {
                                            className: N.username,
                                            user: t,
                                            nickname: F,
                                            pronouns: null == V ? void 0 : V.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, o.jsx)(x.Z, {
                                                displayProfile: V,
                                                themeType: P.l.MODAL,
                                                onClose: M,
                                            }),
                                        }),
                                        (0, o.jsxs)("div", {
                                            className: C.container,
                                            children: [
                                                (0, o.jsx)(r.njP, {
                                                    className: C.tabBar,
                                                    type: "top",
                                                    selectedItem: O.oh.BOT_INFO,
                                                    onItemSelect: Z.dG4,
                                                    children: (0, o.jsx)(
                                                        r.njP.Item,
                                                        {
                                                            className: C.tabBarItem,
                                                            id: O.oh.BOT_INFO,
                                                            "aria-label": T.intl.string(T.t.jGoPJS),
                                                            children: (0, o.jsx)(r.Text, {
                                                                variant: "text-sm/normal",
                                                                children: T.intl.string(T.t.jGoPJS),
                                                            }),
                                                        },
                                                        O.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, o.jsxs)(r.zJl, {
                                                    fade: !0,
                                                    className: A.scroller,
                                                    children: [
                                                        (0, o.jsx)(h.Z, {
                                                            userId: t.id,
                                                            userBio: null == V ? void 0 : V.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, o.jsx)(g.Z, {
                                                            heading: T.intl.string(T.t["A//N4u"]),
                                                            children: (0, o.jsx)(j.Z, {
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
                    (null == V ? void 0 : V.profileEffect) != null &&
                        (0, o.jsx)(d.Z, {
                            profileEffectId: null == V || null == (n = V.profileEffect) ? void 0 : n.id,
                            isHovering: W,
                        }),
                ],
            }),
        }),
    });
}
