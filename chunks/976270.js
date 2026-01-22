t.d(l, { A: () => D }), t(896048);
var n = t(627968);
t(64700);
var i = t(397927),
    r = t(630054),
    s = t(793574),
    a = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    f = t(722868),
    p = t(716804),
    m = t(718019),
    x = t(31432),
    A = t(915614),
    j = t(559506),
    h = t(946356),
    g = t(810396),
    v = t(570314),
    b = t(490752),
    I = t(571077),
    y = t(587168),
    O = t(982985),
    N = t(159218),
    E = t(240783),
    _ = t(371843),
    T = t(518477),
    P = t(652215),
    S = t(996988),
    C = t(985018),
    L = t(763563);
function D(e) {
    let {
            user: l,
            currentUser: t,
            guildId: D,
            channelId: R,
            messageId: w,
            roleId: G,
            sessionId: M,
            initialTabSection: U,
            initialScrollTarget: k,
            transitionState: F,
            openedAt: V,
            onClose: B,
            sourceAnalyticsLocations: W = [],
            showGuildProfile: K,
        } = e,
        z = D === P.ME ? void 0 : D,
        H = (0, u.Ay)(l.id, K ? z : void 0),
        Y = d.Ay.getName(z, R, l),
        J = (0, o.GV)(),
        { analyticsLocations: X } = (0, a.Ay)([...W, s.A.USER_PROFILE_MODAL]),
        Z = (0, c.pb)({
            layout: "MODAL",
            userId: l.id,
            sourceSessionId: M,
            guildId: z,
            channelId: R,
            messageId: w,
            roleId: G,
        }),
        Q = (0, _.A)(l),
        $ = (0, f.A)({
            user: l,
            guildId: z,
            channelId: R,
            displayProfile: H,
            onClose: B,
        });
    return (0, n.jsx)(a.f5, {
        value: X,
        children: (0, n.jsx)(c.of, {
            value: Z,
            openedAt: V,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
            children: (0, n.jsx)(p.N, {
                value: k,
                children: (0, n.jsx)(i.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: L.zr,
                    hideShadow: !0,
                    "aria-labelledby": J,
                    parentComponent: "BotUserProfileModal",
                    children: (0, n.jsx)(i.Fmo, {
                        component: (0, n.jsx)(i.AC4, {
                            children: (0, n.jsx)(i.H, {
                                id: J,
                                children: C.intl.format(C.t.KRe1Fk, { name: Y }),
                            }),
                        }),
                        children: (0, n.jsxs)(h.A, {
                            user: l,
                            displayProfile: H,
                            themeType: S.d.MODAL,
                            children: [
                                (0, n.jsx)(y.A, {
                                    children: (0, n.jsx)(b.A, {
                                        user: l,
                                        guildId: z,
                                        viewProfileItem: $,
                                    }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(A.A, {
                                            user: l,
                                            displayProfile: H,
                                            themeType: S.d.MODAL,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: L.El,
                                            children: [
                                                (0, n.jsx)(m.A, {
                                                    user: l,
                                                    displayProfile: H,
                                                    guildId: z,
                                                    channelId: R,
                                                    themeType: S.d.MODAL,
                                                }),
                                                (0, n.jsx)(N.A, {
                                                    user: l,
                                                    themeType: S.d.MODAL,
                                                    hasEntered: F === i.ip4.ENTERED,
                                                    onCloseProfile: B,
                                                    disableToolbar: !0,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: L.Pz,
                                                    children: [
                                                        (0, n.jsx)("div", {
                                                            className: L.jS,
                                                            children: (0, n.jsx)(O.e, {
                                                                variant: "secondary",
                                                                userId: l.id,
                                                                onClose: r.A.popAll,
                                                            }),
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className: L.pg,
                                                            children: (0, n.jsx)(O.l, {
                                                                variant: "secondary",
                                                                userId: l.id,
                                                                onClose: r.A.popAll,
                                                            }),
                                                        }),
                                                        (0, n.jsx)(I.A, {
                                                            user: l,
                                                            guildId: z,
                                                        }),
                                                        (0, n.jsx)(v.A, { user: l }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(j.A, {
                                    userId: l.id,
                                    className: L.Fd,
                                }),
                                (0, n.jsxs)("div", {
                                    className: L.rf,
                                    children: [
                                        (0, n.jsx)(g.A, {
                                            className: L.Xh,
                                            user: l,
                                            guildId: z,
                                            nickname: Y,
                                            pronouns: null == H ? void 0 : H.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, n.jsx)(x.A, {
                                                displayProfile: H,
                                                themeType: S.d.MODAL,
                                                onClose: B,
                                            }),
                                        }),
                                        (0, n.jsx)(E.A, {
                                            user: l,
                                            currentUser: t,
                                            displayProfile: H,
                                            guildId: z,
                                            items: Q,
                                            initialSection: null != U ? U : T.RP.BOT_INFO,
                                            onClose: B,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    });
}
