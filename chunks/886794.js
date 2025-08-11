n.d(t, { Z: () => w }), n(388685);
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
    _ = n(544989),
    I = n(228168),
    P = n(981631),
    Z = n(388032),
    N = n(405666),
    T = n(349966),
    E = n(923243);
function w(e) {
    let {
            user: t,
            guildId: n,
            channelId: w,
            messageId: S,
            roleId: A,
            sessionId: C,
            transitionState: L,
            openedAt: D,
            onClose: k,
            sourceAnalyticsLocations: B = [],
        } = e,
        R = n === P.ME ? void 0 : n,
        M = (0, m.ZP)(t.id, R),
        G = u.ZP.getName(R, w, t),
        U = (0, s.Dt)(),
        { analyticsLocations: F } = (0, c.ZP)([...B, a.Z.USER_PROFILE_MODAL]),
        V = (0, f.ZB)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: C,
            guildId: R,
            channelId: w,
            messageId: S,
            roleId: A,
        }),
        Y = l.useRef(null),
        H = (0, o.Z)(Y);
    return (0, r.jsx)(c.Gt, {
        value: F,
        children: (0, r.jsx)(f.Mt, {
            value: V,
            openedAt: D,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
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
                                children: Z.intl.format(Z.t.KRe1Fh, { name: G }),
                            }),
                        }),
                        children: (0, r.jsxs)(y.Z, {
                            user: t,
                            displayProfile: M,
                            themeType: I.lY.MODAL,
                            ref: (null == M ? void 0 : M.profileEffectId) != null ? Y : void 0,
                            children: [
                                (0, r.jsx)(_.Z, { children: (0, r.jsx)(O.Z, { user: t }) }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            user: t,
                                            displayProfile: M,
                                            themeType: I.lY.MODAL,
                                        }),
                                        (0, r.jsx)("div", {
                                            className: N.headerInner,
                                            children: (0, r.jsx)(p.Z, {
                                                user: t,
                                                displayProfile: M,
                                                guildId: R,
                                                channelId: w,
                                                themeType: I.lY.MODAL,
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
                                            nickname: G,
                                            pronouns: null == M ? void 0 : M.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, r.jsx)(g.Z, {
                                                displayProfile: M,
                                                themeType: I.lY.MODAL,
                                                onClose: k,
                                            }),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: E.container,
                                            children: [
                                                (0, r.jsx)(i.njP, {
                                                    className: E.tabBar,
                                                    type: "top",
                                                    selectedItem: I.oh.BOT_INFO,
                                                    onItemSelect: P.dG4,
                                                    children: (0, r.jsx)(
                                                        i.njP.Item,
                                                        {
                                                            className: E.tabBarItem,
                                                            id: I.oh.BOT_INFO,
                                                            "aria-label": Z.intl.string(Z.t.jGoPJS),
                                                            children: (0, r.jsx)(i.Text, {
                                                                variant: "text-sm/normal",
                                                                children: Z.intl.string(Z.t.jGoPJS),
                                                            }),
                                                        },
                                                        I.oh.BOT_INFO,
                                                    ),
                                                }),
                                                (0, r.jsxs)(i.zJl, {
                                                    fade: !0,
                                                    className: T.scroller,
                                                    children: [
                                                        (0, r.jsx)(j.Z, {
                                                            userId: t.id,
                                                            userBio: null == M ? void 0 : M.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, r.jsx)(x.Z, {
                                                            heading: Z.intl.string(Z.t["A//N4u"]),
                                                            children: (0, r.jsx)(h.Z, {
                                                                userId: t.id,
                                                                guildId: R,
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
                            isHovering: H,
                        }),
                ],
            }),
        }),
    });
}
