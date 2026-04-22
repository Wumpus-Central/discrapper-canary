a.d(t, { A: () => D });
var n = a(627968);
a(64700);
var i = a(935462),
    l = a(707554),
    r = a(140735),
    d = a(231723),
    o = a(630054),
    s = a(793574),
    c = a(688810),
    _ = a(915089),
    u = a(562153),
    m = a(183555),
    p = a(950191),
    g = a(722868),
    b = a(716804),
    f = a(718019),
    x = a(31432),
    h = a(915614),
    A = a(559506),
    v = a(946356),
    I = a(810396),
    y = a(570314),
    C = a(490752),
    j = a(571077),
    N = a(587168),
    E = a(982985),
    S = a(159218),
    T = a(240783),
    w = a(371843),
    P = a(518477),
    k = a(652215),
    M = a(996988),
    L = a(985018),
    R = a(872116);
function D(e) {
    let {
            user: t,
            currentUser: a,
            guildId: D,
            originGuildId: B,
            channelId: O,
            messageId: G,
            roleId: U,
            sessionId: F,
            initialTabSection: H,
            initialScrollTarget: W,
            transitionState: V,
            openedAt: z,
            onClose: X,
            sourceAnalyticsLocations: Z = [],
        } = e,
        Y = D === k.ME ? void 0 : D,
        q = (0, p.Ay)(t.id, Y),
        Q = u.Ay.getName(Y, O, t),
        K = (0, _.GV)(),
        { analyticsLocations: J } = (0, c.Ay)([...Z, s.A.USER_PROFILE_MODAL]),
        $ = (0, m.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: F,
            guildId: Y,
            channelId: O,
            messageId: G,
            roleId: U,
        }),
        ee = (0, w.A)(t),
        et = (0, g.A)({ user: t, guildId: B, channelId: O, displayProfile: q, onClose: X });
    return (0, n.jsx)(c.f5, {
        value: J,
        children: (0, n.jsx)(m.of, {
            value: $,
            openedAt: z,
            fetchStartedAt: q?.fetchStartedAt,
            fetchEndedAt: q?.fetchEndedAt,
            isLoaded: q?.isLoaded,
            children: (0, n.jsx)(b.N, {
                value: W,
                children: (0, n.jsx)(i.EO, {
                    "data-migration-pending": !0,
                    transitionState: V,
                    className: R.zr,
                    hideShadow: !0,
                    "aria-labelledby": K,
                    parentComponent: "BotUserProfileModal",
                    children: (0, n.jsx)(l.F, {
                        component: (0, n.jsx)(r.A, {
                            children: (0, n.jsx)(l.H, { id: K, children: L.intl.format(L.t.KRe1Fk, { name: Q }) }),
                        }),
                        children: (0, n.jsxs)(v.A, {
                            user: t,
                            displayProfile: q,
                            themeType: M.d.MODAL,
                            children: [
                                (0, n.jsx)(N.A, {
                                    children: (0, n.jsx)(C.A, { user: t, guildId: Y, viewProfileItem: et }),
                                }),
                                (0, n.jsxs)("div", {
                                    children: [
                                        (0, n.jsx)(h.A, { user: t, displayProfile: q, themeType: M.d.MODAL }),
                                        (0, n.jsxs)("div", {
                                            className: R.El,
                                            children: [
                                                (0, n.jsx)(f.A, {
                                                    user: t,
                                                    displayProfile: q,
                                                    guildId: Y,
                                                    channelId: O,
                                                    themeType: M.d.MODAL,
                                                }),
                                                (0, n.jsx)(S.A, {
                                                    user: t,
                                                    themeType: M.d.MODAL,
                                                    hasEntered: V === d.ip.ENTERED,
                                                    onCloseProfile: X,
                                                    disableToolbar: !0,
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: R.Pz,
                                                    children: [
                                                        (0, n.jsx)("div", {
                                                            className: R.jS,
                                                            children: (0, n.jsx)(E.e, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: o.A.popAll,
                                                            }),
                                                        }),
                                                        (0, n.jsx)("div", {
                                                            className: R.pg,
                                                            children: (0, n.jsx)(E.l, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: o.A.popAll,
                                                            }),
                                                        }),
                                                        (0, n.jsx)(j.A, { user: t, guildId: Y }),
                                                        (0, n.jsx)(y.A, { user: t }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(A.A, { userId: t.id, className: R.Fd }),
                                (0, n.jsxs)("div", {
                                    className: R.rf,
                                    children: [
                                        (0, n.jsx)(I.A, {
                                            className: R.Xh,
                                            user: t,
                                            guildId: Y,
                                            nickname: Q,
                                            pronouns: q?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, n.jsx)(x.A, {
                                                displayProfile: q,
                                                themeType: M.d.MODAL,
                                                onClose: X,
                                            }),
                                        }),
                                        (0, n.jsx)(T.A, {
                                            user: t,
                                            currentUser: a,
                                            displayProfile: q,
                                            guildId: Y,
                                            items: ee,
                                            initialSection: H ?? P.RP.BOT_INFO,
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
