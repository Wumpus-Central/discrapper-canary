n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(630054),
    l = n(793574),
    a = n(688810),
    o = n(915089),
    d = n(562153),
    c = n(183555),
    u = n(950191),
    m = n(722868),
    A = n(716804),
    x = n(718019),
    _ = n(31432),
    p = n(915614),
    f = n(559506),
    h = n(946356),
    g = n(810396),
    I = n(570314),
    j = n(490752),
    b = n(571077),
    v = n(587168),
    N = n(982985),
    C = n(159218),
    y = n(240783),
    T = n(371843),
    E = n(518477),
    L = n(652215),
    P = n(996988),
    O = n(985018),
    R = n(200445);
function S(e) {
    let {
            user: t,
            currentUser: n,
            guildId: S,
            channelId: M,
            messageId: G,
            roleId: k,
            sessionId: U,
            initialTabSection: w,
            initialScrollTarget: B,
            transitionState: D,
            onClose: F,
            sourceAnalyticsLocations: V = [],
            showGuildProfile: z,
        } = e,
        W = S === L.ME ? void 0 : S,
        H = (0, u.Ay)(t.id, z ? W : void 0),
        X = d.Ay.getName(W, M, t),
        Y = (0, o.GV)(),
        { analyticsLocations: Q } = (0, a.Ay)([...V, l.A.USER_PROFILE_MODAL]),
        K = (0, c.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: U,
            guildId: W,
            channelId: M,
            messageId: G,
            roleId: k,
        }),
        $ = (0, T.A)(t),
        J = (0, m.A)({ user: t, guildId: W, channelId: M, displayProfile: H, onClose: F });
    return (0, i.jsx)(a.f5, {
        value: Q,
        children: (0, i.jsx)(c.of, {
            value: K,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(A.N, {
                value: B,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: D,
                    className: R.zr,
                    hideShadow: !0,
                    "aria-labelledby": Y,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, { id: Y, children: O.intl.format(O.t.KRe1Fk, { name: X }) }),
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: t,
                            displayProfile: H,
                            themeType: P.d.MODAL,
                            children: [
                                (0, i.jsx)(v.A, {
                                    children: (0, i.jsx)(j.A, { user: t, guildId: W, viewProfileItem: J }),
                                }),
                                (0, i.jsxs)("div", {
                                    children: [
                                        (0, i.jsx)(p.A, { user: t, displayProfile: H, themeType: P.d.MODAL }),
                                        (0, i.jsxs)("div", {
                                            className: R.El,
                                            children: [
                                                (0, i.jsx)(x.A, {
                                                    user: t,
                                                    displayProfile: H,
                                                    guildId: W,
                                                    channelId: M,
                                                    themeType: P.d.MODAL,
                                                }),
                                                (0, i.jsx)(C.A, {
                                                    user: t,
                                                    themeType: P.d.MODAL,
                                                    hasEntered: D === s.ip4.ENTERED,
                                                    onCloseProfile: F,
                                                    disableToolbar: !0,
                                                }),
                                                (0, i.jsxs)("div", {
                                                    className: R.Pz,
                                                    children: [
                                                        (0, i.jsx)("div", {
                                                            className: R.jS,
                                                            children: (0, i.jsx)(N.e, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: r.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)("div", {
                                                            className: R.pg,
                                                            children: (0, i.jsx)(N.l, {
                                                                variant: "secondary",
                                                                userId: t.id,
                                                                onClose: r.A.popAll,
                                                            }),
                                                        }),
                                                        (0, i.jsx)(b.A, { user: t, guildId: W }),
                                                        (0, i.jsx)(I.A, { user: t }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(f.A, { userId: t.id, className: R.Fd }),
                                (0, i.jsxs)("div", {
                                    className: R.rf,
                                    children: [
                                        (0, i.jsx)(g.A, {
                                            className: R.Xh,
                                            user: t,
                                            guildId: W,
                                            nickname: X,
                                            pronouns: H?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, i.jsx)(_.A, {
                                                displayProfile: H,
                                                themeType: P.d.MODAL,
                                                onClose: F,
                                            }),
                                        }),
                                        (0, i.jsx)(y.A, {
                                            user: t,
                                            currentUser: n,
                                            displayProfile: H,
                                            guildId: W,
                                            items: $,
                                            initialSection: w ?? E.RP.BOT_INFO,
                                            onClose: F,
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
