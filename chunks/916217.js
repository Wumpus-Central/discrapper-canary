n.d(t, { A: () => B });
var a = n(627968),
    i = n(64700),
    l = n(935462),
    r = n(707554),
    s = n(140735),
    o = n(761508),
    d = n(834730),
    c = n(573613),
    _ = n(793574),
    u = n(688810),
    p = n(351966),
    m = n(915089),
    f = n(713517),
    x = n(562153),
    g = n(183555),
    h = n(950191),
    A = n(718019),
    b = n(31432),
    v = n(915614),
    I = n(389996),
    j = n(743987),
    y = n(900179),
    C = n(946356),
    N = n(810396),
    E = n(35241),
    T = n(587168),
    w = n(518477),
    P = n(652215),
    L = n(996988),
    k = n(985018),
    S = n(872116),
    R = n(741036),
    D = n(551652);
function B(e) {
    let {
            user: t,
            guildId: n,
            channelId: B,
            messageId: O,
            roleId: M,
            sessionId: G,
            transitionState: U,
            openedAt: F,
            onClose: H,
            sourceAnalyticsLocations: V = [],
        } = e,
        z = n === P.ME ? void 0 : n,
        W = (0, h.Ay)(t.id, z),
        X = x.Ay.getName(z, B, t),
        Y = (0, m.GV)(),
        { analyticsLocations: K } = (0, u.Ay)([...V, _.A.USER_PROFILE_MODAL]),
        J = (0, g.pb)({
            layout: "MODAL",
            userId: t.id,
            sourceSessionId: G,
            guildId: z,
            channelId: B,
            messageId: O,
            roleId: M,
        }),
        Q = i.useRef(null),
        q = (0, f.M)(Q);
    return (0, a.jsx)(u.f5, {
        value: K,
        children: (0, a.jsx)(g.of, {
            value: J,
            openedAt: F,
            fetchStartedAt: W?.fetchStartedAt,
            fetchEndedAt: W?.fetchEndedAt,
            isLoaded: W?.isLoaded,
            children: (0, a.jsxs)(l.EO, {
                "data-migration-pending": !0,
                transitionState: U,
                className: S.zr,
                hideShadow: !0,
                "aria-labelledby": Y,
                parentComponent: "NonUserBotProfileModal",
                children: [
                    (0, a.jsx)(r.F, {
                        component: (0, a.jsx)(s.A, {
                            children: (0, a.jsx)(r.H, { id: Y, children: k.intl.format(k.t.KRe1Fk, { name: X }) }),
                        }),
                        children: (0, a.jsxs)(C.A, {
                            user: t,
                            displayProfile: W,
                            themeType: L.d.MODAL,
                            ref: W?.profileEffect != null ? Q : void 0,
                            children: [
                                (0, a.jsx)(T.A, { children: (0, a.jsx)(E.A, { user: t }) }),
                                (0, a.jsxs)("div", {
                                    children: [
                                        (0, a.jsx)(v.A, { user: t, displayProfile: W, themeType: L.d.MODAL }),
                                        (0, a.jsx)("div", {
                                            className: S.El,
                                            children: (0, a.jsx)(A.A, {
                                                user: t,
                                                displayProfile: W,
                                                guildId: z,
                                                channelId: B,
                                                themeType: L.d.MODAL,
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: S.rf,
                                    children: [
                                        (0, a.jsx)(N.A, {
                                            className: S.Xh,
                                            user: t,
                                            guildId: z,
                                            nickname: X,
                                            pronouns: W?.pronouns,
                                            nicknameVariant: "heading-xl/bold",
                                            tags: (0, a.jsx)(b.A, {
                                                displayProfile: W,
                                                themeType: L.d.MODAL,
                                                onClose: H,
                                            }),
                                        }),
                                        (0, a.jsxs)("div", {
                                            className: D.kL,
                                            children: [
                                                (0, a.jsx)(o.V, {
                                                    className: D.$H,
                                                    type: "top",
                                                    selectedItem: w.RP.BOT_INFO,
                                                    onItemSelect: P.tEg,
                                                    children: (0, a.jsx)(
                                                        o.V.Item,
                                                        {
                                                            className: D.YU,
                                                            id: w.RP.BOT_INFO,
                                                            "aria-label": k.intl.string(k.t.ZzAR2Y),
                                                            children: (0, a.jsx)(d.E, {
                                                                variant: "text-sm/normal",
                                                                children: k.intl.string(k.t.ZzAR2Y),
                                                            }),
                                                        },
                                                        w.RP.BOT_INFO,
                                                    ),
                                                }),
                                                (0, a.jsxs)(c.Ip, {
                                                    fade: !0,
                                                    className: R.XG,
                                                    children: [
                                                        (0, a.jsx)(I.E, {
                                                            userId: t.id,
                                                            userBio: W?.bio,
                                                            setLineClamp: !1,
                                                        }),
                                                        (0, a.jsx)(y.A, {
                                                            heading: k.intl.string(k.t["A//N4k"]),
                                                            children: (0, a.jsx)(j.A, {
                                                                userId: t.id,
                                                                guildId: z,
                                                                tooltipDelay: w.In,
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
                    W?.profileEffect != null && (0, a.jsx)(p.A, { skuId: W?.profileEffect?.skuId, isHovering: q }),
                ],
            }),
        }),
    });
}
