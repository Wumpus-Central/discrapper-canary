t.d(n, { A: () => O });
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(630054),
    r = t(793574),
    d = t(688810),
    s = t(915089),
    o = t(562153),
    c = t(183555),
    u = t(950191),
    _ = t(722868),
    p = t(716804),
    A = t(718019),
    g = t(31432),
    f = t(915614),
    h = t(559506),
    m = t(946356),
    x = t(810396),
    I = t(570314),
    b = t(490752),
    v = t(571077),
    E = t(587168),
    j = t(982985),
    y = t(159218),
    T = t(240783),
    S = t(371843),
    N = t(518477),
    C = t(652215),
    R = t(996988),
    P = t(985018),
    L = t(669924);
function O(e) {
    let {
            user: n,
            currentUser: t,
            guildId: O,
            originGuildId: D,
            channelId: k,
            messageId: B,
            roleId: U,
            sessionId: M,
            initialTabSection: G,
            initialScrollTarget: F,
            transitionState: w,
            openedAt: V,
            onClose: H,
            sourceAnalyticsLocations: W = [],
        } = e,
        z = O === C.ME ? void 0 : O,
        Y = (0, u.Ay)(n.id, z),
        X = o.Ay.getName(z, k, n),
        K = (0, s.GV)(),
        { analyticsLocations: q } = (0, d.Ay)([...W, r.A.USER_PROFILE_MODAL]),
        Q = (0, c.pb)({
            layout: "MODAL",
            userId: n.id,
            sourceSessionId: M,
            guildId: z,
            channelId: k,
            messageId: B,
            roleId: U,
        }),
        J = (0, S.A)(n),
        Z = (0, _.A)({ user: n, guildId: D, channelId: k, displayProfile: Y, onClose: H });
    return (0, i.jsx)(d.f5, {
        value: q,
        children: (0, i.jsx)(c.of, {
            value: Q,
            openedAt: V,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, i.jsx)(p.N, {
                value: F,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: w,
                    className: L.zr,
                    hideShadow: !0,
                    "aria-labelledby": K,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(a.Fmo, {
                        component: (0, i.jsx)(a.AC4, {
                            children: (0, i.jsx)(a.H, { id: K, children: P.intl.format(P.t.KRe1Fk, { name: X }) }),
                        }),
                        children: (0, i.jsxs)(m.A, {
                            user: n,
                            displayProfile: Y,
                            themeType: R.d.MODAL,
                            children: [
                                (0, i.jsx)(E.A, {
                                    children: (0, i.jsx)(b.A, { user: n, guildId: z, viewProfileItem: Z }),
                                }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(f.A, { user: n, displayProfile: Y, themeType: R.d.MODAL }),
                                        (0, i.jsxs)("div", {
                                            className: L.El,
                                            children: [
                                                (0, i.jsx)(A.A, {
                                                    user: n,
                                                    displayProfile: Y,
                                                    guildId: z,
                                                    channelId: k,
                                                    themeType: R.d.MODAL,
                                                }),
                                                (0, i.jsx)(y.A, {
                                                    user: n,
                                                    themeType: R.d.MODAL,
                                                    hasEntered: w === a.ip4.ENTERED,
                                                    onCloseProfile: H,
                                                    disableToolbar: !0,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: L.Pz,
                                                    children: [
                                                        (0, i.jsx)("div", {
                                                            className: L.jS,
                                                            children: (0, i.jsx)(j.e, {
                                                                variant: "secondary",
                                                                userId: n.id,
                                                                onClose: l.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)("div", {
                                                            className: L.pg,
                                                            children: (0, i.jsx)(j.l, {
                                                                variant: "secondary",
                                                                userId: n.id,
                                                                onClose: l.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(v.A, { user: n, guildId: z }),
                                                        (0, i.jsx)(I.A, { user: n }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(h.A, { userId: n.id, className: L.Fd }),
                                (0, i.jsxs)("div", {
                                    className: L.rf,
                                    children: [
                                        (0, i.jsx)(x.A, {
                                            className: L.Xh,
                                            user: n,
                                            guildId: z,
                                            nickname: X,
                                            pronouns: Y?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(g.A, {
                                                displayProfile: Y,
                                                themeType: R.d.MODAL,
                                                onClose: H,
                                            }),
                                        }),
                                        (0, i.jsx)(T.A, {
                                            user: n,
                                            currentUser: t,
                                            displayProfile: Y,
                                            guildId: z,
                                            items: J,
                                            initialSection: G ?? N.RP.BOT_INFO,
                                            onClose: H,
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
