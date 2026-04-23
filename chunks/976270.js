n.d(t, { A: () => B });
var a = n(627968);
n(64700);
var i = n(935462),
    l = n(707554),
    r = n(140735),
    s = n(231723),
    o = n(630054),
    d = n(793574),
    c = n(688810),
    _ = n(915089),
    u = n(562153),
    p = n(183555),
    m = n(950191),
    f = n(722868),
    x = n(716804),
    g = n(718019),
    h = n(31432),
    A = n(915614),
    b = n(559506),
    v = n(946356),
    I = n(810396),
    j = n(570314),
    y = n(490752),
    C = n(571077),
    N = n(587168),
    E = n(982985),
    T = n(159218),
    w = n(240783),
    P = n(371843),
    L = n(518477),
    k = n(652215),
    S = n(996988),
    R = n(985018),
    D = n(872116);
function B(e) {
    let {
            user: t,
            currentUser: n,
            guildId: B,
            originGuildId: O,
            channelId: M,
            messageId: G,
            roleId: U,
            sessionId: F,
            initialTabSection: H,
            initialScrollTarget: V,
            transitionState: z,
            openedAt: W,
            onClose: X,
            sourceAnalyticsLocations: Y = [],
        } = e,
        K = B === k.ME ? void 0 : B,
        J = (0, m.Ay)(t.id, K),
        Q = u.Ay.getName(K, M, t),
        q = (0, _.GV)(),
        { analyticsLocations: Z } = (0, c.Ay)([...Y, d.A.USER_PROFILE_MODAL]),
        $ = (0, p.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: F,
            guildId: K,
            channelId: M,
            messageId: G,
            roleId: U,
        }),
        ee = (0, P.A)(t),
        et = (0, f.A)({ user: t, guildId: O, channelId: M, displayProfile: J, onClose: X });
    return (0, a.jsx)(c.f5, {
        value: Z,
        children: (0, a.jsx)(p.of, {
            value: $,
            openedAt: W,
            fetchStartedAt: J?.fetchStartedAt,
            fetchEndedAt: J?.fetchEndedAt,
            isLoaded: J?.isLoaded,
            children: (0, a.jsx)(x.N, {
                value: V,
                children: (0, a.jsx)(i.EO, {
                    "data-migration-pending": !0,
                    transitionState: z,
                    className: D.zr,
                    hideShadow: !0,
                    "aria-labelledby": q,
                    parentComponent: "BotUserProfileModal",
                    children: (0, a.jsx)(l.F, {
                        component: (0, a.jsx)(r.A, {
                            children: (0, a.jsx)(l.H, { id: q, children: R.intl.format(R.t.KRe1Fk, { name: Q }) }),
                        }),
                        children: (0, a.jsxs)(v.A, {
                            user: t,
                            displayProfile: J,
                            themeType: S.d.MODAL,
                            children: [
                                (0, a.jsx)(N.A, {
                                    children: (0, a.jsx)(y.A, { user: t, guildId: K, viewProfileItem: et }),
                                }),
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(A.A, { user: t, displayProfile: J, themeType: S.d.MODAL }),
                                        (0, a.jsxs)("div", {
                                            className: D.El,
                                            children: [
                                                (0, a.jsx)(g.A, {
                                                    user: t,
                                                    displayProfile: J,
                                                    guildId: K,
                                                    channelId: M,
                                                    themeType: S.d.MODAL,
                                                }),
                                                (0, a.jsx)(T.A, {
                                                    user: t,
                                                    themeType: S.d.MODAL,
                                                    hasEntered: z === s.ip.ENTERED,
                                                    onCloseProfile: X,
                                                    disableToolbar: !0,
                                                }),
                                                (0, a.jsxs)("div", {
                                                    className: D.Pz,
                                                    children: [
                                                        (0, a.jsx)("div", {
                                                            className: D.jS,
                                                            children: (0, a.jsx)(E.e, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: o.A.popAll,
                                                            }),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                            className: D.pg,
                                                            children: (0, a.jsx)(E.l, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: o.A.popAll,
                                                            }),
                                                        }),
                                                        (0, a.jsx)(C.A, { user: t, guildId: K }),
                                                        (0, a.jsx)(j.A, { user: t }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(b.A, { userId: t.id, className: D.Fd }),
                                (0, a.jsxs)("div", {
                                    className: D.rf,
                                    children: [
                                        (0, a.jsx)(I.A, {
                                            className: D.Xh,
                                            user: t,
                                            guildId: K,
                                            nickname: Q,
                                            pronouns: J?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, a.jsx)(h.A, {
                                                displayProfile: J,
                                                themeType: S.d.MODAL,
                                                onClose: X,
                                            }),
                                        }),
                                        (0, a.jsx)(w.A, {
                                            user: t,
                                            currentUser: n,
                                            displayProfile: J,
                                            guildId: K,
                                            items: ee,
                                            initialSection: H ?? L.RP.BOT_INFO,
                                            onClose: X,
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
