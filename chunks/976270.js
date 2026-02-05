n.d(t, { A: () => R });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(630054),
    a = n(793574),
    r = n(688810),
    d = n(915089),
    o = n(562153),
    c = n(183555),
    u = n(950191),
    A = n(722868),
    x = n(716804),
    m = n(718019),
    p = n(31432),
    h = n(915614),
    f = n(559506),
    g = n(946356),
    I = n(810396),
    j = n(570314),
    _ = n(490752),
    N = n(571077),
    v = n(587168),
    b = n(982985),
    T = n(159218),
    E = n(240783),
    y = n(371843),
    C = n(518477),
    P = n(652215),
    L = n(996988),
    S = n(985018),
    O = n(763563);
function R(e) {
    let {
            user: t,
            currentUser: n,
            guildId: R,
            channelId: D,
            messageId: M,
            roleId: G,
            sessionId: U,
            initialTabSection: k,
            initialScrollTarget: F,
            transitionState: V,
            openedAt: B,
            onClose: w,
            sourceAnalyticsLocations: W = [],
            showGuildProfile: z,
        } = e,
        H = R === P.ME ? void 0 : R,
        K = (0, u.Ay)(t.id, z ? H : void 0),
        Y = o.Ay.getName(H, D, t),
        $ = (0, d.GV)(),
        { analyticsLocations: J } = (0, r.Ay)([...W, a.A.USER_PROFILE_MODAL]),
        X = (0, c.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: U,
            guildId: H,
            channelId: D,
            messageId: M,
            roleId: G,
        }),
        Q = (0, y.A)(t),
        Z = (0, A.A)({ user: t, guildId: H, channelId: D, displayProfile: K, onClose: w });
    return (0, i.jsx)(r.f5, {
        value: J,
        children: (0, i.jsx)(c.of, {
            value: X,
            openedAt: B,
            fetchStartedAt: K?.fetchStartedAt,
            fetchEndedAt: K?.fetchEndedAt,
            isLoaded: K?.isLoaded,
            children: (0, i.jsx)(x.N, {
                value: F,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: V,
                    className: O.zr,
                    hideShadow: !0,
                    "aria-labelledby": $,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, { id: $, children: S.intl.format(S.t.KRe1Fk, { name: Y }) }),
                        }),
                        children: (0, i.jsxs)(g.A, {
                            user: t,
                            displayProfile: K,
                            themeType: L.d.MODAL,
                            children: [
                                (0, i.jsx)(v.A, {
                                    children: (0, i.jsx)(_.A, { user: t, guildId: H, viewProfileItem: Z }),
                                }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(h.A, { user: t, displayProfile: K, themeType: L.d.MODAL }),
                                        (0, i.jsxs)("div", {
                                            className: O.El,
                                            children: [
                                                (0, i.jsx)(m.A, {
                                                    user: t,
                                                    displayProfile: K,
                                                    guildId: H,
                                                    channelId: D,
                                                    themeType: L.d.MODAL,
                                                }),
                                                (0, i.jsx)(T.A, {
                                                    user: t,
                                                    themeType: L.d.MODAL,
                                                    hasEntered: V === s.ip4.ENTERED,
                                                    onCloseProfile: w,
                                                    disableToolbar: !0,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: O.Pz,
                                                    children: [
                                                        (0, i.jsx)("div", {
                                                            className: O.jS,
                                                            children: (0, i.jsx)(b.e, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: l.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)("div", {
                                                            className: O.pg,
                                                            children: (0, i.jsx)(b.l, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: l.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(N.A, { user: t, guildId: H }),
                                                        (0, i.jsx)(j.A, { user: t }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(f.A, { userId: t.id, className: O.Fd }),
                                (0, i.jsxs)("div", {
                                    className: O.rf,
                                    children: [
                                        (0, i.jsx)(I.A, {
                                            className: O.Xh,
                                            user: t,
                                            guildId: H,
                                            nickname: Y,
                                            pronouns: K?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(p.A, {
                                                displayProfile: K,
                                                themeType: L.d.MODAL,
                                                onClose: w,
                                            }),
                                        }),
                                        (0, i.jsx)(E.A, {
                                            user: t,
                                            currentUser: n,
                                            displayProfile: K,
                                            guildId: H,
                                            items: Q,
                                            initialSection: k ?? C.RP.BOT_INFO,
                                            onClose: w,
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
